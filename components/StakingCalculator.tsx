"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Megaphone, TrendingUp, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type UserType = "developer" | "promoter" | "trader";

interface TierBenefits {
  developer: string[];
  promoter: string[];
  trader: string[];
}

const TIER_THRESHOLDS = {
  tier1: 500000,
  tier2: 2000000,
  tier3: 8000000,
};

const BENEFITS: Record<"tier1" | "tier2" | "tier3", TierBenefits> = {
  tier1: {
    developer: [
      "10% discount on listing fees",
      "5% discount on escrow fees",
      "Access to token launch automation",
      "Standard dispute protection",
      "Access to Tier 1 private community",
    ],
    promoter: [
      "10% discount on service listing fees",
      "+5 priority boost in project bid rankings",
      "Access to projects with budgets up to $500",
      "Monthly token airdrops",
      "Basic analytics dashboard",
    ],
    trader: [
      "Basic data tools and analytics",
      "Monthly exclusive airdrops",
      "Access to Tier 1 trader community",
    ],
  },
  tier2: {
    developer: [
      "25% discount on listing fees",
      "15% discount on escrow fees",
      "Priority access to token launch automation",
      "Enhanced dispute protection & priority support",
      "Access to Tier 2 private community",
      "Featured project placement",
    ],
    promoter: [
      "25% discount on service listing fees",
      "+15 priority boost in project bid rankings",
      "Access to projects with budgets up to $2K",
      "Bi-weekly token airdrops",
      "Advanced analytics dashboard with on-chain attribution",
      "Priority notification for high-value projects",
    ],
    trader: [
      "Advanced data tools and analytics",
      "Bi-weekly exclusive airdrops",
      "Access to Tier 2 trader community",
      "Priority customer support",
    ],
  },
  tier3: {
    developer: [
      "50% discount on listing fees",
      "30% discount on escrow fees",
      "VIP access to token launch automation",
      "Premium dispute protection & dedicated support",
      "Access to Tier 3 exclusive community",
      "Top-tier featured project placement",
      "Custom launch consultation",
    ],
    promoter: [
      "50% discount on service listing fees",
      "+30 priority boost in project bid rankings",
      "Access to all projects (no budget limit)",
      "Weekly token airdrops",
      "Premium analytics dashboard with full attribution tracking",
      "First notification for all high-value projects",
      "Verified promoter badge",
    ],
    trader: [
      "Premium data tools with AI insights",
      "Weekly exclusive airdrops",
      "Access to Tier 3 VIP trader community",
      "Dedicated account manager",
      "Beta access to new features",
    ],
  },
};

export default function StakingCalculator() {
  const [stakingAmount, setStakingAmount] = useState<string>("");
  const [userType, setUserType] = useState<UserType>("developer");

  const amount = parseFloat(stakingAmount) || 0;

  const getTier = (): "none" | "tier1" | "tier2" | "tier3" => {
    if (amount >= TIER_THRESHOLDS.tier3) return "tier3";
    if (amount >= TIER_THRESHOLDS.tier2) return "tier2";
    if (amount >= TIER_THRESHOLDS.tier1) return "tier1";
    return "none";
  };

  const currentTier = getTier();
  const currentBenefits = currentTier !== "none" ? BENEFITS[currentTier][userType] : [];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "tier3":
        return "from-[#7C3AED] to-[#0066FF]";
      case "tier2":
        return "from-[#0066FF] to-[#7C3AED]";
      case "tier1":
        return "from-[#0066FF] to-[#10B981]";
      default:
        return "from-[#E5E5E5] to-[#E5E5E5]";
    }
  };

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case "tier3":
        return "Tier 3 - Premium";
      case "tier2":
        return "Tier 2 - Advanced";
      case "tier1":
        return "Tier 1 - Starter";
      default:
        return "No Tier";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Input Section - Neutral Background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#FAFAFA] rounded-xl p-6 sm:p-8 border border-[#E5E5E5] mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Staking Amount Input */}
          <div>
            <label className="font-sans text-sm font-semibold text-[#171717] mb-2 block">
              Staking Amount ($LLINK)
            </label>
            <input
              type="number"
              value={stakingAmount}
              onChange={(e) => setStakingAmount(e.target.value)}
              placeholder="Enter amount..."
              className={cn(
                "w-full px-4 py-3 rounded-lg border-2 transition-colors",
                "font-sans text-base",
                "focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent",
                currentTier !== "none"
                  ? "border-[#0066FF] bg-white"
                  : "border-[#E5E5E5] bg-white"
              )}
            />
          </div>

          {/* User Type Selector */}
          <div>
            <label className="font-sans text-sm font-semibold text-[#171717] mb-2 block">
              User Type
            </label>
            {/* Mobile/Tablet: Dropdown */}
            <div className="relative lg:hidden">
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value as UserType)}
                className={cn(
                  "w-full px-4 py-3 pr-10 rounded-lg border-2 transition-colors",
                  "font-sans text-base appearance-none",
                  "focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent",
                  "bg-white border-[#E5E5E5] text-[#171717]"
                )}
              >
                <option value="developer">Developer</option>
                <option value="promoter">Promoter</option>
                <option value="trader">Trader</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#737373] pointer-events-none" />
            </div>
            {/* Desktop: Button Group */}
            <div className="hidden lg:inline-flex bg-[#F5F5F5] rounded-lg p-1 gap-1 w-full">
              <button
                onClick={() => setUserType("developer")}
                className={cn(
                  "flex-1 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200",
                  "flex items-center justify-center gap-2",
                  userType === "developer"
                    ? "bg-white text-[#0066FF] shadow-sm"
                    : "text-[#737373] hover:text-[#404040]"
                )}
              >
                <Code className="w-4 h-4" />
                Developer
              </button>
              <button
                onClick={() => setUserType("promoter")}
                className={cn(
                  "flex-1 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200",
                  "flex items-center justify-center gap-2",
                  userType === "promoter"
                    ? "bg-white text-[#7C3AED] shadow-sm"
                    : "text-[#737373] hover:text-[#404040]"
                )}
              >
                <Megaphone className="w-4 h-4" />
                Promoter
              </button>
              <button
                onClick={() => setUserType("trader")}
                className={cn(
                  "flex-1 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200",
                  "flex items-center justify-center gap-2",
                  userType === "trader"
                    ? "bg-white text-[#10B981] shadow-sm"
                    : "text-[#737373] hover:text-[#404040]"
                )}
              >
                <TrendingUp className="w-4 h-4" />
                Trader
              </button>
            </div>
          </div>
        </div>

        {/* Tier Indicator with Benefits */}
        {stakingAmount && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "rounded-lg p-4 sm:p-6",
              currentTier !== "none"
                ? `bg-gradient-to-r ${getTierColor(currentTier)} text-white`
                : "bg-[#E5E5E5] text-[#737373]"
            )}
          >
            {currentTier !== "none" ? (
              <>
                <p className="font-display text-2xl font-bold text-center mb-4">{getTierLabel(currentTier)}</p>
                <p className="font-sans text-xs mb-4 text-center opacity-90">
                  Minimum 48 hours staking required to unlock benefits
                </p>
                {currentBenefits.length > 0 && (
                  <ul className="space-y-3">
                    {currentBenefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                        <span className="font-sans text-base text-white leading-relaxed">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <>
                <p className="font-sans text-base text-[#737373] mb-2 text-center">
                  Stake at least 500,000 $LLINK to unlock Tier 1 benefits
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center text-sm text-[#404040]">
                  <span>Tier 1: 500K $LLINK</span>
                  <span>Tier 2: 2M $LLINK</span>
                  <span>Tier 3: 8M $LLINK</span>
                </div>
              </>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

