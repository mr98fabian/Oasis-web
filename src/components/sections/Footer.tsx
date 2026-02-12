"use client";

import { Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer id="contacto" className="bg-oasis-dark text-white/70">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-6">
                            <a href="/" className="block w-28 h-auto">
                                <img
                                    src="/images/logo.svg"
                                    alt="Oasis Beauty & Wellness"
                                    className="w-full h-auto object-contain"
                                />
                            </a>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Tu refugio de belleza. Un santuario de calma donde la belleza y
                            el descanso se encuentran.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-oasis-gold text-sm font-medium tracking-wider uppercase mb-4">
                            Navegación
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Inicio", href: "#inicio" },
                                { label: "Servicios", href: "#servicios" },
                                { label: "Nosotros", href: "#nosotros" },
                                { label: "Testimonios", href: "#testimonios" },
                                { label: "Reservar Cita", href: "#reservar" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-white/50 hover:text-oasis-gold transition-colors duration-300 text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-oasis-gold text-sm font-medium tracking-wider uppercase mb-4">
                            Contacto
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-oasis-gold shrink-0" />
                                <span>5025 Branderburg Ln, The Colony, TX 75056</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Phone className="w-4 h-4 text-oasis-gold shrink-0" />
                                <span>+1 (469) 514-4469</span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 mt-6">
                            <a
                                href="https://instagram.com/oasisspadallas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-oasis-gold/20 transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4 text-white/70" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">
                        © {new Date().getFullYear()} Oasis Beauty & Wellness. Todos los
                        derechos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-white/30 hover:text-white/50 text-xs transition-colors">
                            Aviso de Privacidad
                        </a>
                        <a href="#" className="text-white/30 hover:text-white/50 text-xs transition-colors">
                            Términos y Condiciones
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
