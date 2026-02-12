import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

// Typography: Elegant serif for headings
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Typography: Clean sans for body text
const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

// SEO Metadata (oasis-growth-engine)
export const metadata: Metadata = {
  title: "Oasis | Tu Refugio de Belleza y Bienestar",
  description:
    "Descubre un santuario de calma y elegancia. Manicura, pedicura spa, masajes relajantes y diseño de mirada en un ambiente exclusivo diseñado para tu descanso.",
  keywords: [
    "spa de uñas exclusivo",
    "manicura spa",
    "pedicura relajante",
    "masajes relajantes",
    "diseño de cejas profesional",
    "salón de belleza premium",
    "bienestar",
  ],
  openGraph: {
    title: "Oasis | Tu Refugio de Belleza y Bienestar",
    description:
      "Un santuario de calma donde la belleza y el descanso se encuentran. Agenda tu momento de paz.",
    type: "website",
    locale: "es_US",
    siteName: "Oasis Beauty & Wellness",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

// JSON-LD Schema (oasis-growth-engine: LocalBusiness + BeautySalon)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["BeautySalon", "LocalBusiness"],
  name: "Oasis Beauty & Wellness",
  description:
    "Estudio boutique de belleza y bienestar. Manicura, pedicura spa, masajes relajantes y diseño de mirada.",
  url: "https://oasisbeauty.com",
  telephone: "+1-469-514-4469",
  priceRange: "$$",
  image: "https://oasisbeauty.com/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5025 Branderburg Ln",
    addressLocality: "The Colony",
    addressRegion: "TX",
    postalCode: "75056",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Prevent FOUC on dark mode — inline script runs before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('oasis-theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-oasis-cream text-oasis-dark font-sans`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
