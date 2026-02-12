"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Sparkles, Hand, Eye, Heart } from "lucide-react";

const SERVICES = [
    {
        icon: Hand,
        title: "Manicura & Pedicura Spa",
        description:
            "Más que color, un tratamiento completo. Sumérgete en un ritual de cuidado para tus manos y pies con productos premium.",
        price: "Desde $40",
        duration: "60 min",
        tag: "Más Popular",
    },
    {
        icon: Heart,
        title: "Masajes Relajantes",
        description:
            "Desconecta cuerpo y mente. Técnicas profesionales que liberan la tensión acumulada en un ambiente de absoluta serenidad.",
        price: "Desde $65",
        duration: "45 min",
        tag: null,
    },
    {
        icon: Eye,
        title: "Diseño de Mirada",
        description:
            "Cejas perfectas que enmarcan tu belleza natural. Diseño personalizado según la armonía de tu rostro.",
        price: "Desde $40",
        duration: "30 min",
        tag: null,
    },
    {
        icon: Sparkles,
        title: "Tratamiento Integral",
        description:
            "La experiencia Oasis completa. Combina tus servicios favoritos en una sesión diseñada exclusivamente para ti.",
        price: "Desde $200",
        duration: "120 min",
        tag: "Experiencia Completa",
    },
];

export function Services() {
    return (
        <section id="servicios" className="py-24 bg-oasis-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Nuestros Rituales"
                    subtitle="Cada servicio es una experiencia de bienestar, no solo un tratamiento."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {SERVICES.map((service, index) => (
                        <FadeIn key={service.title} delay={index * 0.12}>
                            <div className="group relative bg-white dark:bg-[#122A1B] rounded-2xl p-8 hover:shadow-[0_20px_60px_rgba(4,77,41,0.12)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out border border-oasis-sand/30 dark:border-oasis-emerald/10 overflow-hidden cursor-pointer">
                                {/* Tag badge */}
                                {service.tag && (
                                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-oasis-gold/10 text-oasis-gold text-xs font-medium">
                                        {service.tag}
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-oasis-emerald/10 flex items-center justify-center mb-6 group-hover:bg-oasis-emerald group-hover:text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 ease-out">
                                    <service.icon className="w-5 h-5 text-oasis-emerald group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <h3 className="font-serif text-xl text-oasis-dark mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-oasis-dark/60 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Price & Duration */}
                                <div className="flex items-center justify-between pt-6 border-t border-oasis-sand/30">
                                    <div>
                                        <p className="text-oasis-emerald font-semibold text-lg">
                                            {service.price}
                                        </p>
                                        <p className="text-oasis-dark/40 text-xs">{service.duration}</p>
                                    </div>
                                    <a href="#reservar">
                                        <Button variant="ghost" className="text-sm">
                                            Reservar →
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
