"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
    /** Target number to count up to */
    end: number;
    /** Animation duration in ms */
    duration?: number;
    /** Text before the number */
    prefix?: string;
    /** Text after the number */
    suffix?: string;
    /** CSS class for the container */
    className?: string;
}

/**
 * Animated number counter that triggers when entering viewport.
 * Uses Intersection Observer + requestAnimationFrame for 60fps.
 * Follows easeOutExpo for a satisfying deceleration curve.
 */
export function CountUp({
    end,
    duration = 2000,
    prefix = "",
    suffix = "",
    className = "",
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let rafId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // easeOutExpo curve: fast start, elegant deceleration
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(eased * end));

            if (progress < 1) {
                rafId = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, [hasStarted, end, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {count}
            {suffix}
        </span>
    );
}
