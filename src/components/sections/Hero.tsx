"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background with emerald gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-oasis-emerald-dark/90 via-oasis-emerald/85 to-oasis-emerald-light/80" />

            {/* Subtle botanical pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212,175,55,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(212,175,55,0.2) 0%, transparent 50%)`,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                {/* Tagline chip */}
                <FadeIn delay={0.1}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                        <Star className="w-4 h-4 text-oasis-gold fill-oasis-gold" />
                        <span className="text-white/90 text-sm font-medium tracking-wide">
                            Estudio Boutique de Belleza
                        </span>
                    </div>
                </FadeIn>

                {/* H1: Main value proposition */}
                <FadeIn delay={0.3}>
                    <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6">
                        Tu refugio{" "}
                        <span className="text-oasis-gold italic">de belleza</span>
                    </h1>
                </FadeIn>

                {/* Subtitle */}
                <FadeIn delay={0.5}>
                    <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                        Descubre una experiencia de bienestar diseñada para tu descanso.
                        Un santuario de calma donde cada detalle está pensado para ti.
                    </p>
                </FadeIn>

                {/* CTA Button (neuro-design: one clear action) */}
                <FadeIn delay={0.7}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#reservar">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-oasis-gold text-oasis-gold hover:bg-oasis-gold hover:text-white text-base"
                            >
                                Reservar mi Momento
                            </Button>
                        </a>
                        <a href="#servicios">
                            <Button
                                variant="ghost"
                                size="lg"
                                className="text-white/80 hover:text-white hover:bg-white/10"
                            >
                                Explorar Servicios
                            </Button>
                        </a>
                    </div>
                    {/* Micro-copy: reduces anxiety (neuro-design) */}
                    <p className="text-white/50 text-xs mt-4 tracking-wide">
                        Sin cobro por adelantado · Cancelación flexible
                    </p>
                </FadeIn>

                {/* Social proof (neuro-design: authority) */}
                <FadeIn delay={0.9}>
                    <div className="mt-16 flex items-center justify-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full bg-oasis-gold/30 border-2 border-white/30 flex items-center justify-center text-white text-xs font-medium"
                                >
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star
                                        key={i}
                                        className="w-3.5 h-3.5 text-oasis-gold fill-oasis-gold"
                                    />
                                ))}
                            </div>
                            <p className="text-white/60 text-xs">
                                +200 clientas satisfechas
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
                    <div className="w-1.5 h-3 rounded-full bg-white/50" />
                </div>
            </motion.div>
        </section>
    );
}
