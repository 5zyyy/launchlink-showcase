import NavBar from "@/components/NavBar";
import { InteractiveGridPattern } from "@/components/ui/shadcn-io/interactive-grid-pattern";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import UserProfileTabs from "@/components/UserProfileTabs";
import HowItWorks from "@/components/HowItWorks";
import { Search, Rocket, Trophy, Shield, Lock, TrendingUp, Brain, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import StakingCalculator from "@/components/StakingCalculator";
import ScamWarningModal from "@/components/ScamWarningModal";
import Roadmap from "@/components/Roadmap";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ScamWarningModal />
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
        {/* Interactive Grid Pattern Background */}
        <InteractiveGridPattern
          className={cn(
            "absolute inset-0 h-full w-full",
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "md:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "lg:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
          )}
          width={40}
          height={40}
          squares={[24, 24]}
          squaresClassName={cn(
            "stroke-gray-400/30",
            "hover:fill-[#0066FF]/30",
            "transition-colors duration-200 ease-in-out",
            "[&:not(:hover)]:duration-1000"
          )}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#171717] mb-6 leading-tight">
            Connect. Launch. Succeed.
          </h1>
          <p className="font-sans text-lg md:text-xl text-[#737373] mb-8 max-w-3xl mx-auto leading-relaxed">
            The platform where traders discover pre-launches, developers find marketers, 
            and promoters build their reputation. All powered by blockchain trust.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#get-started"
              className="px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200 shadow-[0_4px_14px_rgba(0,102,255,0.3)] text-base"
            >
              Launch Your Project
            </Link>
            <button
              className="px-8 py-4 bg-transparent border-2 border-[#0066FF] text-[#0066FF] font-semibold rounded-xl hover:bg-[#0066FF] hover:text-white transition-colors duration-200 text-base cursor-default"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative bg-white border-t border-[#E5E5E5] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">🔍</div>
              <div className="font-sans text-xs sm:text-base md:text-lg font-semibold text-[#171717]">
                Discover Early
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">🚀</div>
              <div className="font-sans text-xs sm:text-base md:text-lg font-semibold text-[#171717]">
                Launch Faster
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">🏆</div>
              <div className="font-sans text-xs sm:text-base md:text-lg font-semibold text-[#171717]">
                Build Reputation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Heading */}
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#171717] text-center mb-6">
              Built for the Future of Crypto Launches
            </h2>
          </ScrollReveal>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Feature 1: Wallet-Based Reputation */}
            <ScrollReveal delay={0.1}>
              <div className={cn(
                "bg-[#FAFAFA] rounded-xl p-8 transition-all duration-300 h-full",
                "hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-2",
                "border border-[#E5E5E5] hover:border-transparent",
                "relative overflow-hidden group flex flex-col"
              )}>
                {/* Gradient border effect on hover */}
                <div className={cn(
                  "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                  "bg-gradient-to-r from-[#0066FF] to-[#7C3AED] p-px"
                )}>
                  <div className="h-full w-full bg-[#FAFAFA] rounded-xl" />
                </div>
                
                <div className="relative z-10 flex flex-col">
                  <div className="mb-4">
                    <Shield className="w-12 h-12 text-[#0066FF]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#171717] mb-3">
                    On-Chain Trust
                  </h3>
                  <p className="font-sans text-base text-[#737373] leading-relaxed">
                    Your wallet is your identity. Reputation is built from verified on-chain activity and project history.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 2: Smart Escrow System */}
            <ScrollReveal delay={0.2}>
              <div className={cn(
                "bg-[#FAFAFA] rounded-xl p-8 transition-all duration-300 h-full",
                "hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-2",
                "border border-[#E5E5E5] hover:border-transparent",
                "relative overflow-hidden group flex flex-col"
              )}>
                {/* Gradient border effect on hover */}
                <div className={cn(
                  "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                  "bg-gradient-to-r from-[#0066FF] to-[#7C3AED] p-px"
                )}>
                  <div className="h-full w-full bg-[#FAFAFA] rounded-xl" />
                </div>
                
                <div className="relative z-10 flex flex-col">
                  <div className="mb-4">
                    <Lock className="w-12 h-12 text-[#0066FF]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#171717] mb-3">
                    Secure Payments
                  </h3>
                  <p className="font-sans text-base text-[#737373] leading-relaxed">
                    Automated escrow protects both developers and promoters. Funds release only when milestones are met.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 3: Token Launch Automation */}
            <ScrollReveal delay={0.3}>
              <div className={cn(
                "bg-[#FAFAFA] rounded-xl p-8 transition-all duration-300 h-full",
                "hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-2",
                "border border-[#E5E5E5] hover:border-transparent",
                "relative overflow-hidden group flex flex-col"
              )}>
                {/* Gradient border effect on hover */}
                <div className={cn(
                  "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                  "bg-gradient-to-r from-[#0066FF] to-[#7C3AED] p-px"
                )}>
                  <div className="h-full w-full bg-[#FAFAFA] rounded-xl" />
                </div>
                
                <div className="relative z-10 flex flex-col">
                  <div className="mb-4 flex items-center gap-2">
                    <Rocket className="w-10 h-10 text-[#0066FF]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#171717] mb-3">
                    One-Click Launches
                  </h3>
                  <p className="font-sans text-base text-[#737373] leading-relaxed">
                    Deploy to multiple platforms simultaneously. Pre-configured smart contracts ensure security and compliance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 4: Performance Tracking */}
            <ScrollReveal delay={0.4}>
              <div className={cn(
                "bg-[#FAFAFA] rounded-xl p-8 transition-all duration-300 h-full",
                "hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-2",
                "border border-[#E5E5E5] hover:border-transparent",
                "relative overflow-hidden group flex flex-col"
              )}>
                {/* Gradient border effect on hover */}
                <div className={cn(
                  "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                  "bg-gradient-to-r from-[#0066FF] to-[#7C3AED] p-px"
                )}>
                  <div className="h-full w-full bg-[#FAFAFA] rounded-xl" />
                </div>
                
                <div className="relative z-10 flex flex-col">
                  <div className="mb-4">
                    <TrendingUp className="w-12 h-12 text-[#0066FF]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#171717] mb-3">
                    Real-Time Analytics
                  </h3>
                  <p className="font-sans text-base text-[#737373] leading-relaxed">
                    Track marketing performance with on-chain attribution. See exactly where your traffic and buys come from.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 5: AI-Powered Verification */}
            <ScrollReveal delay={0.5}>
              <div className={cn(
                "bg-[#FAFAFA] rounded-xl p-8 transition-all duration-300 h-full",
                "hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-2",
                "border border-[#E5E5E5] hover:border-transparent",
                "relative overflow-hidden group flex flex-col"
              )}>
                {/* Gradient border effect on hover */}
                <div className={cn(
                  "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                  "bg-gradient-to-r from-[#0066FF] to-[#7C3AED] p-px"
                )}>
                  <div className="h-full w-full bg-[#FAFAFA] rounded-xl" />
                </div>
                
                <div className="relative z-10 flex flex-col">
                  <div className="mb-4">
                    <Brain className="w-12 h-12 text-[#0066FF]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#171717] mb-3">
                    Automated Compliance
                  </h3>
                  <p className="font-sans text-base text-[#737373] leading-relaxed">
                    AI checks for copied whitepapers and tokenomics. Video AMA verification ensures authentic projects.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 6: Smart Matching System */}
            <ScrollReveal delay={0.6}>
              <div className={cn(
                "bg-[#FAFAFA] rounded-xl p-8 transition-all duration-300 h-full",
                "hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-2",
                "border border-[#E5E5E5] hover:border-transparent",
                "relative overflow-hidden group flex flex-col"
              )}>
                {/* Gradient border effect on hover */}
                <div className={cn(
                  "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                  "bg-gradient-to-r from-[#0066FF] to-[#7C3AED] p-px"
                )}>
                  <div className="h-full w-full bg-[#FAFAFA] rounded-xl" />
                </div>
                
                <div className="relative z-10 flex flex-col">
                  <div className="mb-4">
                    <Target className="w-12 h-12 text-[#0066FF]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#171717] mb-3">
                    Intelligent Matching
                  </h3>
                  <p className="font-sans text-base text-[#737373] leading-relaxed">
                    AI-powered matching connects developers with the right marketers. Get proposals from promoters who match your project's needs.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* User Profile Sections (Tabbed Interface) */}
      <section id="use-cases">
        <ScrollReveal>
          <UserProfileTabs />
        </ScrollReveal>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>
      </section>

      {/* Token Benefits Section */}
      <section id="token-benefits" className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Heading */}
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#171717] text-center mb-6">
              Unlock Premium Features with LaunchLink Token
            </h2>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-lg md:text-xl text-[#737373] text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Stake $LLINK tokens to unlock exclusive benefits. Higher tiers unlock more features and discounts.
            </p>
          </ScrollReveal>

          {/* Staking Calculator */}
          <ScrollReveal delay={0.3}>
            <StakingCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap">
        <Roadmap />
      </section>

      {/* Waitlist Section */}
      <section id="waitlist">
        <Waitlist />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}