"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Brain, Users, DollarSign, Percent, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedLineGraph from "./AnimatedLineGraph";

export default function Launch() {
  const [isLaunched, setIsLaunched] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0.0001);
  const [entryPrice] = useState(0.0001); // Launch price
  const [initialPositionValueSOL] = useState(10); // Starting position: 10 SOL

  const handleLaunch = () => {
    setIsLaunched(true);
    setCurrentPrice(entryPrice); // Reset to entry price on launch
  };

  const handlePriceUpdate = (price: number, entry: number) => {
    setCurrentPrice(price);
  };

  // Calculate trader metrics
  const calculateMetrics = () => {
    const pnlPercent = ((currentPrice - entryPrice) / entryPrice) * 100;
    
    // Position value in SOL (starts at 10 SOL, increases with price)
    const priceMultiplier = currentPrice / entryPrice;
    const positionValueSOL = initialPositionValueSOL * priceMultiplier;
    
    // Token holders increase as price goes up (simulate interest)
    // Base holders + increase based on price growth
    const baseHolders = 50;
    const holderGrowth = Math.max(0, pnlPercent * 2); // 2 holders per 1% gain
    const tokenHolders = Math.round(baseHolders + holderGrowth);
    
    // Market cap = price * total supply (assuming 1B tokens, standard for pump.fun/bonk.fun)
    const totalSupply = 1000000000; // 1 billion tokens
    const marketCap = currentPrice * totalSupply;
    
    return {
      pnlPercent,
      positionValueSOL,
      tokenHolders,
      marketCap,
    };
  };

  const metrics = isLaunched ? calculateMetrics() : null;

  // AI Prediction data
  const aiPrediction = {
    predictedPeakMC: "$2.5M",
    confidence: 78,
    timeToPeak: "24-48h",
    projectedGrowth: "+1,250%",
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3 sm:p-6 md:p-8">
      <AnimatePresence mode="wait">
        {!isLaunched ? (
          <motion.div
            key="pre-launch"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            {/* AI Prediction */}
            <div className="bg-gradient-to-r from-[#7C3AED] to-[#0066FF] rounded-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 text-white">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <h3 className="font-display text-base sm:text-xl md:text-2xl font-bold">AI Performance Prediction</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <p className="font-sans text-[10px] sm:text-xs md:text-sm opacity-90 mb-1">Predicted Peak MC</p>
                  <p className="font-display text-lg sm:text-2xl md:text-3xl font-bold">
                    {aiPrediction.predictedPeakMC}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[10px] sm:text-xs md:text-sm opacity-90 mb-1">Confidence</p>
                  <p className="font-display text-lg sm:text-2xl md:text-3xl font-bold">
                    {aiPrediction.confidence}%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <p className="font-sans text-[10px] sm:text-xs md:text-sm opacity-90 mb-1">Time to Peak</p>
                  <p className="font-display text-sm sm:text-lg md:text-xl font-bold">
                    {aiPrediction.timeToPeak}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[10px] sm:text-xs md:text-sm opacity-90 mb-1">Projected Growth</p>
                  <p className="font-display text-sm sm:text-lg md:text-xl font-bold text-[#14F195]">
                    {aiPrediction.projectedGrowth}
                  </p>
                </div>
              </div>
            </div>

            {/* Launch Button */}
            <div className="flex flex-col items-center">
              <button
                onClick={handleLaunch}
                className={cn(
                  "w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5",
                  "bg-gradient-to-r from-[#0066FF] to-[#7C3AED]",
                  "text-white font-bold rounded-xl text-base sm:text-lg md:text-xl",
                  "hover:scale-105 transition-transform duration-200",
                  "shadow-[0_4px_14px_rgba(0,102,255,0.3)]",
                  "flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4"
                )}
              >
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                Launch
              </button>
              <p className="font-sans text-xs sm:text-sm text-[#737373] text-center px-2">
                Smart contracts will handle escrow and automated releases
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="launched"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl px-2 sm:px-0"
          >
            {/* Animated Line Graph */}
            <AnimatedLineGraph onPriceUpdate={handlePriceUpdate} />

            {/* Moving Metrics */}
            {metrics && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-4 sm:mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
              >
                {/* Number of Token Holders */}
                <div className="bg-[#FAFAFA] rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#737373] shrink-0" />
                    <p className="font-sans text-[10px] sm:text-xs text-[#737373] leading-tight">Token Holders</p>
                  </div>
                  <p className="font-display text-base sm:text-xl md:text-2xl font-bold text-[#171717]">
                    {metrics.tokenHolders.toLocaleString()}
                  </p>
                </div>

                {/* Market Cap */}
                <div className="bg-[#FAFAFA] rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#737373] shrink-0" />
                    <p className="font-sans text-[10px] sm:text-xs text-[#737373] leading-tight">Market Cap</p>
                  </div>
                  <p className="font-display text-base sm:text-xl md:text-2xl font-bold text-[#171717] break-words">
                    ${metrics.marketCap >= 1000000 
                      ? (metrics.marketCap / 1000000).toFixed(2) + "M"
                      : metrics.marketCap >= 1000
                      ? (metrics.marketCap / 1000).toFixed(2) + "K"
                      : metrics.marketCap.toFixed(2)}
                  </p>
                </div>

                {/* PnL */}
                <div className="bg-[#FAFAFA] rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Percent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#737373] shrink-0" />
                    <p className="font-sans text-[10px] sm:text-xs text-[#737373] leading-tight">PnL</p>
                  </div>
                  <p
                    className={cn(
                      "font-display text-base sm:text-xl md:text-2xl font-bold",
                      metrics.pnlPercent >= 0 ? "text-[#10B981]" : "text-[#EF4444]"
                    )}
                  >
                    {metrics.pnlPercent >= 0 ? "+" : ""}
                    {metrics.pnlPercent.toFixed(2)}%
                  </p>
                </div>

                {/* Position Value in SOL */}
                <div className="bg-[#FAFAFA] rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Wallet className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#737373] shrink-0" />
                    <p className="font-sans text-[10px] sm:text-xs text-[#737373] leading-tight">Position Value</p>
                  </div>
                  <p className="font-display text-base sm:text-xl md:text-2xl font-bold text-[#171717]">
                    {metrics.positionValueSOL.toFixed(2)} SOL
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

