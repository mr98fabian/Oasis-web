"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Floating WhatsApp button (oasis-client-flow).
 * Sticky bottom-right, always visible.
 * Pre-filled message for frictionless contact.
 */
export function WhatsAppButton() {
    // Replace with your real WhatsApp number (international format without +)
    const WHATSAPP_NUMBER = "14696239844";
    const MESSAGE = encodeURIComponent(
        "Hola Oasis, me gustaría saber más sobre sus servicios y agendar una cita. 🌿"
    );
    const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

    return (
        <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-shadow duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5, type: "spring" }}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-7 h-7 text-white" />
        </motion.a>
    );
}
