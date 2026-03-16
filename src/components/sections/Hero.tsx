"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Star } from "lucide-react";
import { ScrollMouse } from "@/components/ui/ScrollMouse";
import { HeroBotanicalScroll } from "@/components/ui/HeroBotanicalScroll";

export function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#EAF2EE]"
            style={{
                backgroundImage: "radial-gradient(circle at center, #F0F7F4 0%, #D8E6DE 100%)"
            }}
        >
            {/* NEW: Large High-End Botanical Scroll Animation */}
            <HeroBotanicalScroll />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                {/* Tagline chip */}
                <FadeIn delay={0.1}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-oasis-emerald/5 border border-oasis-emerald/10 mb-8">
                        <Star className="w-4 h-4 text-oasis-gold fill-oasis-gold" />
                        <span className="text-oasis-emerald/80 text-sm font-medium tracking-wide">
                            Estudio Boutique de Belleza
                        </span>
                    </div>
                </FadeIn>

                {/* H1: Main value proposition */}
                <FadeIn delay={0.3}>
                    <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-oasis-dark leading-[1.1] mb-6">
                        Tu refugio{" "}
                        <span className="text-oasis-gold italic">de belleza</span>
                    </h1>
                </FadeIn>

                {/* Subtitle */}
                <FadeIn delay={0.5}>
                    <p className="text-oasis-dark/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                        Descubre una experiencia de bienestar diseñada para tu descanso.
                        Un santuario de calma donde cada detalle está pensado para ti.
                    </p>
                </FadeIn>

                {/* CTA Button (neuro-design: one clear action) */}
                <FadeIn delay={0.7}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#reservar">
                            <Button
                                variant="primary"
                                size="lg"
                                className="bg-oasis-emerald text-white hover:bg-oasis-emerald-dark text-base px-10"
                            >
                                Reservar mi Momento
                            </Button>
                        </a>
                        <a href="#servicios">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-oasis-emerald/20 text-oasis-emerald hover:bg-oasis-emerald/5"
                            >
                                Explorar Servicios
                            </Button>
                        </a>
                    </div>
                </FadeIn>

                {/* Social proof (neuro-design: authority) */}
                <FadeIn delay={0.9}>
                    <div className="mt-16 flex items-center justify-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full bg-oasis-sand border-2 border-white flex items-center justify-center text-oasis-emerald text-xs font-semibold"
                                >
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <div className="text-left border-l border-oasis-sand pl-4 ml-2">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star
                                        key={i}
                                        className="w-3.5 h-3.5 text-oasis-gold fill-oasis-gold"
                                    />
                                ))}
                            </div>
                            <p className="text-oasis-dark/60 text-xs font-medium">
                                +200 clientas satisfechas
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* New Interactive Scroll Mouse Component */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <ScrollMouse />
            </div>
        </section>
    );
}
