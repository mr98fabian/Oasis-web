"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
    {
        name: "María García",
        role: "Empresaria",
        content:
            "Desde que descubrí Oasis, no puedo ir a otro lugar. El silencio, la limpieza y el trato son incomparables. Es mi hora sagrada de la semana.",
        rating: 5,
    },
    {
        name: "Laura Martínez",
        role: "Médica",
        content:
            "Como profesional de la salud, valoro enormemente la higiene. En Oasis me siento completamente segura y además salgo renovada. ¡Un verdadero santuario!",
        rating: 5,
    },
    {
        name: "Sofía Hernández",
        role: "Arquitecta",
        content:
            "El diseño del espacio, la atención al detalle, los productos... todo es premium sin ser pretencioso. Es exactamente lo que necesitaba.",
        rating: 5,
    },
];

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonios" className="py-24 bg-oasis-emerald-dark relative overflow-hidden">
            {/* Gold accent decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-oasis-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-oasis-gold/5 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                            Lo que dicen nuestras clientas
                        </h2>
                        <div className="w-16 h-0.5 bg-oasis-gold mt-6 mx-auto" />
                    </div>
                </FadeIn>

                {/* Testimonial Card */}
                <FadeIn delay={0.2}>
                    <div className="relative">
                        <Quote className="absolute -top-4 -left-2 w-12 h-12 text-oasis-gold/20" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                {/* Stars */}
                                <div className="flex items-center justify-center gap-1 mb-6">
                                    {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-oasis-gold fill-oasis-gold" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-white/90 text-lg sm:text-xl leading-relaxed font-light italic max-w-2xl mx-auto mb-8">
                                    &ldquo;{TESTIMONIALS[activeIndex].content}&rdquo;
                                </p>

                                {/* Author */}
                                <div>
                                    <p className="text-oasis-gold font-medium text-base">
                                        {TESTIMONIALS[activeIndex].name}
                                    </p>
                                    <p className="text-white/50 text-sm">
                                        {TESTIMONIALS[activeIndex].role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation dots */}
                        <div className="flex items-center justify-center gap-3 mt-10">
                            {TESTIMONIALS.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex
                                            ? "bg-oasis-gold w-8"
                                            : "bg-white/30 hover:bg-white/50"
                                        }`}
                                    aria-label={`Ver testimonio ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
