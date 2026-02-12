/**
 * SVG wave divider between sections.
 * Creates fluid organic transitions that match the Oasis spa aesthetic.
 *
 * Props:
 * - from: top section color
 * - to: bottom section color
 * - variant: wave | curve | diagonal
 */

const COLOR_MAP: Record<string, string> = {
    cream: "#F9F9F5",
    emerald: "#044D29",
    "emerald-light": "#066B3A",
    dark: "#1A1A1A",
    gold: "#D4AF37",
    sand: "#E6DCCA",
    white: "#FFFFFF",
};

interface SectionDividerProps {
    from?: string;
    to?: string;
    variant?: "wave" | "curve" | "diagonal";
    flip?: boolean;
    className?: string;
}

export function SectionDivider({
    from = "cream",
    to = "emerald",
    variant = "wave",
    flip = false,
    className = "",
}: SectionDividerProps) {
    const fromColor = COLOR_MAP[from] || from;
    const toColor = COLOR_MAP[to] || to;

    const paths: Record<string, string> = {
        wave: "M0,64 C320,120 640,0 960,64 C1280,128 1600,0 1920,64 L1920,160 L0,160 Z",
        curve: "M0,96 Q960,0 1920,96 L1920,160 L0,160 Z",
        diagonal: "M0,0 L1920,120 L1920,160 L0,160 Z",
    };

    return (
        <div
            className={`relative w-full overflow-hidden leading-[0] ${className}`}
            style={{
                backgroundColor: toColor,
                transform: flip ? "scaleY(-1)" : undefined,
            }}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 1920 160"
                preserveAspectRatio="none"
                className="w-full h-16 sm:h-20 md:h-28 block"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={paths[variant]} fill={fromColor} />
            </svg>
        </div>
    );
}
