"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScamWarningModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the modal
    const hasSeenWarning = sessionStorage.getItem("scam-warning-dismissed");
    if (!hasSeenWarning) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("scam-warning-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#EF4444] to-[#DC2626] p-6 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-white">
                        Important Warning
                      </h2>
                      <p className="font-sans text-sm text-white/90">
                        Token Not Launched
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-white/80 hover:text-white transition-colors duration-200 p-1"
                    aria-label="Close warning"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" />
                    <div>
                      <p className="font-sans text-base font-semibold text-[#171717] mb-1">
                        $LLINK Token Has Not Been Launched
                      </p>
                      <p className="font-sans text-sm text-[#737373]">
                        The LaunchLink token ($LLINK) has not been launched yet.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#0066FF] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-sans text-base font-semibold text-[#171717] mb-1">
                        Beware of Scams & Impersonation
                      </p>
                      <ul className="font-sans text-sm text-[#737373] space-y-2 list-disc list-inside">
                        <li>Do not purchase any tokens claiming to be $LLINK</li>
                        <li>Do not connect your wallet to suspicious links</li>
                        <li>Only trust official LaunchLink channels</li>
                        <li>Report suspicious activity to our team</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-lg p-4">
                    <p className="font-sans text-sm text-[#991B1B] font-medium">
                      ⚠️ Official announcements will be made through our verified 
                      social media channels only when the token launches.
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-[#FAFAFA] border-t border-[#E5E5E5] p-4 flex justify-end">
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200 shadow-[0_4px_14px_rgba(0,102,255,0.3)]"
                  >
                    I Understand
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

