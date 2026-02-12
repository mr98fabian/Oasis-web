"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    fadeDirection: number;
}

/**
 * Floating golden particles canvas overlay.
 * Creates a subtle premium ambiance without distracting from content.
 * Uses requestAnimationFrame for 60fps rendering.
 *
 * Business intent: adds "magic" visual layer that subconsciously
 * communicates luxury and exclusivity in the booking section.
 */
export function GoldenParticles({ className = "" }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const PARTICLE_COUNT = 35;
        const GOLD_COLOR = { r: 212, g: 175, b: 55 }; // #D4AF37
        let particles: Particle[] = [];

        const resize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
        };

        const createParticle = (): Particle => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: -Math.random() * 0.4 - 0.1, // Drift upward gently
            opacity: Math.random() * 0.5 + 0.1,
            fadeDirection: Math.random() > 0.5 ? 0.003 : -0.003,
        });

        const init = () => {
            resize();
            particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                // Update position
                p.x += p.speedX;
                p.y += p.speedY;

                // Fade in/out
                p.opacity += p.fadeDirection;
                if (p.opacity <= 0.05 || p.opacity >= 0.6) {
                    p.fadeDirection *= -1;
                }

                // Wrap around
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;

                // Draw
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${GOLD_COLOR.r}, ${GOLD_COLOR.g}, ${GOLD_COLOR.b}, ${p.opacity})`;
                ctx.fill();

                // Subtle glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${GOLD_COLOR.r}, ${GOLD_COLOR.g}, ${GOLD_COLOR.b}, ${p.opacity * 0.15})`;
                ctx.fill();
            });

            rafRef.current = requestAnimationFrame(animate);
        };

        init();
        rafRef.current = requestAnimationFrame(animate);

        window.addEventListener("resize", resize);
        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none z-0 ${className}`}
            aria-hidden="true"
        />
    );
}
