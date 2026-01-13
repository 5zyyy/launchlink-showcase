"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#token-benefits", label: "Token Benefits" },
    { href: "#roadmap", label: "Roadmap" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Get navbar height (h-20 = 80px)
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    
    // Close mobile menu if open
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || isOpen
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0 z-50"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/logo-with-text.png"
                alt="LaunchLink Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-gray-700 hover:text-[#0066FF] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="#waitlist"
                onClick={(e) => handleNavClick(e, '#waitlist')}
                className="px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200 shadow-[0_4px_14px_rgba(0,102,255,0.3)]"
              >
                Join Waitlist
              </Link>
            </div>

            {/* Hamburger Menu Button - Mobile/Tablet */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 rounded-lg z-50"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                  isOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-gray-700 transition-all duration-300",
                  isOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop - Outside nav to avoid stacking context issues */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-20 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu - Outside nav to avoid stacking context issues */}
      <div
        className={cn(
          "lg:hidden fixed left-0 right-0 bottom-0 top-20 bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto z-50",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-gray-700 hover:text-[#0066FF] transition-colors duration-200 py-2 border-b border-gray-100"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            onClick={(e) => handleNavClick(e, '#waitlist')}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] text-white font-semibold rounded-xl text-center hover:scale-105 transition-transform duration-200 shadow-[0_4px_14px_rgba(0,102,255,0.3)]"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </>
  );
}

