"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

/**
 * Theme provider that manages light/dark mode.
 *
 * Behavior:
 * 1. Reads from localStorage on mount (persists user preference)
 * 2. Falls back to system preference (prefers-color-scheme)
 * 3. Toggles `html.dark` class for CSS variable switching
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Read persisted preference or fall back to system
        const stored = localStorage.getItem("oasis-theme") as Theme | null;
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = stored || (systemDark ? "dark" : "light");

        setTheme(initial);
        document.documentElement.classList.toggle("dark", initial === "dark");
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        localStorage.setItem("oasis-theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    };

    // Prevent flash of wrong theme
    if (!mounted) return null;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
