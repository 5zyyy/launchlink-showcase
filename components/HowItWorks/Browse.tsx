"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, TrendingUp, AlertCircle, Clock, Zap, Shield, Eye, TestTube } from "lucide-react";
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  name: string;
  launchpad: "pump.fun" | "bonk.fun";
  status: "Pre-Launch" | "Launching Today" | "Launching Soon";
  launchDate: string;
  daysUntilLaunch: number;
  description: string;
  tokenomics: {
    utility: string;
    allocation: string; // Simplified: "Team 20%, Marketing 15%, Liquidity 40%, Community 25%"
    vesting: string; // Simplified: "Team: 12mo vesting"
    burnLock: string; // Simplified: "10% locked 24mo, 5% burn"
  };
  riskScore: number; // 1-10, lower is better
  earlyAccess: boolean; // Testing application available
  teamVerified: boolean;
  views: number;
  watchers: number;
  category: string;
  socials: {
    twitter?: string;
    telegram?: string;
    discord?: string;
  };
}

// Fake pre-launch projects data (trader perspective)
const projects: Project[] = [
  {
    id: 1,
    name: "MemeFi Protocol",
    launchpad: "pump.fun",
    status: "Pre-Launch",
    launchDate: "2026-03-15",
    daysUntilLaunch: 12,
    description: "A meme token with utility - combining viral potential with real DeFi mechanics.",
    tokenomics: {
      utility: "Governance token with staking rewards and premium features access.",
      allocation: "Team 20%, Marketing 15%, Liquidity 40%, Community 25%",
      vesting: "Team: 12mo linear vesting",
      burnLock: "10% locked 24mo, 5% burn on high volume",
    },
    riskScore: 3,
    earlyAccess: true,
    teamVerified: true,
    views: 3420,
    watchers: 189,
    category: "Meme",
    socials: {
      twitter: "",
      telegram: "",
      discord: "",
    },
  },
  {
    id: 2,
    name: "AI Trading Bot Token",
    launchpad: "bonk.fun",
    status: "Launching Today",
    launchDate: "2026-03-03",
    daysUntilLaunch: 0,
    description: "Utility token for an AI-powered trading bot platform. Launching today at 2 PM UTC.",
    tokenomics: {
      utility: "Access token for trading bot features with revenue sharing.",
      allocation: "Team 18%, Marketing 17%, Liquidity 40%, Community 25%",
      vesting: "Team: 15mo linear vesting",
      burnLock: "8% locked 18mo, 3% burn on renewals",
    },
    riskScore: 5,
    earlyAccess: true,
    teamVerified: false,
    views: 12450,
    watchers: 892,
    category: "AI",
    socials: {
      twitter: "",
      telegram: "",
      discord: "",
    },
  }
];

export default function Browse() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterLaunchpad, setFilterLaunchpad] = useState<"all" | "pump.fun" | "bonk.fun">("all");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Launching Today":
        return "bg-[#10B981] text-white";
      case "Launching Soon":
        return "bg-[#0066FF] text-white";
      case "Pre-Launch":
        return "bg-[#F59E0B] text-white";
      default:
        return "bg-[#E5E5E5] text-[#404040]";
    }
  };

  const getLaunchpadColor = (launchpad: string) => {
    switch (launchpad) {
      case "pump.fun":
        return "bg-gradient-to-r from-[#7C3AED] to-[#0066FF] text-white";
      case "bonk.fun":
        return "bg-gradient-to-r from-[#14F195] to-[#0066FF] text-white";
      default:
        return "bg-[#E5E5E5] text-[#404040]";
    }
  };

  const getRiskColor = (score: number) => {
    if (score <= 2) return "text-[#10B981]";
    if (score <= 4) return "text-[#F59E0B]";
    return "text-[#EF4444]";
  };

  const filteredProjects = filterLaunchpad === "all" 
    ? projects 
    : projects.filter(p => p.launchpad === filterLaunchpad);

  return (
    <div className="w-full h-full flex flex-col p-4 sm:p-6 md:p-8 overflow-y-auto">
      <AnimatePresence mode="wait">
        {!selectedProject || isMobile ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="mb-6">
              {/* <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#171717] mb-4">
                Discover Pre-Launch Projects
              </h3>
              <p className="font-sans text-sm text-[#737373] mb-4">
                Browse upcoming Solana launches before they go live. Get early access and track projects that match your criteria.
              </p> */}

              {/* Launchpad Filter - Hidden on mobile */}
              <div className="hidden md:flex gap-2 mb-6">
                <button
                  onClick={() => setFilterLaunchpad("all")}
                  className={cn(
                    "px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200",
                    filterLaunchpad === "all"
                      ? "bg-gradient-to-r from-[#0066FF] to-[#7C3AED] text-white shadow-sm"
                      : "bg-[#F5F5F5] text-[#737373] hover:bg-[#E5E5E5]"
                  )}
                >
                  All Launchpads
                </button>
                <button
                  onClick={() => setFilterLaunchpad("pump.fun")}
                  className={cn(
                    "px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200",
                    filterLaunchpad === "pump.fun"
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#0066FF] text-white shadow-sm"
                      : "bg-[#F5F5F5] text-[#737373] hover:bg-[#E5E5E5]"
                  )}
                >
                  pump.fun
                </button>
                <button
                  onClick={() => setFilterLaunchpad("bonk.fun")}
                  className={cn(
                    "px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200",
                    filterLaunchpad === "bonk.fun"
                      ? "bg-gradient-to-r from-[#14F195] to-[#0066FF] text-white shadow-sm"
                      : "bg-[#F5F5F5] text-[#737373] hover:bg-[#E5E5E5]"
                  )}
                >
                  bonk.fun
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Mobile: Show only first project, Desktop: Show all filtered projects */}
              {(isMobile ? filteredProjects.slice(0, 1) : filteredProjects).map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={!isMobile ? { scale: 1.02 } : {}}
                  whileTap={!isMobile ? { scale: 0.98 } : {}}
                  onClick={() => {
                    // Only allow clicking on desktop
                    if (!isMobile) {
                      handleProjectClick(project);
                    }
                  }}
                  className={cn(
                    "bg-white rounded-xl p-4 sm:p-6 border-2 border-[#E5E5E5]",
                    "md:hover:border-[#0066FF] md:hover:shadow-lg",
                    "transition-all duration-300",
                    isMobile ? "cursor-default" : "cursor-pointer"
                  )}
                >
                  {/* Header */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-display text-lg sm:text-xl font-bold text-[#171717] mb-2">
                      {project.name}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <span
                        className={cn(
                          "px-2 py-0.5 sm:py-1 rounded-md text-xs font-semibold",
                          getLaunchpadColor(project.launchpad)
                        )}
                      >
                        {project.launchpad}
                      </span>
                      <span
                        className={cn(
                          "px-2 py-0.5 sm:py-1 rounded-md text-xs font-semibold",
                          getStatusColor(project.status)
                        )}
                      >
                        {project.status}
                      </span>
                      {project.earlyAccess && (
                        <span className="px-2 py-0.5 sm:py-1 rounded-md text-xs font-semibold bg-[#10B981] text-white flex items-center gap-1">
                          <TestTube className="w-3 h-3" />
                          <span className="hidden sm:inline">Beta Testing</span>
                          <span className="sm:hidden">Beta</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Metrics for Traders */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div>
                      <p className="font-sans text-xs text-[#737373] mb-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span className="hidden sm:inline">Launch In</span>
                        <span className="sm:hidden">Launch</span>
                      </p>
                      <p className="font-display text-base sm:text-lg font-bold text-[#171717]">
                        {project.daysUntilLaunch === 0 ? "Today" : `${project.daysUntilLaunch}d`}
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs text-[#737373] mb-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Risk
                      </p>
                      <p className={cn("font-display text-base sm:text-lg font-bold", getRiskColor(project.riskScore))}>
                        {project.riskScore}/10
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs text-[#737373] mb-1 flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        Watchers
                      </p>
                      <p className="font-display text-base sm:text-lg font-bold text-[#171717]">
                        {project.watchers}
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs text-[#737373] mb-1">
                        Supply
                      </p>
                      <p className="font-display text-base sm:text-lg font-bold text-[#171717]">
                        1B
                      </p>
                    </div>
                  </div>

                  {/* Social Links & Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      {project.socials.twitter && (
                        <div className="text-[#737373] p-1 cursor-default">
                          <FaXTwitter className="w-4 h-4" />
                        </div>
                      )}
                      {project.socials.telegram && (
                        <div className="text-[#737373] p-1 cursor-default">
                          <FaTelegram className="w-4 h-4" />
                        </div>
                      )}
                      {project.socials.discord && (
                        <div className="text-[#737373] p-1 cursor-default">
                          <FaDiscord className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      {project.teamVerified && (
                        <span className="flex items-center gap-1 text-[#10B981]">
                          <Shield className="w-3 h-3" />
                          <span className="hidden sm:inline font-semibold">Verified</span>
                        </span>
                      )}
                      <span className="text-[#737373] hidden sm:inline">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <button
              onClick={handleBack}
              className={cn(
                "flex items-center gap-2 mb-6 text-[#737373] hover:text-[#0066FF]",
                "transition-colors duration-200 font-semibold"
              )}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </button>

            {/* Project Details */}
            <div className="bg-white rounded-xl border-2 border-[#E5E5E5] p-4 sm:p-6 md:p-8">
              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#171717] mb-3">
                  {selectedProject.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={cn(
                      "px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-semibold",
                      getLaunchpadColor(selectedProject.launchpad)
                    )}
                  >
                    {selectedProject.launchpad}
                  </span>
                  <span
                    className={cn(
                      "px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-semibold",
                      getStatusColor(selectedProject.status)
                    )}
                  >
                    {selectedProject.status}
                  </span>
                  {selectedProject.earlyAccess && (
                    <span className="px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-semibold bg-[#10B981] text-white flex items-center gap-1">
                      <TestTube className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Beta Testing</span>
                      <span className="sm:hidden">Beta</span>
                    </span>
                  )}
                </div>
                <p className="font-sans text-sm sm:text-base text-[#737373] leading-relaxed mb-3">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <span className="text-[#737373]">Category:</span>
                  <span className="font-semibold text-[#171717]">{selectedProject.category}</span>
                  {selectedProject.teamVerified && (
                    <>
                      <span className="text-[#737373] hidden sm:inline">•</span>
                      <span className="flex items-center gap-1 text-[#10B981] font-semibold">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Verified Team</span>
                        <span className="sm:hidden">Verified</span>
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Launch Countdown */}
              <div className="bg-gradient-to-r from-[#0066FF] to-[#7C3AED] rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h4 className="font-display text-lg sm:text-xl font-bold">Launch Countdown</h4>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="font-display text-3xl sm:text-4xl font-bold">
                    {selectedProject.daysUntilLaunch === 0 ? "Today" : `${selectedProject.daysUntilLaunch}`}
                  </p>
                  <p className="font-sans text-sm sm:text-lg">
                    {selectedProject.daysUntilLaunch === 0 ? "" : selectedProject.daysUntilLaunch === 1 ? "day" : "days"} until launch
                  </p>
                </div>
                <p className="font-sans text-xs sm:text-sm mt-2 opacity-90">
                  {new Date(selectedProject.launchDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              {/* Social Links */}
              <div className="mb-4 sm:mb-6">
                <h4 className="font-display text-base sm:text-lg font-bold text-[#171717] mb-2 sm:mb-3">Join Community</h4>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  {selectedProject.socials.twitter && (
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] cursor-default">
                      <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5 text-[#737373]" />
                      <span className="font-sans text-xs sm:text-sm font-semibold text-[#171717]">X</span>
                    </div>
                  )}
                  {selectedProject.socials.telegram && (
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] cursor-default">
                      <FaTelegram className="w-4 h-4 sm:w-5 sm:h-5 text-[#737373]" />
                      <span className="font-sans text-xs sm:text-sm font-semibold text-[#171717]">Telegram</span>
                    </div>
                  )}
                  {selectedProject.socials.discord && (
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] cursor-default">
                      <FaDiscord className="w-4 h-4 sm:w-5 sm:h-5 text-[#737373]" />
                      <span className="font-sans text-xs sm:text-sm font-semibold text-[#171717]">Discord</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-[#FAFAFA] rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                  <p className="font-sans text-xs text-[#737373] mb-1 sm:mb-2">Risk</p>
                  <p className={cn("font-display text-xl sm:text-2xl font-bold", getRiskColor(selectedProject.riskScore))}>
                    {selectedProject.riskScore}/10
                  </p>
                  <p className="font-sans text-xs text-[#737373] mt-1 hidden sm:block">
                    {selectedProject.riskScore <= 2 ? "Low Risk" : selectedProject.riskScore <= 4 ? "Medium Risk" : "Higher Risk"}
                  </p>
                </div>
                <div className="bg-[#FAFAFA] rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                  <p className="font-sans text-xs text-[#737373] mb-1 sm:mb-2">Watchers</p>
                  <p className="font-display text-xl sm:text-2xl font-bold text-[#171717]">
                    {selectedProject.watchers}
                  </p>
                </div>
                <div className="bg-[#FAFAFA] rounded-lg p-3 sm:p-4 border border-[#E5E5E5]">
                  <p className="font-sans text-xs text-[#737373] mb-1 sm:mb-2">Views</p>
                  <p className="font-display text-xl sm:text-2xl font-bold text-[#171717]">
                    {selectedProject.views.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Tokenomics */}
              <div className="mb-4 sm:mb-6">
                <h4 className="font-display text-lg sm:text-xl font-bold text-[#171717] mb-3 sm:mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  Tokenomics
                </h4>
                
                <div className="bg-[#FAFAFA] rounded-lg p-3 sm:p-4 border border-[#E5E5E5] space-y-3 sm:space-y-4">
                  {/* Total Supply */}
                  <div>
                    <p className="font-sans text-xs text-[#737373] mb-1">Total Supply</p>
                    <p className="font-display text-base sm:text-lg font-bold text-[#171717]">
                      1B tokens
                    </p>
                  </div>

                  {/* Utility */}
                  <div>
                    <p className="font-sans text-xs font-semibold text-[#171717] mb-1">Utility</p>
                    <p className="font-sans text-xs sm:text-sm text-[#737373]">
                      {selectedProject.tokenomics.utility}
                    </p>
                  </div>

                  {/* Allocation */}
                  <div>
                    <p className="font-sans text-xs font-semibold text-[#171717] mb-1">Allocation</p>
                    <p className="font-sans text-xs sm:text-sm text-[#737373]">
                      {selectedProject.tokenomics.allocation}
                    </p>
                  </div>

                  {/* Vesting & Lock */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <p className="font-sans text-xs font-semibold text-[#171717] mb-1">Vesting</p>
                      <p className="font-sans text-xs sm:text-sm text-[#737373]">
                        {selectedProject.tokenomics.vesting}
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-[#171717] mb-1">Burn & Lock</p>
                      <p className="font-sans text-xs sm:text-sm text-[#737373]">
                        {selectedProject.tokenomics.burnLock}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Beta Testing Info */}
              {selectedProject.earlyAccess && (
                <div className="bg-[#10B981]/10 border border-[#10B981] rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <TestTube className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981]" />
                      <div>
                        <h4 className="font-display text-xs sm:text-sm font-bold text-[#171717]">Beta Testing Available</h4>
                        <p className="font-sans text-xs text-[#737373] hidden sm:block">Apply to test the product</p>
                      </div>
                    </div>
                    <button
                      className={cn(
                        "w-full sm:w-auto px-4 py-2 bg-[#10B981] text-white font-semibold rounded-lg text-xs sm:text-sm",
                        "hover:bg-[#059669] transition-colors duration-200",
                        "flex items-center justify-center gap-2"
                      )}
                    >
                      <TestTube className="w-3 h-3 sm:w-4 sm:h-4" />
                      Apply
                    </button>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  className={cn(
                    "flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#0066FF] to-[#7C3AED]",
                    "text-white font-semibold rounded-xl text-sm sm:text-base",
                    "hover:scale-105 transition-transform duration-200",
                    "shadow-[0_4px_14px_rgba(0,102,255,0.3)]",
                    "flex items-center justify-center gap-2"
                  )}
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Set Launch Alert</span>
                  <span className="sm:hidden">Set Alert</span>
                </button>
                <button
                  className={cn(
                    "flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-[#0066FF]",
                    "text-[#0066FF] font-semibold rounded-xl text-sm sm:text-base",
                    "hover:bg-[#0066FF] hover:text-white transition-colors duration-200",
                    "flex items-center justify-center gap-2"
                  )}
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">View on {selectedProject.launchpad}</span>
                  <span className="sm:hidden">View</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
