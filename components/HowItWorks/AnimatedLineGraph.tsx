"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Generate price data with the pattern: slow up, slight down, big up
const generatePriceData = (): number[] => {
  const prices: number[] = [];
  let currentPrice = 0.0001; // Starting price
  
  // Phase 1: Slow upward movement (first 8 points)
  for (let i = 0; i < 8; i++) {
    const change = 0.00001 + Math.random() * 0.00002; // Small upward movement
    currentPrice += change;
    prices.push(currentPrice);
  }
  
  // Phase 2: Slight downward movement (next 3 points)
  for (let i = 0; i < 3; i++) {
    const change = -0.000005 - Math.random() * 0.00001; // Small downward movement
    currentPrice += change;
    prices.push(currentPrice);
  }
  
  // Phase 3: Big upward movement (remaining points)
  for (let i = 0; i < 9; i++) {
    const change = 0.00005 + Math.random() * 0.0001; // Large upward movement
    currentPrice += change;
    prices.push(currentPrice);
  }
  
  return prices;
};

interface AnimatedLineGraphProps {
  onPriceUpdate?: (currentPrice: number, entryPrice: number) => void;
}

export default function AnimatedLineGraph({ onPriceUpdate }: AnimatedLineGraphProps) {
  const [prices, setPrices] = useState<number[]>([]);
  const [visiblePoints, setVisiblePoints] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const entryPrice = 0.0001; // Launch price
  const onPriceUpdateRef = useRef(onPriceUpdate);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  // Update ref when callback changes
  useEffect(() => {
    onPriceUpdateRef.current = onPriceUpdate;
  }, [onPriceUpdate]);

  // Track mount status
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const data = generatePriceData();
    setPrices(data);
    setVisiblePoints(0);
    setIsAnimating(true);
    
    // Animate points appearing one by one
    intervalRef.current = setInterval(() => {
      setVisiblePoints((prev) => {
        const nextIndex = prev + 1;
        
        if (nextIndex >= data.length) {
          setIsAnimating(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          // Defer callback to avoid updating parent during render
          setTimeout(() => {
            if (isMountedRef.current && onPriceUpdateRef.current) {
              onPriceUpdateRef.current(data[data.length - 1], entryPrice);
            }
          }, 0);
          return data.length - 1; // Return last valid index
        }
        
        const currentPrice = data[nextIndex];
        // Defer callback to avoid updating parent during render
        setTimeout(() => {
          if (isMountedRef.current && onPriceUpdateRef.current) {
            onPriceUpdateRef.current(currentPrice, entryPrice);
          }
        }, 0);
        
        return nextIndex;
      });
    }, 200); // Show one point every 200ms

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [entryPrice]); // Include entryPrice in dependencies

  if (prices.length === 0) return null;

  // Calculate chart dimensions
  const chartWidth = 1000;
  const chartHeight = 300;
  const padding = { top: 20, right: 20, bottom: 40, left: 20 };
  const graphWidth = chartWidth - padding.left - padding.right;
  const graphHeight = chartHeight - padding.top - padding.bottom;

  // Find min and max prices for scaling
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice || 0.0001;

  // Scale function to convert price to Y coordinate
  const scaleY = (price: number) => {
    return (
      padding.top +
      graphHeight -
      ((price - minPrice) / priceRange) * graphHeight
    );
  };

  // Scale function to convert index to X coordinate
  const scaleX = (index: number) => {
    return padding.left + (index / (prices.length - 1)) * graphWidth;
  };

  // Format price for display
  const formatPrice = (price: number) => {
    return `$${price.toFixed(6)}`;
  };

  // Generate path for the line
  const visiblePrices = prices.slice(0, visiblePoints + 1);
  const pathData = visiblePrices
    .map((price, index) => {
      const x = scaleX(index);
      const y = scaleY(price);
      return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    })
    .join(" ");

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-4 sm:mb-6 pl-5">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#171717] text-left">
          Live Price Chart
        </h3>
      </div>

      <div className="relative overflow-x-auto">
          <svg
            width={chartWidth}
            height={chartHeight}
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="w-full h-auto"
          >
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
              const y = padding.top + ratio * graphHeight;
              return (
                <line
                  key={ratio}
                  x1={padding.left}
                  y1={y}
                  x2={chartWidth - padding.right}
                  y2={y}
                  stroke="#E5E5E5"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                />
              );
            })}

            {/* Gradient definition for the line */}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0066FF" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0066FF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Area under the curve */}
            {visiblePoints > 0 && (
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: visiblePoints * 0.2, ease: "linear" }}
                d={`${pathData} L ${scaleX(visiblePoints)} ${chartHeight - padding.bottom} L ${padding.left} ${chartHeight - padding.bottom} Z`}
                fill="url(#areaGradient)"
              />
            )}

            {/* Line path */}
            {visiblePoints > 0 && (
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: visiblePoints * 0.2, ease: "linear" }}
                d={pathData}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {/* Last data point only */}
            {visiblePoints > 0 && visiblePrices.length > 0 && (
              <motion.circle
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, delay: visiblePoints * 0.2 }}
                cx={scaleX(visiblePrices.length - 1)}
                cy={scaleY(visiblePrices[visiblePrices.length - 1])}
                r={5}
                fill="#0066FF"
                stroke="white"
                strokeWidth="2"
              />
            )}

            {/* Y-axis line */}
            <line
              x1={padding.left}
              y1={padding.top}
              x2={padding.left}
              y2={chartHeight - padding.bottom}
              stroke="#E5E5E5"
              strokeWidth="2"
            />

            {/* X-axis line */}
            <line
              x1={padding.left}
              y1={chartHeight - padding.bottom}
              x2={chartWidth - padding.right}
              y2={chartHeight - padding.bottom}
              stroke="#E5E5E5"
              strokeWidth="2"
            />
          </svg>
      </div>
    </div>
  );
}
