"use client";

import { motion, AnimatePresence } from "framer-motion";

interface OasisLoaderProps {
    /** Loading progress from 0 to 100 */
    progress: number;
    /** Whether loading is complete and loader should fade out */
    isComplete: boolean;
}

/**
 * Full-screen preloader for the Oasis spa experience.
 * Shows the brand logo with an elegant emerald progress bar
 * and gold shimmer effect. Blocks scroll until frames are loaded.
 *
 * Business intent: First impressions matter — the loader itself
 * should feel like part of the luxurious experience, not a delay.
 */
export function OasisLoader({ progress, isComplete }: OasisLoaderProps) {
    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-oasis-cream"
                    aria-label="Cargando experiencia Oasis"
                    role="progressbar"
                    aria-valuenow={Math.round(progress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-12"
                    >
                        <img
                            src="/images/logo.svg"
                            alt="Oasis Beauty & Wellness"
                            className="w-40 h-auto"
                        />
                    </motion.div>

                    {/* Progress bar container */}
                    <div className="w-64 sm:w-80 relative">
                        {/* Track */}
                        <div className="h-[3px] bg-oasis-sand rounded-full overflow-hidden">
                            {/* Fill */}
                            <motion.div
                                className="h-full rounded-full relative"
                                style={{
                                    width: `${progress}%`,
                                    background:
                                        "linear-gradient(90deg, #044D29, #066B3A, #044D29)",
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                {/* Gold shimmer */}
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.6) 50%, transparent 100%)",
                                        animation: "shimmer 1.5s infinite",
                                    }}
                                />
                            </motion.div>
                        </div>

                        {/* Percentage */}
                        <motion.p
                            className="text-center mt-4 text-oasis-emerald/60 text-sm font-light tracking-[0.3em] font-sans"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {Math.round(progress)}%
                        </motion.p>
                    </div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mt-8 text-oasis-emerald/40 text-xs tracking-[0.4em] uppercase font-sans"
                    >
                        Preparando tu experiencia
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
