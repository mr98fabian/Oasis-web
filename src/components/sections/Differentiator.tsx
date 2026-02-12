import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, Volume2, Clock, Sparkles } from "lucide-react";

const PAIN_POINTS = [
    {
        icon: Volume2,
        pain: "Salones ruidosos",
        solution: "Un ambiente de silencio absoluto",
    },
    {
        icon: ShieldCheck,
        pain: "Falta de higiene",
        solution: "Esterilización clínica certificada",
    },
    {
        icon: Clock,
        pain: "Prisas y descuido",
        solution: "Tiempo exclusivo para ti",
    },
    {
        icon: Sparkles,
        pain: "Trato impersonal",
        solution: "Atención personalizada premium",
    },
];

export function Differentiator() {
    return (
        <section id="nosotros" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="No somos un salón más"
                    subtitle="¿Cansada de los salones ruidosos tipo fábrica? En Oasis, creamos una experiencia completamente diferente."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PAIN_POINTS.map((item, index) => (
                        <FadeIn key={item.pain} delay={index * 0.15}>
                            <div className="group text-center p-8 rounded-2xl bg-oasis-cream/50 hover:bg-oasis-cream transition-all duration-500 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-full bg-oasis-emerald/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-oasis-emerald/15 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-oasis-emerald" />
                                </div>

                                {/* Pain (crossed out) */}
                                <p className="text-oasis-dark/40 line-through text-sm mb-2">
                                    {item.pain}
                                </p>

                                {/* Solution */}
                                <p className="text-oasis-dark font-medium text-base leading-snug">
                                    {item.solution}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
