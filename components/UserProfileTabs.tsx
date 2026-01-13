"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TabContent {
  id: string;
  label: string;
  headline: string;
  features: string[];
  videoSrc: string;
  ctaText: string;
  ctaLink: string;
  useCase: string;
}

const tabData: TabContent[] = [
  {
    id: "traders",
    label: "Traders",
    headline: "Never Miss the Next Big Launch",
    features: [
      "Pre-Launch Discovery: Browse curated projects before public launch",
      "Early Access Alerts: Get notified about projects matching your criteria",
      "Project Analytics: Tokenomics, team verification, and risk assessment",
      "Community Access: Join private trader communities and share insights",
      "Airdrop Opportunities: Exclusive airdrops for active community members",
    ],
    videoSrc: "/video-demos/traders-demo.mp4",
    ctaText: "Start Trading",
    ctaLink: "#get-started",
    useCase: "Imagine discovering a project 48 hours before launch. Set alerts, analyze tokenomics, and join the community—all in one place.",
  },
  {
    id: "developers",
    label: "Developers",
    headline: "Launch Your Project with Confidence",
    features: [
      "Quick Project Listing: Submit your project in minutes with all required details",
      "Marketer Matching: Get proposals from verified promoters automatically",
      "Token Launch Automation: Deploy to pump.fun and more with one click",
      "Smart Contract Templates: Pre-audited lock/vesting schedules",
      "Escrow Protection: Secure payments with automated release conditions",
      "Dispute Resolution: Built-in support for handling conflicts",
    ],
    videoSrc: "/video-demos/developers-demo.mp4",
    ctaText: "List Your Project",
    ctaLink: "#get-started",
    useCase: "Submit your project Monday morning. By Wednesday, you have proposals from 5 verified marketers. Launch by Friday.",
  },
  {
    id: "promoters",
    label: "Promoters",
    headline: "Build Your Reputation. Land Better Projects.",
    features: [
      "Service Listings: Showcase your marketing packages and pricing",
      "Portfolio Builder: Link proof of work and past project results",
      "Reputation System: On-chain reputation tied to wallet and past projects",
      "Proposal Requests: Get notified when projects match your expertise",
      "Performance Tracking: Track metrics like traffic, conversions, and on-chain buys",
      "Priority Ranking: Higher reputation = better project access",
    ],
    videoSrc: "/video-demos/promoters-demo.mp4",
    ctaText: "Join as Promoter",
    ctaLink: "#get-started",
    useCase: "Your past projects are verified on-chain. New clients see your track record instantly. Higher reputation = better projects.",
  },
];

export default function UserProfileTabs() {
  const [activeTab, setActiveTab] = useState("traders");
  const activeContent = tabData.find((tab) => tab.id === activeTab) || tabData[0];

  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#171717] mb-4">
            Use Cases
          </h2>
          <p className="font-sans text-lg text-[#737373] max-w-2xl mx-auto">
            Discover how LaunchLink works for traders, developers, and promoters
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-[#E5E5E5]">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-3 font-semibold text-base transition-all duration-300 relative",
                "border-b-2 border-transparent",
                activeTab === tab.id
                  ? "text-[#0066FF] border-[#0066FF]"
                  : "text-[#737373] hover:text-[#404040]"
              )}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-8 lg:space-y-0"
            >
              {/* Mobile/Tablet Layout: Headline -> Video -> Content */}
              <div className="lg:hidden space-y-8">
                {/* Headline */}
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#171717] leading-tight">
                  {activeContent.headline}
                </h2>

                {/* Video */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] bg-[#FAFAFA]">
                  <video
                    key={activeTab}
                    src={activeContent.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                    aria-label={`${activeContent.label} demo video`}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Features List */}
                <ul className="space-y-4">
                  {activeContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-[#10B981] w-5 h-5 mt-0.5 shrink-0" />
                      <span className="font-sans text-base text-[#404040] leading-relaxed">
                        <strong>{feature.split(":")[0]}:</strong>
                        {feature.includes(":") && ` ${feature.split(":")[1]}`}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Use Case Scenario */}
                <blockquote className="border-l-4 border-[#0066FF] pl-6 py-4 bg-[#FAFAFA] rounded-r-lg">
                  <p className="font-sans text-lg text-[#404040] italic leading-relaxed">
                    "{activeContent.useCase}"
                  </p>
                </blockquote>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={activeContent.ctaLink}
                    className="inline-block px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200 shadow-[0_4px_14px_rgba(0,102,255,0.3)]"
                  >
                    {activeContent.ctaText}
                  </Link>
                </div>
              </div>

              {/* Desktop Layout: Content Left, Video Right */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Content */}
                <div className="space-y-6">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-[#171717] leading-tight">
                    {activeContent.headline}
                  </h2>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {activeContent.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-[#10B981] w-5 h-5 mt-0.5 shrink-0" />
                        <span className="font-sans text-base text-[#404040] leading-relaxed">
                          <strong>{feature.split(":")[0]}:</strong>
                          {feature.includes(":") && ` ${feature.split(":")[1]}`}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Use Case Scenario */}
                  <blockquote className="border-l-4 border-[#0066FF] pl-6 py-4 bg-[#FAFAFA] rounded-r-lg">
                    <p className="font-sans text-lg text-[#404040] italic leading-relaxed">
                      "{activeContent.useCase}"
                    </p>
                  </blockquote>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      href={activeContent.ctaLink}
                      className="inline-block px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200 shadow-[0_4px_14px_rgba(0,102,255,0.3)]"
                    >
                      {activeContent.ctaText}
                    </Link>
                  </div>
                </div>

                {/* Right Side: Video */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] bg-[#FAFAFA]">
                  <video
                    key={activeTab}
                    src={activeContent.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                    aria-label={`${activeContent.label} demo video`}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

