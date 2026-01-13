import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Users, Rocket, Shield, Target, Zap, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#171717] mb-6 text-center leading-tight">
              About LaunchLink
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-lg md:text-xl text-[#737373] mb-8 max-w-3xl mx-auto text-center leading-relaxed">
              Building the infrastructure that connects the entire crypto launch ecosystem—from ideation to trading—with trust, transparency, and smart contracts at its core.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative bg-[#FAFAFA] py-16 md:py-24 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171717] mb-6 text-center">
              Our Mission
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-lg text-[#404040] mb-8 max-w-3xl mx-auto text-center leading-relaxed">
              LaunchLink revolutionizes how crypto projects come to life. We've built the platform where traders discover pre-launches, developers find marketers, and promoters build their reputation—all powered by blockchain trust.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#7C3AED]">
                Connect. Launch. Succeed.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171717] mb-4 text-center">
              What We Do
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-lg text-[#737373] mb-12 max-w-2xl mx-auto text-center">
              LaunchLink is a comprehensive platform that brings together three key communities in the crypto space.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-[#E5E5E5] hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#171717] mb-3">
                  For Traders
                </h3>
                <p className="font-sans text-base text-[#737373] leading-relaxed">
                  Discover vetted pre-launches before they hit the market. Get early alerts, track projects, and join exclusive communities to never miss the next big opportunity.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-[#E5E5E5] hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#171717] mb-3">
                  For Developers
                </h3>
                <p className="font-sans text-base text-[#737373] leading-relaxed">
                  Find trusted marketers, automate token launches, and secure your project with built-in escrow. Focus on building while we handle the rest.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-[#E5E5E5] hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#171717] mb-3">
                  For Promoters
                </h3>
                <p className="font-sans text-base text-[#737373] leading-relaxed">
                  Showcase your work, get verified, and connect with high-quality projects. Your on-chain reputation speaks for itself and opens doors to better opportunities.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="relative bg-[#FAFAFA] py-16 md:py-24 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171717] mb-4 text-center">
              Core Platform Features
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-lg text-[#737373] mb-12 max-w-2xl mx-auto text-center">
              Built for the future of crypto launches with trust and transparency at the core.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0066FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#171717] mb-2">
                      Wallet-Based Reputation
                    </h3>
                    <p className="font-sans text-sm text-[#737373] leading-relaxed">
                      Your wallet is your identity. Reputation is built from verified on-chain activity and project history, creating a transparent trust system.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0066FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#171717] mb-2">
                      Smart Escrow System
                    </h3>
                    <p className="font-sans text-sm text-[#737373] leading-relaxed">
                      Automated escrow protects both developers and promoters. Funds release only when milestones are met, ensuring fair transactions.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0066FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#171717] mb-2">
                      Token Launch Automation
                    </h3>
                    <p className="font-sans text-sm text-[#737373] leading-relaxed">
                      Deploy to multiple platforms simultaneously with one click. Pre-configured smart contracts ensure security and compliance.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0066FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#171717] mb-2">
                      Multi-Chain Support
                    </h3>
                    <p className="font-sans text-sm text-[#737373] leading-relaxed">
                      Launch projects across multiple blockchain networks including Solana, Ethereum, Base, BNB Chain, and more.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#171717] mb-4 text-center">
              Our Values
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-lg text-[#737373] mb-12 max-w-2xl mx-auto text-center">
              The principles that guide everything we build.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#171717] mb-2">
                  Trustworthy
                </h3>
                <p className="font-sans text-sm text-[#737373]">
                  Essential for escrow and reputation systems. We prioritize security and transparency in everything we do.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#171717] mb-2">
                  Energetic
                </h3>
                <p className="font-sans text-sm text-[#737373]">
                  Reflecting the fast-paced crypto world. We move quickly and innovate constantly.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#171717] mb-2">
                  Accessible
                </h3>
                <p className="font-sans text-sm text-[#737373]">
                  Easy navigation for all user types. We believe crypto should be accessible to everyone.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#171717] mb-2">
                  Innovative
                </h3>
                <p className="font-sans text-sm text-[#737373]">
                  Always planning ahead. We're building the infrastructure for the future of crypto launches.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#0066FF] to-[#7C3AED] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Join the LaunchLink Community
              </h2>
              <p className="font-sans text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Be among the first to access LaunchLink when we launch. Get early access to features, exclusive updates, and priority support.
              </p>
              <Link
                href="/#waitlist"
                className="inline-block px-8 py-4 bg-white text-[#0066FF] font-semibold rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                Join the Waitlist
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

