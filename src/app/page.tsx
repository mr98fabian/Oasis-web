"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { HeroScroll } from "@/components/sections/HeroScroll";
import { Differentiator } from "@/components/sections/Differentiator";
import { Services } from "@/components/sections/Services";
import { ParallaxGallery } from "@/components/sections/ParallaxGallery";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { OasisLoader } from "@/components/ui/OasisLoader";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AmbientSound } from "@/components/ui/AmbientSound";
import { SocialProofPopup } from "@/components/ui/SocialProofPopup";

/**
 * Oasis Landing Page - Main Entry Point.
 *
 * Section order follows neuro-design principles:
 * 1. HeroScroll (Cinematic scrollytelling hook + CTA)
 * 2. Differentiator (Address pain points)
 * 3. Services (Show the solution)
 * 4. Gallery (Visual proof — parallax client images)
 * 5. Process (Reduce cognitive load)
 * 6. Testimonials (Social proof before action)
 * 7. FAQ (Handle objections)
 * 8. BookingCTA (Final conversion point)
 */
export default function Home() {
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadProgress = useCallback((loaded: number, total: number) => {
    setLoadProgress((loaded / total) * 100);
  }, []);

  const handleLoadComplete = useCallback(() => {
    // Small delay so user sees 100% before fade-out
    setTimeout(() => setIsLoaded(true), 400);
  }, []);

  return (
    <>
      {/* Preloader — blocks scroll until frames ready */}
      <OasisLoader progress={loadProgress} isComplete={isLoaded} />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      <Navbar />
      <main>
        <HeroScroll
          onLoadProgress={handleLoadProgress}
          onLoadComplete={handleLoadComplete}
        />
        <SectionDivider from="dark" to="cream" variant="wave" />
        <Differentiator />
        <SectionDivider from="cream" to="emerald" variant="curve" />
        <Services />
        <SectionDivider from="emerald" to="cream" variant="wave" />
        <ParallaxGallery />
        <Process />
        <SectionDivider from="cream" to="emerald" variant="curve" />
        <Testimonials />
        <FAQ />
        <SectionDivider from="cream" to="emerald" variant="wave" />
        <BookingCTA />
      </main>
      <Footer />

      {/* Floating Elements */}
      <AmbientSound />
      <SocialProofPopup />
      <WhatsAppButton />
      <StickyMobileCTA />
    </>
  );
}
