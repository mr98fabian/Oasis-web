import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

/**
 * Elegant section heading with serif title, gold accent line, and sans subtitle.
 * Follows oasis-brand-guardian: Playfair Display for headings.
 */
export function SectionHeading({
    title,
    subtitle,
    centered = true,
    className,
}: SectionHeadingProps) {
    return (
        <FadeIn className={cn("mb-16", centered && "text-center", className)}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-oasis-dark leading-tight">
                {title}
            </h2>
            {/* Gold accent line */}
            <div
                className={cn(
                    "w-16 h-0.5 bg-oasis-gold mt-6 mb-4",
                    centered && "mx-auto"
                )}
            />
            {subtitle && (
                <p className="text-oasis-dark/60 text-lg max-w-2xl leading-relaxed font-light mx-auto">
                    {subtitle}
                </p>
            )}
        </FadeIn>
    );
}
