"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MousePointerClick } from "lucide-react";
import { cn } from "@/lib/utils";
import ConnectWallet from "./HowItWorks/ConnectWallet";
import Browse from "./HowItWorks/Browse";
import Launch from "./HowItWorks/Launch";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Connect Your Wallet",
    description: "Sign in with your Web3 wallet. Your reputation and history follow you.",
    icon: "🔗",
  },
  {
    id: 2,
    title: "List or Browse Projects",
    description: "Developers submit projects. Traders discover them. Promoters find opportunities.",
    icon: "🔀",
  },
  {
    id: 3,
    title: "Launch with Confidence",
    description: "Smart contracts handle escrow, releases, and verification. Everything is transparent and secure.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(1);
  const currentStepData = steps.find((step) => step.id === currentStep) || steps[0];
  
  // Swipe detection for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50; // Minimum distance in pixels to trigger swipe

  const nextStep = () => {
    setCurrentStep((prev) => (prev >= steps.length ? 1 : prev + 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev <= 1 ? steps.length : prev - 1));
  };

  const goToStep = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    // Only capture swipe if starting from the main container area
    // Allow child components to handle their own touches
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea')) {
      return; // Don't interfere with interactive elements
    }
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextStep();
    }
    if (isRightSwipe) {
      prevStep();
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#171717] text-center mb-6">
          From Idea to Launch in Three Simple Steps
        </h2>

        {/* Main Container - Two Connected Boxes */}
        <div className="mt-16 relative">
          {/* Main Interactive Box (Top) */}
          <div className={cn(
            "bg-white rounded-t-2xl p-8 md:p-12",
            "border-2 border-b-0 border-[#E5E5E5]",
            "shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
            "min-h-[500px] md:min-h-[600px]",
            "relative overflow-hidden"
          )}>
            {/* Interactive Notice */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg px-3 py-1.5">
              <MousePointerClick className="w-3.5 h-3.5 text-[#737373]" />
              <span className="font-sans text-xs text-[#737373] hidden sm:inline">
                Content is interactive
              </span>
              <span className="font-sans text-xs text-[#737373] sm:hidden">
                Interactive
              </span>
            </div>

            {/* Left Arrow - Hidden on mobile */}
            <button
              onClick={prevStep}
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 z-10",
                "w-12 h-12 rounded-full",
                "hidden md:flex items-center justify-center",
                "text-[#737373] hover:text-[#0066FF]",
                "hover:bg-[#F5F5F5]",
                "transition-all duration-300"
              )}
              aria-label="Previous step"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow - Hidden on mobile */}
            <button
              onClick={nextStep}
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 z-10",
                "w-12 h-12 rounded-full",
                "hidden md:flex items-center justify-center",
                "text-[#737373] hover:text-[#0066FF]",
                "hover:bg-[#F5F5F5]",
                "transition-all duration-300"
              )}
              aria-label="Next step"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Interactive Area - Takes Full Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center select-none"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {currentStep === 1 && <ConnectWallet />}
                {currentStep === 2 && <Browse />}
                {currentStep === 3 && <Launch />}
              </motion.div>
            </AnimatePresence>

            {/* Step Indicator Dots at Bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <div className="flex items-center justify-center gap-3">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => goToStep(step.id)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      currentStep === step.id
                        ? "bg-gradient-to-r from-[#0066FF] to-[#7C3AED] w-8"
                        : "bg-[#E5E5E5] hover:bg-[#737373]"
                    )}
                    aria-label={`Go to step ${step.id}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Step Metadata Box (Bottom - Connected) */}
          <div className={cn(
            "bg-[#FAFAFA] rounded-b-2xl p-8 md:p-12",
            "border-2 border-t-0 border-[#E5E5E5]",
            "shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          )}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-start text-left"
              >
                {/* Title */}
                <h3 className="font-display text-3xl md:text-4xl font-bold text-[#171717] mb-3">
                  {currentStepData.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-lg text-[#737373] leading-relaxed">
                  {currentStepData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

