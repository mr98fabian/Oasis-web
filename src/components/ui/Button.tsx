import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "default" | "lg";
    children: React.ReactNode;
}

/**
 * Oasis Brand Button.
 * Primary = Emerald bg. Outline = Gold border. Ghost = transparent.
 * Follows oasis-ui-magic: rounded-full, duration-300 transitions.
 */
export function Button({
    className,
    variant = "primary",
    size = "default",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium transition-all duration-300 cursor-pointer",
                // Size
                size === "default" && "px-6 py-3 text-sm",
                size === "lg" && "px-8 py-4 text-base",
                // Variants
                variant === "primary" &&
                "bg-oasis-emerald text-white hover:bg-oasis-emerald-light shadow-[0_4px_20px_rgba(4,77,41,0.25)] hover:shadow-[0_6px_28px_rgba(4,77,41,0.35)]",
                variant === "outline" &&
                "border-2 border-oasis-gold text-oasis-gold hover:bg-oasis-gold hover:text-white",
                variant === "ghost" &&
                "text-oasis-emerald hover:bg-oasis-emerald/5",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
