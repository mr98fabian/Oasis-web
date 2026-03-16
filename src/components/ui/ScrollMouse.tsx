"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollMouse() {
    const { scrollYProgress } = useScroll();

    // Transformaciones basadas en el scroll
    const mouseOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const dotY = useTransform(scrollYProgress, [0, 0.5], [0, 15]);
    const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [0.6, 0.1]);

    return (
        <motion.div
            style={{ opacity: mouseOpacity }}
            className="flex flex-col items-center gap-3"
        >
            <div className="relative w-8 h-12 rounded-full border-2 border-oasis-emerald/40 p-1.5 flex justify-center shadow-sm">
                {/* Scroll Dot */}
                <motion.div
                    style={{ y: dotY }}
                    animate={{
                        y: [0, 8, 0],
                        opacity: [1, 0.6, 1]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-2 h-2 rounded-full bg-oasis-emerald"
                />
            </div>

            {/* Scroll Text */}
            <motion.span
                style={{ opacity: lineOpacity }}
                className="text-[10px] uppercase tracking-[0.3em] font-medium text-oasis-emerald"
            >
                Scroll
            </motion.span>
        </motion.div>
    );
}
