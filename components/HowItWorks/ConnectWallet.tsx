"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Code, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

type Role = "developer" | "promoter";

export default function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [role, setRole] = useState<Role>("developer");

  const handleConnect = () => {
    setIsConnected(true);
  };

  // Fake stats data
  const developerStats = {
    projectsLaunched: 12,
    totalRaised: "$2.4M",
    successRate: "94%",
    avgRating: 4.8,
  };

  const promoterStats = {
    campaignsManaged: 28,
    totalReach: "1.2M",
    successRate: "89%",
    avgRating: 4.6,
  };

  const currentStats = role === "developer" ? developerStats : promoterStats;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <AnimatePresence mode="wait">
        {!isConnected ? (
          <motion.div
            key="connect"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <button
              onClick={handleConnect}
              className={cn(
                "px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#0066FF] to-[#7C3AED]",
                "text-white font-semibold rounded-xl",
                "hover:scale-105 transition-transform duration-200",
                "shadow-[0_4px_14px_rgba(0,102,255,0.3)]",
                "flex items-center gap-2 sm:gap-3 text-base sm:text-lg"
              )}
            >
              <Wallet className="w-5 h-5 sm:w-6 sm:h-6" />
              Connect Wallet
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="connected"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl"
          >
            {/* Role Switcher */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex bg-[#F5F5F5] rounded-lg p-1 gap-1">
                <button
                  onClick={() => setRole("developer")}
                  className={cn(
                    "px-3 py-2 sm:px-6 sm:py-2 rounded-md font-semibold text-xs sm:text-sm transition-all duration-200",
                    "flex items-center gap-1.5 sm:gap-2",
                    role === "developer"
                      ? "bg-white text-[#0066FF] shadow-sm"
                      : "text-[#737373] hover:text-[#404040]"
                  )}
                >
                  <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="hidden sm:inline">Developer</span>
                  <span className="sm:hidden">Dev</span>
                </button>
                <button
                  onClick={() => setRole("promoter")}
                  className={cn(
                    "px-3 py-2 sm:px-6 sm:py-2 rounded-md font-semibold text-xs sm:text-sm transition-all duration-200",
                    "flex items-center gap-1.5 sm:gap-2",
                    role === "promoter"
                      ? "bg-white text-[#7C3AED] shadow-sm"
                      : "text-[#737373] hover:text-[#404040]"
                  )}
                >
                  <Megaphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="hidden sm:inline">Promoter</span>
                  <span className="sm:hidden">Promo</span>
                </button>
              </div>
            </div>

            {/* Profile Section */}
            <div className="bg-[#FAFAFA] rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-[#E5E5E5]">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#0066FF] to-[#7C3AED] flex items-center justify-center text-white font-bold text-lg sm:text-xl shrink-0">
                  {role === "developer" ? "D" : "P"}
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-lg sm:text-xl font-bold text-[#171717] truncate">
                    {role === "developer" ? "Developer Profile" : "Promoter Profile"}
                  </h4>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {role === "developer" ? (
                <>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                    <p className="font-sans text-xs sm:text-sm text-[#737373] mb-1 leading-tight">
                      Projects Launched
                    </p>
                    <p className="font-display text-xl sm:text-2xl font-bold text-[#171717]">
                      {developerStats.projectsLaunched}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                    <p className="font-sans text-xs sm:text-sm text-[#737373] mb-1 leading-tight">
                      Total Raised
                    </p>
                    <p className="font-display text-xl sm:text-2xl font-bold text-[#171717]">
                      {developerStats.totalRaised}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                    <p className="font-sans text-xs sm:text-sm text-[#737373] mb-1 leading-tight">
                      Success Rate
                    </p>
                    <p className="font-display text-xl sm:text-2xl font-bold text-[#10B981]">
                      {developerStats.successRate}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                    <p className="font-sans text-xs sm:text-sm text-[#737373] mb-1 leading-tight">
                      Avg Rating
                    </p>
                    <p className="font-display text-xl sm:text-2xl font-bold text-[#171717]">
                      {developerStats.avgRating}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                    <p className="font-sans text-xs sm:text-sm text-[#737373] mb-1 leading-tight">
                      Campaigns Managed
                    </p>
                    <p className="font-display text-xl sm:text-2xl font-bold text-[#171717]">
                      {promoterStats.campaignsManaged}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                    <p className="font-sans text-xs sm:text-sm text-[#737373] mb-1 leading-tight">
                      Total Reach
                    </p>
                    <p className="font-display text-xl sm:text-2xl font-bold text-[#171717]">
                      {promoterStats.totalReach}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                    <p className="font-sans text-xs sm:text-sm text-[#737373] mb-1 leading-tight">
                      Success Rate
                    </p>
                    <p className="font-display text-xl sm:text-2xl font-bold text-[#10B981]">
                      {promoterStats.successRate}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                    <p className="font-sans text-xs sm:text-sm text-[#737373] mb-1 leading-tight">
                      Avg Rating
                    </p>
                    <p className="font-display text-xl sm:text-2xl font-bold text-[#171717]">
                      {promoterStats.avgRating}
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

