"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
    /** Image source path */
    src: string;
    /** Alt text for SEO and accessibility */
    alt: string;
    /** Parallax speed: 0.1 = subtle, 0.5 = dramatic. Default: 0.3 */
    speed?: number;
    /** Apply subtle zoom effect on scroll. Default: false */
    scale?: boolean;
    /** Direction of image movement. Default: "up" */
    direction?: "up" | "down";
    /** Container height. Default: "400px" */
    height?: string;
    /** Show emerald overlay. Default: true */
    overlay?: boolean;
    /** Overlay opacity (0-100). Default: 10 */
    overlayOpacity?: number;
    /** Additional container classes */
    className?: string;
    /** Content to render on top of the image */
    children?: React.ReactNode;
}

/**
 * ParallaxImage — Premium scroll-driven image movement.
 *
 * Uses Framer Motion's useScroll + useTransform for GPU-accelerated,
 * smooth parallax. The image is 120% height to allow overflow movement.
 *
 * Performance: uses will-change:transform, object-fit:cover, and
 * hardware-accelerated CSS transforms only.
 */
export function ParallaxImage({
    src,
    alt,
    speed = 0.3,
    scale = false,
    direction = "up",
    height = "400px",
    overlay = true,
    overlayOpacity = 10,
    className,
    children,
}: ParallaxImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress: 0 when element enters viewport, 1 when it leaves
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Calculate parallax movement (in pixels)
    const parallaxRange = 100 * speed;
    const yRange = direction === "up"
        ? [parallaxRange, -parallaxRange]
        : [-parallaxRange, parallaxRange];

    const y = useTransform(scrollYProgress, [0, 1], yRange);

    // Optional scale effect: grows subtly (1.0 → 1.08)
    const imageScale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        scale ? [1.0, 1.08, 1.0] : [1, 1, 1]
    );

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative overflow-hidden rounded-2xl",
                className
            )}
            style={{ height }}
        >
            {/* Parallax Image */}
            <motion.img
                src={src}
                alt={alt}
                style={{
                    y,
                    scale: imageScale,
                    willChange: "transform",
                }}
                className="absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
                loading="lazy"
            />

            {/* Emerald overlay */}
            {overlay && (
                <div
                    className="absolute inset-0 bg-oasis-emerald-dark"
                    style={{ opacity: overlayOpacity / 100 }}
                />
            )}

            {/* Optional content on top */}
            {children && (
                <div className="relative z-10 h-full flex items-end p-6 sm:p-8">
                    {children}
                </div>
            )}
        </div>
    );
}
