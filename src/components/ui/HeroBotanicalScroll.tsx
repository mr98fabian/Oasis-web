"use client";

import { motion, useScroll, useTransform } from "framer-motion";

// Valores estáticos deterministas para evitar errores de pureza (Math.random)
const PARTICLE_DATA = [
    { w: 4, h: 4, l: 12, t: 15, d: 10, dy: 5, x: 10, y: -40 },
    { w: 3, h: 3, l: 85, t: 22, d: 14, dy: 2, x: -15, y: -50 },
    { w: 5, h: 5, l: 45, t: 70, d: 12, dy: 8, x: 20, y: -30 },
    { w: 2, h: 2, l: 25, t: 85, d: 18, dy: 4, x: -10, y: -60 },
    { w: 6, h: 6, l: 70, t: 45, d: 15, dy: 1, x: 5, y: -45 },
    { w: 3, h: 3, l: 10, t: 60, d: 11, dy: 7, x: 15, y: -55 },
    { w: 4, h: 4, l: 90, t: 80, d: 13, dy: 3, x: -12, y: -42 },
    { w: 5, h: 5, l: 33, t: 12, d: 16, dy: 9, x: 18, y: -38 },
    { w: 2, h: 2, l: 66, t: 33, d: 19, dy: 0, x: -8, y: -62 },
    { w: 4, h: 4, l: 50, t: 50, d: 17, dy: 6, x: 12, y: -48 },
    { w: 3, h: 3, l: 20, t: 40, d: 15, dy: 2, x: -25, y: -35 },
    { w: 5, h: 5, l: 75, t: 65, d: 13, dy: 4, x: 30, y: -25 },
    { w: 2, h: 2, l: 15, t: 10, d: 18, dy: 1, x: -5, y: -70 },
    { w: 6, h: 6, l: 88, t: 5, d: 14, dy: 8, x: 22, y: -44 },
    { w: 4, h: 4, l: 5, t: 90, d: 11, dy: 5, x: -18, y: -58 },
    // Adicionales para "Ponle más"
    { w: 3, h: 3, l: 55, t: 15, d: 12, dy: 3, x: 10, y: -30 },
    { w: 4, h: 4, l: 22, t: 30, d: 16, dy: 6, x: -15, y: -40 },
    { w: 2, h: 2, l: 78, t: 55, d: 14, dy: 1, x: 5, y: -50 },
    { w: 5, h: 5, l: 40, t: 85, d: 20, dy: 4, x: 12, y: -20 },
    { w: 3, h: 3, l: 95, t: 40, d: 15, dy: 7, x: -10, y: -35 },
];

export function HeroBotanicalScroll() {
    const { scrollYProgress } = useScroll();

    // Transformaciones para elementos decorativos
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 70]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -70]);
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -230]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const opacityLut = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.7, 0.4, 0.1]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden text-oasis-emerald">
            {/* 1. Top Right Botanical SVG - Larger and more complex */}
            <motion.div
                style={{ rotate: rotate1, y: y1, scale, opacity: opacityLut }}
                className="absolute -top-32 -right-32 w-[650px] h-[650px] sm:w-[900px] sm:h-[900px]"
            >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-90">
                    <path d="M100 0C80 20 60 50 70 80C75 100 90 95 100 90" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
                    <path d="M100 5C85 20 70 45 75 70" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.6" />
                    <path d="M90 0C70 15 50 35 55 55" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.3" />
                    <path d="M100 30C80 45 65 65 75 95" stroke="currentColor" strokeWidth="0.1" strokeOpacity="0.4" />
                    <circle cx="70" cy="80" r="2.5" fill="#D4AF37" fillOpacity="0.7" />
                    <circle cx="55" cy="55" r="1.8" fill="currentColor" fillOpacity="0.4" />
                    <circle cx="85" cy="45" r="1.2" fill="#D4AF37" fillOpacity="0.5" />
                    <circle cx="95" cy="15" r="1.5" fill="currentColor" fillOpacity="0.2" />
                </svg>
            </motion.div>

            {/* 2. Bottom Left Botanical SVG */}
            <motion.div
                style={{ rotate: rotate2, y: y2, scale, opacity: opacityLut }}
                className="absolute -bottom-60 -left-32 w-[650px] h-[650px] sm:w-[1000px] sm:h-[1000px]"
            >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-90">
                    <path d="M0 100C20 80 40 50 30 20C25 0 10 5 0 10" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
                    <path d="M5 100C25 75 45 55 35 30" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.6" />
                    <path d="M20 100C40 85 55 65 50 40" stroke="currentColor" strokeWidth="0.1" strokeOpacity="0.4" />
                    <circle cx="30" cy="20" r="3" fill="#D4AF37" fillOpacity="0.7" />
                    <circle cx="15" cy="55" r="2" fill="currentColor" fillOpacity="0.4" />
                    <circle cx="45" cy="35" r="1.5" fill="#D4AF37" fillOpacity="0.5" />
                    <circle cx="5" cy="85" r="1.8" fill="currentColor" fillOpacity="0.2" />
                </svg>
            </motion.div>

            {/* 3. Floating Particles (Nature dots) */}
            {PARTICLE_DATA.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full shadow-lg"
                    style={{
                        width: p.w + "px",
                        height: p.h + "px",
                        backgroundColor: i % 2 === 0 ? "#D4AF37" : "#044D29",
                        left: p.l + "%",
                        top: p.t + "%",
                        opacity: 0.4,
                    }}
                    animate={{
                        y: [0, p.y, 0],
                        x: [0, p.x, 0],
                        opacity: [0.15, 0.5, 0.15],
                        scale: [1, 1.8, 1],
                    }}
                    transition={{
                        duration: p.d,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.dy,
                    }}
                />
            ))}

            {/* 4. Dynamic waving background lines - More pronounced */}
            <div className="absolute inset-0 opacity-40">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M0 25 Q 25 10 50 25 T 100 25"
                        stroke="currentColor" strokeWidth="0.12" fill="none"
                        animate={{ d: ["M0 25 Q 25 10 50 25 T 100 25", "M0 25 Q 25 40 50 25 T 100 25", "M0 25 Q 25 10 50 25 T 100 25"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M0 75 Q 25 60 50 75 T 100 75"
                        stroke="#D4AF37" strokeWidth="0.12" fill="none"
                        animate={{ d: ["M0 75 Q 25 60 50 75 T 100 75", "M0 75 Q 25 90 50 75 T 100 75", "M0 75 Q 25 60 50 75 T 100 75"] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>
            </div>
        </div>
    );
}
