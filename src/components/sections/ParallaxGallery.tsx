"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

/**
 * Gallery items configuration.
 * Replace placeholder images with real client photos.
 * Recommended: WebP format, 1200x800+ resolution, < 500KB.
 */
const GALLERY_ITEMS = [
    {
        src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
        alt: "Manicura spa premium en Oasis - manos perfectas",
        title: "Manicura Spa",
        subtitle: "Cada detalle importa. Colores que reflejan tu personalidad.",
        layout: "left" as const,
    },
    {
        src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
        alt: "Masaje relajante en ambiente de serenidad - bienestar total",
        title: "Momento de Calma",
        subtitle: "Desconecta del mundo. Aquí solo existes tú y tu bienestar.",
        layout: "right" as const,
    },
    {
        src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
        alt: "Diseño de cejas profesional en Oasis - mirada perfecta",
        title: "Diseño de Mirada",
        subtitle: "El marco perfecto para tus ojos. Diseño personalizado según tu rostro.",
        layout: "left" as const,
    },
];

export function ParallaxGallery() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Momentos en Oasis"
                    subtitle="Cada visita es una experiencia única. Así viven nuestras clientas su momento de paz."
                />

                <div className="space-y-20 md:space-y-28">
                    {GALLERY_ITEMS.map((item, index) => (
                        <FadeIn key={item.title} delay={0.1}>
                            <div
                                className={`flex flex-col gap-8 md:gap-12 items-center ${item.layout === "right"
                                    ? "md:flex-row-reverse"
                                    : "md:flex-row"
                                    }`}
                            >
                                {/* Parallax Image */}
                                <div className="w-full md:w-3/5">
                                    <ParallaxImage
                                        src={item.src}
                                        alt={item.alt}
                                        speed={0.25}
                                        scale={true}
                                        height="450px"
                                        overlay={true}
                                        overlayOpacity={8}
                                        className="shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
                                    />
                                </div>

                                {/* Text content */}
                                <div className="w-full md:w-2/5 flex flex-col justify-center">
                                    {/* Gold accent number */}
                                    <span className="text-oasis-gold/40 font-serif text-6xl md:text-7xl font-bold leading-none mb-4">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="font-serif text-2xl md:text-3xl text-oasis-dark mb-4 leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-oasis-dark/60 text-base leading-relaxed font-light">
                                        {item.subtitle}
                                    </p>

                                    {/* Decorative gold line */}
                                    <div className="w-12 h-0.5 bg-oasis-gold mt-6" />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
