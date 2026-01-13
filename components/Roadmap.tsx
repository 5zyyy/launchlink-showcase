"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Check, Loader2, Calendar, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface Milestone {
  status: 'completed' | 'in-progress' | 'planned' | 'future';
  title: string;
  description: string;
}

interface RoadmapPhase {
  phase: string;
  date: string;
  title: string;
  milestones: Milestone[];
}

const roadmapData: RoadmapPhase[] = [
  {
    phase: "Q1 2026",
    date: "Q1 2026",
    title: "Foundation & MVP Launch",
    milestones: [
      { status: 'completed', title: 'Platform Beta Launch', description: 'Core listing functionality for developers and promoters' },
      { status: 'completed', title: 'Wallet Integration', description: 'Web3 wallet connection (MetaMask, WalletConnect, Phantom)' },
      { status: 'completed', title: 'Basic Reputation System', description: 'Wallet-based reputation tracking' },
      { status: 'completed', title: 'Project Listings', description: 'Quick-submit project listing with required fields (tokenomics, launch method, timelines, budget)' },
      { status: 'completed', title: 'Marketing Service Listings', description: 'Promoter service listings with pricing tiers and proof of work links' },
      { status: 'completed', title: 'Basic Escrow System', description: 'Initial escrow implementation for developer-promoter payments' },
      { status: 'completed', title: 'Up/Downvote System', description: 'Community voting and commenting on projects' },
      { status: 'in-progress', title: 'Token Launch', description: '$LLINK token deployment and initial distribution' },
      { status: 'in-progress', title: 'Staking Infrastructure', description: 'Smart contract deployment for staking mechanism' },
      { status: 'in-progress', title: 'Tier 1 Benefits Activation', description: 'First tier staking benefits go live' },
    ]
  },
  {
    phase: "Q2 2026",
    date: "Q2 2026",
    title: "Enhanced Matching & Trust",
    milestones: [
      { status: 'planned', title: 'Smart Matching System', description: 'AI-powered matching between developers and promoters' },
      { status: 'planned', title: '"Request Proposal" Feature', description: 'Developers can request marketing proposals directly' },
      { status: 'planned', title: 'Advanced Filters', description: 'Enhanced search and filtering for projects and services' },
      { status: 'planned', title: 'On-Chain Proof of Delivery', description: 'Promoters can submit verifiable on-chain proof of work' },
      { status: 'planned', title: 'Enhanced Escrow', description: 'Multi-milestone escrow with automated release conditions' },
      { status: 'planned', title: 'Reputation Dashboard', description: 'Detailed reputation visualization and history tracking' },
      { status: 'planned', title: 'Multi-Chain Support', description: 'Support for Solana, Ethereum, Base, and additional chains' },
      { status: 'planned', title: 'Staking Launch', description: 'Public staking goes live with all three tiers' },
      { status: 'planned', title: 'Tier 2 & 3 Benefits', description: 'Full activation of premium tier benefits' },
      { status: 'planned', title: 'Token Utility Expansion', description: 'Additional use cases for $LLINK (governance voting, fee payments)' },
      { status: 'planned', title: 'Airdrop Program', description: 'First community airdrop for early adopters' },
    ]
  },
  {
    phase: "Q3 2026",
    date: "Q3 2026",
    title: "Automation & Intelligence",
    milestones: [
      { status: 'planned', title: 'Token Launch Automation', description: 'One-click deployment to pump.fun, other launchpads' },
      { status: 'planned', title: 'Smart Contract Templates', description: 'Pre-audited lock/vesting schedule templates' },
      { status: 'planned', title: 'Dynamic Reputation Scoring', description: 'Machine learning-based reputation scoring using on-chain data' },
      { status: 'planned', title: 'Performance Tracking Dashboard', description: 'Real-time analytics for promoters (traffic, conversions, on-chain buys)' },
      { status: 'planned', title: 'Automated Compliance Ops', description: 'AI-powered document checking for copied whitepapers/tokenomics' },
      { status: 'planned', title: 'Video AMA Verification', description: 'Audio/video verification system for listed projects' },
      { status: 'planned', title: 'Attribution Tracking', description: 'On-chain attribution for influencer links and referral tracking' },
      { status: 'planned', title: 'Governance Launch', description: 'Token holder voting on platform proposals' },
      { status: 'planned', title: 'Fee Payment Integration', description: '$LLINK accepted for platform fees with discounts' },
      { status: 'planned', title: 'Liquidity Incentives', description: 'Staking rewards and liquidity mining programs' },
      { status: 'planned', title: 'Partnership Airdrops', description: 'Strategic partnership token distributions' },
    ]
  },
  {
    phase: "Q4 2026",
    date: "Q4 2026",
    title: "Social Trading & Scale",
    milestones: [
      { status: 'planned', title: 'Launch-Day Raid Coordination', description: 'Tools for coordinated launch-day marketing campaigns' },
      { status: 'planned', title: 'Alert Subscriptions', description: 'Customizable alerts for traders (project launches, price movements, etc.)' },
      { status: 'planned', title: 'Social Trading Features', description: 'Community insights, shared watchlists, and trader leaderboards' },
      { status: 'planned', title: 'Exposure Boosting', description: 'Paid promotion features for projects and services' },
      { status: 'planned', title: 'Advanced Analytics Suite', description: 'AI-powered insights and predictions for traders' },
      { status: 'planned', title: 'Token Buyback Program', description: 'Revenue-based token buyback and burn mechanism' },
      { status: 'planned', title: 'Yield Generation', description: 'Additional yield opportunities for stakers' },
    ]
  },
  {
    phase: "2027",
    date: "2027",
    title: "The Ecosystem Vision",
    milestones: [
      { status: 'future', title: 'Cross-Chain Launch Support', description: 'Launch projects across multiple blockchain networks including Base, Ethereum, BNB Chain, and other popular ecosystems' },
      { status: 'future', title: 'API & Developer Tools', description: 'Public API for third-party integrations' },
      { status: 'future', title: 'Advanced AI Features', description: 'Predictive analytics, automated market making, smart contract auditing' },
      { status: 'future', title: 'Global Expansion', description: 'Multi-language support and regional compliance' },
      { status: 'future', title: 'Full Decentralization', description: 'DAO governance with full community control' },
      { status: 'future', title: 'Token Utility Expansion', description: 'Additional use cases and partnerships' },
      { status: 'future', title: 'Ecosystem Fund', description: 'LaunchLink ecosystem fund for supporting new projects' },
      { status: 'future', title: 'Cross-Platform Integration', description: '$LLINK utility across partner platforms' },
    ]
  }
];

const getStatusIcon = (status: Milestone['status']) => {
  switch (status) {
    case 'completed':
      return <Check className="w-4 h-4" />;
    case 'in-progress':
      return <Loader2 className="w-4 h-4 animate-spin" />;
    case 'planned':
      return <Calendar className="w-4 h-4" />;
    case 'future':
      return <Eye className="w-4 h-4" />;
  }
};

const getStatusColor = (status: Milestone['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-[#10B981] text-white';
    case 'in-progress':
      return 'bg-[#0066FF] text-white';
    case 'planned':
      return 'bg-[#7C3AED] text-white';
    case 'future':
      return 'bg-[#737373] text-white';
  }
};

// Auto-scrolling container component
function AutoScrollContainer({ children, isActive }: { children: React.ReactNode; isActive: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const scrollDirectionRef = useRef<'down' | 'up'>('down');
  const scrollSpeedRef = useRef(0.3); // pixels per frame
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!isActive || !scrollRef.current) {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    const container = scrollRef.current;
    let scrollPosition = container.scrollTop || 0;
    lastTimeRef.current = performance.now();

    const autoScroll = (currentTime: number) => {
      if (!container) return;

      const maxScroll = container.scrollHeight - container.clientHeight;
      
      if (maxScroll <= 0) {
        animationFrameRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      // Calculate delta time for consistent speed regardless of frame rate
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;
      
      // Adjust scroll based on direction
      if (scrollDirectionRef.current === 'down') {
        scrollPosition += scrollSpeedRef.current * (deltaTime / 16); // Normalize to 60fps
        if (scrollPosition >= maxScroll) {
          scrollPosition = maxScroll;
          scrollDirectionRef.current = 'up';
        }
      } else {
        scrollPosition -= scrollSpeedRef.current * (deltaTime / 16);
        if (scrollPosition <= 0) {
          scrollPosition = 0;
          scrollDirectionRef.current = 'down';
        }
      }

      // Update scroll position
      container.scrollTop = Math.max(0, Math.min(maxScroll, scrollPosition));

      // Continue animation
      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll after a short delay
    const startDelay = setTimeout(() => {
      animationFrameRef.current = requestAnimationFrame(autoScroll);
    }, 500);

    return () => {
      clearTimeout(startDelay);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isActive]);

  // Prevent user scrolling
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      ref={scrollRef}
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
      className="mt-4 space-y-2 max-h-96 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      style={{ scrollBehavior: 'auto' }}
    >
      {children}
    </div>
  );
}

export default function Roadmap() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handlePhaseClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#171717] text-center mb-6">
            Building the Future, One Launch at a Time
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.2}>
          <p className="font-sans text-lg md:text-xl text-[#737373] text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Our roadmap reflects our commitment to continuous innovation. We're building 
            both the platform and the token ecosystem in parallel, ensuring every feature 
            delivers real value to our community.
          </p>
        </ScrollReveal>

        {/* Desktop/Tablet View */}
        <div className="hidden lg:block">
          {/* Date Row */}
          <div className="flex justify-between mb-8">
            {roadmapData.map((item, index) => (
              <div key={index} className="flex-1 flex justify-center">
                <div className="font-sans text-sm text-[#737373]">{item.date}</div>
              </div>
            ))}
          </div>

          {/* Timeline Line */}
          <div className="relative mb-12">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#0066FF]/20 via-[#7C3AED]/20 to-transparent"></div>

            {/* Phase Points */}
            <div className="flex justify-between">
              {roadmapData.map((item, index) => {
                const hasCompleted = item.milestones.some(m => m.status === 'completed');
                const hasInProgress = item.milestones.some(m => m.status === 'in-progress');
                const pointColor = hasCompleted ? '#10B981' : hasInProgress ? '#0066FF' : item.milestones[0]?.status === 'planned' ? '#7C3AED' : '#737373';
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className={cn(
                        "w-4 h-4 rounded-full relative -mt-2 cursor-pointer transition-all duration-300 z-10",
                        activeIndex === index 
                          ? "ring-4 ring-[#0066FF]/30 ring-offset-2 ring-offset-white scale-125" 
                          : "hover:scale-110"
                      )}
                      style={{ backgroundColor: pointColor }}
                      onClick={() => handlePhaseClick(index)}
                    >
                      {activeIndex !== index && index === 0 && (
                        <div 
                          className="absolute -top-1 -left-1 w-6 h-6 rounded-full animate-ping opacity-75"
                          style={{ backgroundColor: pointColor }}
                        ></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phase Cards */}
          <div className="grid grid-cols-5 gap-4">
            {roadmapData.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div 
                  className={cn(
                    "bg-[#FAFAFA] rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer h-full",
                    activeIndex === index 
                      ? "border-[#0066FF] shadow-[0_8px_24px_rgba(0,102,255,0.15)]" 
                      : "border-[#E5E5E5] hover:border-[#0066FF]/50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                  )}
                  onClick={() => handlePhaseClick(index)}
                >
                  <h3 className="font-display text-xl font-bold text-[#171717] mb-2">
                    {item.phase}
                  </h3>
                  <h4 className="font-sans text-base font-semibold text-[#0066FF] mb-3">
                    {item.title}
                  </h4>
                  <p className={cn(
                    "font-sans text-sm text-[#737373] transition-all duration-300 overflow-hidden",
                    activeIndex === index ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
                  )}>
                    {item.milestones.length} milestones
                  </p>
                </div>

                {/* Expanded Milestones */}
                {activeIndex === index && (
                  <AutoScrollContainer isActive={activeIndex === index}>
                    {item.milestones.map((milestone, mIndex) => (
                      <div
                        key={mIndex}
                        className="bg-white rounded-lg p-4 border border-[#E5E5E5] shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <div className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                            getStatusColor(milestone.status)
                          )}>
                            {getStatusIcon(milestone.status)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-sans text-sm font-semibold text-[#171717] mb-1">
                              {milestone.title}
                            </h5>
                            <p className="font-sans text-xs text-[#737373] leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </AutoScrollContainer>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="absolute left-8 w-0.5 h-full bg-gradient-to-b from-[#0066FF]/20 via-[#7C3AED]/20 to-transparent"></div>
            
            {roadmapData.map((item, index) => {
              const hasCompleted = item.milestones.some(m => m.status === 'completed');
              const hasInProgress = item.milestones.some(m => m.status === 'in-progress');
              const pointColor = hasCompleted ? '#10B981' : hasInProgress ? '#0066FF' : item.milestones[0]?.status === 'planned' ? '#7C3AED' : '#737373';
              
              return (
                <div key={index} className="flex mb-12 relative">
                  <div 
                    className={cn(
                      "w-4 h-4 rounded-full absolute left-8 -translate-x-2 cursor-pointer transition-all duration-300 z-10",
                      activeIndex === index && "ring-4 ring-[#0066FF]/30 ring-offset-2 ring-offset-white scale-125"
                    )}
                    style={{ backgroundColor: pointColor }}
                    onClick={() => handlePhaseClick(index)}
                  >
                    {activeIndex !== index && index === 0 && (
                      <div 
                        className="absolute -top-1 -left-1 w-6 h-6 rounded-full animate-ping opacity-75"
                        style={{ backgroundColor: pointColor }}
                      ></div>
                    )}
                  </div>
                  
                  <div className="pl-16 flex-1">
                    <div className="font-sans text-sm text-[#737373] mb-2">{item.date}</div>
                    <h3 className="font-display text-xl font-bold text-[#171717] mb-2">
                      {item.phase}
                    </h3>
                    <h4 className="font-sans text-lg font-semibold text-[#0066FF] mb-3">
                      {item.title}
                    </h4>
                    
                    <div className={cn(
                      "transition-all duration-300 overflow-hidden",
                      activeIndex === index ? "opacity-100 max-h-[2000px]" : "opacity-0 max-h-0"
                    )}>
                      <div className="space-y-3 pt-2">
                        {item.milestones.map((milestone, mIndex) => (
                          <div
                            key={mIndex}
                            className="bg-[#FAFAFA] rounded-lg p-4 border border-[#E5E5E5]"
                          >
                            <div className="flex items-start gap-3">
                              <div className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                getStatusColor(milestone.status)
                              )}>
                                {getStatusIcon(milestone.status)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h5 className="font-sans text-sm font-semibold text-[#171717] mb-1">
                                  {milestone.title}
                                </h5>
                                <p className="font-sans text-xs text-[#737373] leading-relaxed">
                                  {milestone.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

