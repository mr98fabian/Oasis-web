"use client";

import { Button } from "@/components/ui/Button";
import { CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Sticky bottom CTA bar for mobile devices (oasis-client-flow).
 * Always visible, ensures booking is < 1 tap away.
 */
export function StickyMobileCTA() {
    return (
        <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur-md border-t border-oasis-sand/50 px-4 py-3"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
        >
            <a href="#reservar" className="block">
                <Button variant="primary" className="w-full gap-2">
                    <CalendarCheck className="w-4 h-4" />
                    Reservar mi Cita
                </Button>
            </a>
        </motion.div>
    );
}
