"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

/**
 * Animated Sun/Moon toggle for switching between light and dark modes.
 * Features a smooth rotation + scale transition.
 */
export function DarkModeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full hover:bg-oasis-sand/50 dark:hover:bg-white/10 transition-colors duration-300 cursor-pointer"
            aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
            title={isDark ? "Modo claro" : "Modo oscuro"}
        >
            <motion.div
                key={theme}
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 90, scale: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {isDark ? (
                    <Sun className="w-5 h-5 text-oasis-gold" />
                ) : (
                    <Moon className="w-5 h-5 text-oasis-emerald" />
                )}
            </motion.div>
        </button>
    );
}
