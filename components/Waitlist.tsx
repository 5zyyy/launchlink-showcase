"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { Check, Mail, User, BanknoteArrowUp, Hammer, ChevronDown, Landmark, Loader2, AlertCircle } from "lucide-react";
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { addToWaitlist } from "@/lib/actions/waitlist";

export default function Waitlist() {
  const [userType, setUserType] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telegram, setTelegram] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await addToWaitlist(email, userType, telegram || undefined);
      
      if (result.success) {
        setIsSubmitted(true);
        // Reset form
        setUserType("");
        setEmail("");
        setTelegram("");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0066FF] via-[#7C3AED] to-[#0066FF] py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Join the LaunchLink Waitlist
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.2}>
          <p className="font-sans text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Be among the first to access LaunchLink when we launch. Get early access to features, 
            exclusive updates, and priority support. Join thousands of developers, promoters, and 
            traders building the future of crypto launches.
          </p>
        </ScrollReveal>

        {/* Waitlist Form */}
        <ScrollReveal delay={0.3}>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selector */}
                <div>
                  <label className="font-sans text-sm font-semibold text-[#171717] mb-3 block">
                    I am a...
                  </label>
                  
                  {/* Mobile: Dropdown */}
                  <div className="sm:hidden">
                    <div className="relative">
                      <select
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        className={cn(
                          "w-full pl-4 pr-10 py-3 rounded-lg border-2 appearance-none",
                          "font-sans text-base font-semibold",
                          "focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10",
                          "transition-all duration-200",
                          userType
                            ? "border-[#0066FF] bg-[#0066FF]/5 text-[#0066FF]"
                            : "border-[#E5E5E5] bg-white text-[#737373]"
                        )}
                      >
                        <option value="">Select user type...</option>
                        <option value="Trader">Trader</option>
                        <option value="Developer">Developer</option>
                        <option value="Promoter">Promoter</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#737373] pointer-events-none" />
                    </div>
                  </div>

                  {/* Desktop: Button Grid */}
                  <div className="hidden sm:grid grid-cols-3 gap-4">
                    {["Trader", "Developer", "Promoter"].map((type) => {
                      const getIcon = () => {
                        switch (type) {
                          case "Developer":
                            return <Hammer className="w-5 h-5" />;
                          case "Promoter":
                            return <BanknoteArrowUp className="w-5 h-5" />;
                          default:
                            return <User className="w-5 h-5" />;
                        }
                      };

                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setUserType(type)}
                          className={cn(
                            "px-6 py-4 rounded-xl border-2 transition-all duration-300 text-center",
                            "font-sans text-base font-semibold",
                            userType === type
                              ? "border-[#0066FF] bg-[#0066FF]/5 text-[#0066FF] shadow-[0_4px_12px_rgba(0,102,255,0.2)]"
                              : "border-[#E5E5E5] bg-white text-[#737373] hover:border-[#0066FF]/50 hover:text-[#0066FF]"
                          )}
                        >
                          <div className="flex items-center justify-center gap-2">
                            {getIcon()}
                            <span>{type}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="font-sans text-sm font-semibold text-[#171717] mb-2 block">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#737373]" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className={cn(
                        "w-full pl-12 pr-4 py-3 rounded-lg border border-[#E5E5E5]",
                        "font-sans text-base text-[#171717]",
                        "focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10",
                        "transition-all duration-200",
                        "placeholder:text-[#737373]"
                      )}
                    />
                  </div>
                </div>

                {/* Telegram Input */}
                <div>
                  <label htmlFor="telegram" className="font-sans text-sm font-semibold text-[#171717] mb-2 block">
                    Telegram Username <span className="text-[#737373] font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <FaTelegram className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#737373]" />
                    <input
                      type="text"
                      id="telegram"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                      placeholder="username"
                      className={cn(
                        "w-full pl-12 pr-4 py-3 rounded-lg border border-[#E5E5E5]",
                        "font-sans text-base text-[#171717]",
                        "focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10",
                        "transition-all duration-200",
                        "placeholder:text-[#737373]"
                      )}
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-[#EF4444]/10 border border-[#EF4444] rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-sm text-[#EF4444]">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!userType || !email || isLoading}
                  className={cn(
                    "w-full px-8 py-4 rounded-xl font-semibold text-base",
                    "bg-gradient-to-r from-[#0066FF] to-[#7C3AED] text-white",
                    "hover:scale-105 transition-transform duration-200",
                    "shadow-[0_4px_14px_rgba(0,102,255,0.3)]",
                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                    "font-sans flex items-center justify-center gap-2"
                  )}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Joining...</span>
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>
              </form>
            ) : (
              /* Success Message */
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#10B981]/10 mb-4">
                  <Check className="w-8 h-8 text-[#10B981]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#171717] mb-2">
                  You're on the list!
                </h3>
                <p className="font-sans text-base text-[#737373]">
                  We'll notify you as soon as LaunchLink launches.
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* How to Stay Updated */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              How to Stay Updated
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <div className="font-sans text-base text-white/90 flex items-center gap-2">
                <FaTelegram className="w-5 h-5" />
                <span>Join our Telegram</span>
              </div>
              <div className="font-sans text-base text-white/60 flex items-center gap-2">
                <FaDiscord className="w-5 h-5" />
                <span>Discord (Coming soon)</span>
              </div>
              <div className="font-sans text-base text-white/90 flex items-center gap-2">
                <FaXTwitter className="w-5 h-5" />
                <span>Follow our X</span>
              </div>
              <div className="font-sans text-base text-white/60 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Newsletter (Coming soon)</span>
              </div>
              <div className="font-sans text-base text-white/60 flex items-center gap-2">
                <Landmark className="w-5 h-5" />
                <span>Governance Portal (Coming soon)</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

