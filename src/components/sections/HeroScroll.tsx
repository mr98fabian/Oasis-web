"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Star } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

// Total frames available in /public/frames/
const TOTAL_FRAMES = 68;
const MOBILE_STEP = 2; // Load every 2nd frame on mobile

/**
 * Generate frame paths based on device type.
 * Mobile loads half the frames for performance.
 */
function getFramePaths(isMobile: boolean): string[] {
    const step = isMobile ? MOBILE_STEP : 1;
    const paths: string[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i += step) {
        paths.push(`/frames/${String(i).padStart(4, "0")}.jpg`);
    }
    return paths;
}

/**
 * Draws an image on canvas with object-fit: cover behavior.
 * Centers and crops the image to fill the canvas without distortion.
 */
function drawCover(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    canvasW: number,
    canvasH: number
) {
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasW / canvasH;

    let drawW: number, drawH: number, offsetX: number, offsetY: number;

    if (imgRatio > canvasRatio) {
        // Image wider than canvas: crop horizontally
        drawH = canvasH;
        drawW = canvasH * imgRatio;
        offsetX = (canvasW - drawW) / 2;
        offsetY = 0;
    } else {
        // Image taller than canvas: crop vertically
        drawW = canvasW;
        drawH = canvasW / imgRatio;
        offsetX = 0;
        offsetY = (canvasH - drawH) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
}

/**
 * Preloads all frame images and reports progress.
 * Returns a promise that resolves with the loaded Image objects.
 */
export function preloadFrames(
    paths: string[],
    onProgress?: (loaded: number, total: number) => void
): Promise<HTMLImageElement[]> {
    return new Promise((resolve) => {
        const images: HTMLImageElement[] = new Array(paths.length);
        let loaded = 0;

        paths.forEach((src, i) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => {
                images[i] = img;
                loaded++;
                onProgress?.(loaded, paths.length);
                if (loaded === paths.length) resolve(images);
            };
        });
    });
}

interface HeroScrollProps {
    /** Called with (loaded, total) during frame preloading */
    onLoadProgress?: (loaded: number, total: number) => void;
    /** Called when all frames are loaded */
    onLoadComplete?: () => void;
}

export function HeroScroll({ onLoadProgress, onLoadComplete }: HeroScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const framesRef = useRef<HTMLImageElement[]>([]);
    const rafRef = useRef<number>(0);
    const currentFrameRef = useRef<number>(0);

    const [isReady, setIsReady] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile on mount
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // Preload frames
    useEffect(() => {
        const paths = getFramePaths(isMobile);

        preloadFrames(paths, (loaded, total) => {
            onLoadProgress?.(loaded, total);
        }).then((images) => {
            framesRef.current = images;
            setIsReady(true);
            onLoadComplete?.();
        });
    }, [isMobile, onLoadProgress, onLoadComplete]);

    // Resize canvas to match viewport
    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const ctx = canvas.getContext("2d");
        if (ctx) ctx.scale(dpr, dpr);
    }, []);

    // Draw current frame
    const drawFrame = useCallback(
        (frameIndex: number) => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            const frames = framesRef.current;

            if (!canvas || !ctx || !frames.length) return;

            const clampedIndex = Math.max(0, Math.min(frameIndex, frames.length - 1));
            const img = frames[clampedIndex];
            if (!img) return;

            const width = window.innerWidth;
            const height = window.innerHeight;

            ctx.clearRect(0, 0, width, height);
            drawCover(ctx, img, width, height);
        },
        []
    );

    // Scroll handler: sync frame to scroll position
    useEffect(() => {
        if (!isReady) return;

        resizeCanvas();
        drawFrame(0);

        const handleScroll = () => {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                const container = containerRef.current;
                if (!container) return;

                const rect = container.getBoundingClientRect();
                const scrollableHeight = container.offsetHeight - window.innerHeight;

                // scrollProgress: 0 (top) → 1 (bottom of container)
                const rawProgress = -rect.top / scrollableHeight;
                const scrollProgress = Math.max(0, Math.min(1, rawProgress));

                const totalFrames = framesRef.current.length;
                const frameIndex = Math.floor(scrollProgress * (totalFrames - 1));

                // Only redraw if frame changed
                if (frameIndex !== currentFrameRef.current) {
                    currentFrameRef.current = frameIndex;
                    drawFrame(frameIndex);
                }

                // Show text overlay at 70%+ scroll
                setShowContent(scrollProgress >= 0.65);
            });
        };

        const handleResize = () => {
            resizeCanvas();
            drawFrame(currentFrameRef.current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize, { passive: true });

        // Initial draw
        handleScroll();

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [isReady, resizeCanvas, drawFrame]);

    return (
        <section
            id="inicio"
            ref={containerRef}
            className="relative"
            style={{ height: "300vh" }}
        >
            {/* Sticky canvas viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    aria-hidden="true"
                />

                {/* Dark gradient overlay for text readability */}
                <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: showContent ? 1 : 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Hero content overlay — appears at ~70% scroll */}
                <AnimatePresence>
                    {showContent && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-0 flex items-center justify-center z-10"
                        >
                            <div className="max-w-4xl mx-auto px-4 text-center">
                                {/* Tagline chip */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                                    <Star className="w-4 h-4 text-oasis-gold fill-oasis-gold" />
                                    <span className="text-white/90 text-sm font-medium tracking-wide">
                                        Estudio Boutique de Belleza
                                    </span>
                                </div>

                                {/* H1 */}
                                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6">
                                    Tu refugio{" "}
                                    <span className="text-oasis-gold italic">de belleza</span>
                                </h1>

                                {/* Subtitle */}
                                <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                                    Descubre una experiencia de bienestar diseñada para tu
                                    descanso. Un santuario de calma donde cada detalle está
                                    pensado para ti.
                                </p>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a href="#reservar">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="border-oasis-gold text-oasis-gold hover:bg-oasis-gold hover:text-white text-base cursor-pointer"
                                        >
                                            Reservar mi Momento
                                        </Button>
                                    </a>
                                    <a href="#servicios">
                                        <Button
                                            variant="ghost"
                                            size="lg"
                                            className="text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
                                        >
                                            Explorar Servicios
                                        </Button>
                                    </a>
                                </div>
                                <p className="text-white/50 text-xs mt-4 tracking-wide">
                                    Sin cobro por adelantado · Cancelación flexible
                                </p>

                                {/* Social proof */}
                                <div className="mt-12 flex items-center justify-center gap-3">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded-full bg-oasis-gold/30 border-2 border-white/30 flex items-center justify-center text-white text-xs font-medium"
                                            >
                                                {String.fromCharCode(64 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star
                                                    key={i}
                                                    className="w-3.5 h-3.5 text-oasis-gold fill-oasis-gold"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-white/60 text-xs">
                                            +<CountUp end={200} duration={2500} className="text-white/60" /> clientas satisfechas
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scroll indicator — visible only at start */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                    animate={{ y: [0, 8, 0], opacity: showContent ? 0 : 1 }}
                    transition={{
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 0.5 },
                    }}
                >
                    <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
                        <div className="w-1.5 h-3 rounded-full bg-white/60" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
