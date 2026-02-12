"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CalendarCheck, Clock, Sparkles } from "lucide-react";

/**
 * Booking CTA Section with Calendly Integration.
 * Uses a compelling CTA instead of inline widget for V1.
 * The Calendly link will open in a new tab until we get the real URL.
 */
export function BookingCTA() {
    // Replace with your real Calendly URL
    const CALENDLY_URL = "https://calendly.com";

    return (
        <section id="reservar" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-oasis-emerald/3 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center">
                        {/* Mini features */}
                        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
                            {[
                                { icon: CalendarCheck, text: "Agenda en 1 minuto" },
                                { icon: Clock, text: "Sin esperas" },
                                { icon: Sparkles, text: "Experiencia premium" },
                            ].map((item) => (
                                <div
                                    key={item.text}
                                    className="flex items-center gap-2 text-oasis-dark/50 text-sm"
                                >
                                    <item.icon className="w-4 h-4 text-oasis-gold" />
                                    {item.text}
                                </div>
                            ))}
                        </div>

                        {/* Heading */}
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-oasis-dark leading-tight mb-4">
                            ¿Lista para tu momento{" "}
                            <span className="text-oasis-emerald italic">de calma</span>?
                        </h2>

                        <p className="text-oasis-dark/60 text-lg max-w-xl mx-auto leading-relaxed mb-10 font-light">
                            Reserva tu cita y deja que nosotras nos encarguemos del resto.
                            Tu bienestar es nuestra prioridad.
                        </p>

                        {/* CTA Button */}
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="primary" size="lg" className="text-base px-10">
                                Reservar mi Cita Ahora
                            </Button>
                        </a>

                        {/* Micro-copy (neuro-design: anxiety reducer) */}
                        <p className="text-oasis-dark/40 text-xs mt-4">
                            Sin cobro por adelantado · Cancelación flexible hasta 24h antes
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
