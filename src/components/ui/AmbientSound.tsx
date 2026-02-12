"use client";

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Ambient nature sound toggle.
 * Plays a looping water/nature soundtrack for an immersive spa experience.
 * Audio fades in/out smoothly instead of abrupt play/pause.
 *
 * Position: fixed bottom-left, above WhatsApp button.
 *
 * Note: Uses a free ambient water sound. Place your MP3 at /sounds/ambient.mp3
 */
export function AmbientSound() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

    /**
     * Fades audio volume from current to target over duration.
     * Prevents jarring audio starts/stops.
     */
    const fadeVolume = useCallback(
        (audio: HTMLAudioElement, from: number, to: number, duration: number) => {
            if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

            const steps = 20;
            const stepTime = duration / steps;
            const stepValue = (to - from) / steps;
            let current = from;

            audio.volume = from;

            fadeIntervalRef.current = setInterval(() => {
                current += stepValue;
                if ((stepValue > 0 && current >= to) || (stepValue < 0 && current <= to)) {
                    audio.volume = Math.max(0, Math.min(1, to));
                    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
                    if (to === 0) audio.pause();
                    return;
                }
                audio.volume = Math.max(0, Math.min(1, current));
            }, stepTime);
        },
        []
    );

    const toggleSound = useCallback(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/sounds/ambient.wav");
            audioRef.current.loop = true;
            audioRef.current.volume = 0;
        }

        const audio = audioRef.current;

        if (isPlaying) {
            // Fade out over 500ms then pause
            fadeVolume(audio, audio.volume, 0, 500);
            setIsPlaying(false);
        } else {
            // Start muted and fade in over 1s
            audio.play().then(() => {
                fadeVolume(audio, 0, 0.3, 1000);
                setIsPlaying(true);
            }).catch(() => {
                // Autoplay blocked — need user gesture (already handled by click)
                console.warn("Audio playback blocked by browser");
            });
        }
    }, [isPlaying, fadeVolume]);

    return (
        <div className="fixed bottom-28 left-4 z-40 sm:bottom-6">
            <div className="relative">
                {/* Tooltip */}
                <AnimatePresence>
                    {showTooltip && (
                        <motion.div
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -8 }}
                            className="absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-oasis-dark text-white text-xs px-3 py-1.5 rounded-lg shadow-lg"
                        >
                            {isPlaying ? "Silenciar ambiente" : "Escuchar sonido ambiental"}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Button */}
                <button
                    onClick={toggleSound}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="w-12 h-12 rounded-full bg-oasis-emerald/90 hover:bg-oasis-emerald text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer backdrop-blur-sm"
                    aria-label={isPlaying ? "Silenciar sonido ambiental" : "Reproducir sonido ambiental"}
                >
                    <motion.div
                        key={isPlaying ? "playing" : "muted"}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isPlaying ? (
                            <Volume2 className="w-5 h-5" />
                        ) : (
                            <VolumeX className="w-5 h-5" />
                        )}
                    </motion.div>

                    {/* Pulsing ring when playing */}
                    {isPlaying && (
                        <span className="absolute inset-0 rounded-full border-2 border-oasis-emerald animate-ping opacity-30" />
                    )}
                </button>
            </div>
        </div>
    );
}
