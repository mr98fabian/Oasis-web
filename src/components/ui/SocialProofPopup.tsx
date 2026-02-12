"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

/**
 * "X personas viendo esta página" social proof notification.
 *
 * Neuro-design: creates subtle urgency via the scarcity principle.
 * Shows a non-intrusive popup that appears after a delay, stays for a few
 * seconds, then hides. Cycles every 30-45 seconds with randomized viewer counts.
 *
 * Position: bottom-right, above the WhatsApp button on mobile.
 */
export function SocialProofPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [viewerCount, setViewerCount] = useState(3);

    const generateCount = useCallback(() => {
        // Realistic range: 2-7 viewers
        return Math.floor(Math.random() * 6) + 2;
    }, []);

    useEffect(() => {
        // First show after 8 seconds
        const initialDelay = setTimeout(() => {
            setViewerCount(generateCount());
            setIsVisible(true);
        }, 8000);

        // Hide after 6 seconds, then cycle
        const cycle = setInterval(() => {
            setIsVisible((prev) => {
                if (prev) {
                    // Currently visible → hide
                    return false;
                } else {
                    // Currently hidden → show with new count
                    setViewerCount(generateCount());
                    return true;
                }
            });
        }, 6000 + Math.random() * 4000); // 6-10 second intervals

        return () => {
            clearTimeout(initialDelay);
            clearInterval(cycle);
        };
    }, [generateCount]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 10, x: 10 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-28 right-4 sm:bottom-6 sm:right-6 z-40 max-w-xs"
                >
                    <div className="flex items-center gap-3 bg-white dark:bg-[#122A1B] rounded-xl px-4 py-3 shadow-lg border border-oasis-sand/40 dark:border-oasis-emerald/20">
                        {/* Pulsing eye icon */}
                        <div className="relative flex-shrink-0">
                            <Eye className="w-5 h-5 text-oasis-emerald" />
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                        </div>

                        <div>
                            <p className="text-oasis-dark dark:text-[#F0EBE1] text-sm font-medium">
                                <span className="text-oasis-emerald font-bold">
                                    {viewerCount} personas
                                </span>{" "}
                                viendo esta página
                            </p>
                            <p className="text-oasis-dark/40 dark:text-[#F0EBE1]/40 text-xs">
                                ahora mismo
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
