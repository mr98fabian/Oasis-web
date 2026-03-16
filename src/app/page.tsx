import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
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

/**
 * Oasis Landing Page - Main Entry Point.
 *
 * Section order follows neuro-design principles:
 * 1. Hero (Emotional hook + CTA)
 * 2. Differentiator (Address pain points)
 * 3. Services (Show the solution)
 * 4. Gallery (Visual proof — parallax client images)
 * 5. Process (Reduce cognitive load)
 * 6. Testimonials (Social proof before action)
 * 7. FAQ (Handle objections)
 * 8. BookingCTA (Final conversion point)
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Differentiator />
        <Services />
        <ParallaxGallery />
        <Process />
        <Testimonials />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />

      {/* Floating Elements (oasis-client-flow) */}
      <WhatsAppButton />
      <StickyMobileCTA />
    </>
  );
}
