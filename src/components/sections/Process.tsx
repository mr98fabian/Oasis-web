import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CalendarCheck, Flower2, Sunrise } from "lucide-react";

const STEPS = [
    {
        icon: CalendarCheck,
        number: "01",
        title: "Reserva",
        description: "Elige tu servicio y el horario perfecto para ti. Sin llamadas, sin esperas.",
    },
    {
        icon: Flower2,
        number: "02",
        title: "Ritual",
        description: "Relájate mientras nuestras especialistas cuidan cada detalle en un ambiente de serenidad.",
    },
    {
        icon: Sunrise,
        number: "03",
        title: "Renace",
        description: "Sal renovada, radiante y con la tranquilidad de haber invertido en ti misma.",
    },
];

export function Process() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Tu Experiencia en 3 Pasos"
                    subtitle="Simplificamos todo para que solo te preocupes por disfrutar."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
                    {/* Connector line (desktop only) */}
                    <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-oasis-gold/30" />

                    {STEPS.map((step, index) => (
                        <FadeIn key={step.number} delay={index * 0.2}>
                            <div className="text-center relative">
                                {/* Number circle */}
                                <div className="w-16 h-16 rounded-full bg-oasis-emerald flex items-center justify-center mx-auto mb-6 relative z-10 shadow-[0_4px_20px_rgba(4,77,41,0.25)]">
                                    <step.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Step number */}
                                <span className="text-oasis-gold font-serif text-sm tracking-widest mb-2 block">
                                    PASO {step.number}
                                </span>

                                {/* Title */}
                                <h3 className="font-serif text-2xl text-oasis-dark mb-3">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-oasis-dark/60 text-sm leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
