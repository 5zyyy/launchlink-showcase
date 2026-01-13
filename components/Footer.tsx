"use client";

import Link from "next/link";
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "#", label: "Blog", comingSoon: true },
    { href: "#", label: "Careers", comingSoon: true },
    { href: "#", label: "Press Kit", comingSoon: true },
  ];

  const productLinks = [
    { href: "#features", label: "Features" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#token-benefits", label: "Token Benefits" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#waitlist", label: "Join Waitlist" },
  ];

  const resourcesLinks = [
    { href: "#", label: "Help Center", comingSoon: true },
    { href: "#", label: "Documentation", comingSoon: true },
    { href: "#", label: "Community", comingSoon: true },
    { href: "#", label: "Governance Portal", comingSoon: true },
  ];

  const legalLinks = [
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="relative bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Company Section */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-bold text-[#171717] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.comingSoon ? (
                    <span className="font-sans text-sm text-[#737373] flex items-center gap-1">
                      {link.label}
                      <span className="text-xs text-[#737373]/60">(Coming soon)</span>
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-[#737373] hover:text-[#0066FF] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Product Section */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-bold text-[#171717] mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans text-sm text-[#737373] hover:text-[#0066FF] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-bold text-[#171717] mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.label}>
                  {link.comingSoon ? (
                    <span className="font-sans text-sm text-[#737373] flex items-center gap-1">
                      {link.label}
                      <span className="text-xs text-[#737373]/60">(Coming soon)</span>
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-[#737373] hover:text-[#0066FF] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-bold text-[#171717] mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-[#737373] hover:text-[#0066FF] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Waitlist Section */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-bold text-[#171717] mb-4">
              Connect
            </h3>
            <div className="space-y-4">
              {/* Social Links */}
              <div className="flex flex-col space-y-3">
                <span className="font-sans text-sm text-[#737373] flex items-center gap-2">
                  <FaXTwitter className="w-4 h-4" />
                  <span>Twitter/X</span>
                </span>
                <span className="font-sans text-sm text-[#737373] flex items-center gap-2">
                  <FaTelegram className="w-4 h-4" />
                  <span>Telegram</span>
                </span>
                <span className="font-sans text-sm text-[#737373] flex items-center gap-2">
                  <FaDiscord className="w-4 h-4" />
                  <span>Discord</span>
                  <span className="text-xs text-[#737373]/60">(Coming soon)</span>
                </span>
              </div>

              {/* Waitlist Link */}
              <div className="pt-2">
                <Link
                  href="#waitlist"
                  onClick={(e) => handleNavClick(e, "#waitlist")}
                  className="font-sans text-sm text-[#0066FF] hover:text-[#0052CC] transition-colors duration-200 font-medium"
                >
                  Join Waitlist →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-[#E5E5E5]">
          <p className="font-sans text-sm text-[#737373] text-center">
            © {currentYear} LaunchLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

