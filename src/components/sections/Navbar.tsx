"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-oasis-cream/80 backdrop-blur-md border-b border-oasis-sand/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        {/* Brand Logo - Expecting transparent PNG */}
                        <Link href="/" className="relative w-32 h-10">
                            {/* Fallback text if image missing (screen reader accessible) */}
                            <span className="sr-only">Oasis</span>
                            <img
                                src="/images/logo.png"
                                alt="Oasis Beauty & Wellness"
                                className="w-full h-full object-contain"
                            />
                        </Link>
                    </div>    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-oasis-dark/70 hover:text-oasis-emerald transition-colors duration-300 text-sm font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA (Z-pattern: top-right = action) */}
                    <div className="hidden md:block">
                        <a href="#reservar">
                            <Button variant="primary" size="default">
                                Reservar Cita
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-oasis-dark"
                        aria-label="Abrir menú"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-oasis-cream border-t border-oasis-sand/50"
                    >
                        <div className="px-4 py-6 flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-oasis-dark/80 hover:text-oasis-emerald font-medium py-2 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a href="#reservar" onClick={() => setIsOpen(false)}>
                                <Button variant="primary" className="w-full mt-2">
                                    Reservar Cita
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
