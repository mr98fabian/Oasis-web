"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom golden ring cursor for desktop devices.
 * Follows the mouse with lerp smoothing for a luxurious feel.
 * Grows on hover over interactive elements (buttons, links).
 * Hidden on touch devices.
 */
export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const posRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    useEffect(() => {
        // Detect touch devices — hide cursor on mobile/tablet
        const isTouch =
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            window.matchMedia("(pointer: coarse)").matches;

        setIsTouchDevice(isTouch);
        if (isTouch) return;

        // Add cursor-hidden class to body (hides default cursor)
        document.body.classList.add("cursor-hidden");

        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.closest("a, button, [role='button'], .cursor-grow, input, select, textarea") !== null;
            setIsHovering(isInteractive);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        // Lerp animation loop for smooth following
        const animate = () => {
            const lerp = 0.15;
            posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp;
            posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;
            }
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${targetRef.current.x}px, ${targetRef.current.y}px) translate(-50%, -50%)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            document.body.classList.remove("cursor-hidden");
        };
    }, [isVisible]);

    // Don't render on touch devices
    if (isTouchDevice) return null;

    return (
        <>
            {/* Outer ring */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    width: isHovering ? 48 : 24,
                    height: isHovering ? 48 : 24,
                    borderRadius: "50%",
                    border: `2px solid rgba(212, 175, 55, ${isHovering ? 0.9 : 0.6})`,
                    backgroundColor: isHovering ? "rgba(212, 175, 55, 0.15)" : "transparent",
                    transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border 0.3s ease",
                    opacity: isVisible ? 1 : 0,
                }}
            />
            {/* Center dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    backgroundColor: "#D4AF37",
                    opacity: isVisible && !isHovering ? 1 : 0,
                    transition: "opacity 0.2s ease",
                }}
            />
        </>
    );
}
