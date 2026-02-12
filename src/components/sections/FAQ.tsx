"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
    {
        question: "¿Necesito hacer cita previa?",
        answer:
            "Sí, para garantizar tu tiempo exclusivo y la mejor experiencia, trabajamos únicamente con cita previa. Puedes reservar directamente desde nuestra web en menos de 1 minuto.",
    },
    {
        question: "¿Qué productos utilizan?",
        answer:
            "Trabajamos exclusivamente con marcas profesionales premium. Todos nuestros productos son libres de crueldad animal y seleccionados por su calidad superior.",
    },
    {
        question: "¿Cuál es su política de cancelación?",
        answer:
            "Puedes cancelar o reprogramar tu cita sin costo hasta 24 horas antes. Cancelaciones con menos de 24 horas de anticipación están sujetas a un cargo del 50%.",
    },
    {
        question: "¿Es seguro e higiénico?",
        answer:
            "La higiene es nuestro pilar fundamental. Todos nuestros instrumentos pasan por un proceso de esterilización de grado clínico. Utilizamos materiales desechables cuando es posible y mantenemos protocolos estrictos de limpieza.",
    },
    {
        question: "¿Ofrecen servicio a domicilio?",
        answer:
            "Actualmente, para garantizar la experiencia completa de nuestro santuario (iluminación, aromas, música), atendemos únicamente en nuestro estudio. ¡Te esperamos!",
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-oasis-sand/50 last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
            >
                <span className="text-oasis-dark font-medium text-base pr-8 group-hover:text-oasis-emerald transition-colors">
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-oasis-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-oasis-dark/60 text-sm leading-relaxed pb-6 pr-12">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQ() {
    return (
        <section className="py-24 bg-oasis-cream">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Preguntas Frecuentes"
                    subtitle="Todo lo que necesitas saber antes de tu primera visita."
                />

                <FadeIn>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                        {FAQS.map((faq) => (
                            <FAQItem key={faq.question} {...faq} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
