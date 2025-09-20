import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({

  variable: "--font-geist-mono",
  subsets: ["latin"],

});



  export const metadata = {
     title: {
    default: "Zedex Fire: Fire Fighting Equipment & Safety Solutions India",
    template: "%s"
  },
  
  
  description: "Zedex Fire offers a comprehensive range of high-quality fire fighting equipment, safety solutions, and suppression systems. Protect your assets with our reliable and innovative fire protection technology for commercial, industrial, and residential needs.",
  keywords: [
    // Core Business Keywords for Fire Safety
    "Fire fighting equipment",
    "Fire safety solutions",
    "Fire extinguishers",
    "Fire suppression systems",
    "Fire alarms",
    "Hydrant systems",
    "Fire pumps",
    "Fire safety products",
    "Commercial fire safety",
    "Industrial fire safety",
    "Residential fire safety",
    "Fire protection services",
    "Safety equipment India",
    "Fire safety equipment supplier",

    // * NEWLY ADDED KEYWORDS FROM YOUR LIST *
    "Fire Extinguisher ISI Mark Zedex", // Specific brand and certification
    "Addressable Fire Alarm System",
    "Fire Sprinkler System",
    "Fire Hydrant System",
    "Fire Suppression System", // Already there, but good to ensure
    "Anti Rodent System",
    "Water Leak Device (WLD)",
    "Vesda System",
    "Fire Tubing System",
    "Fire Door Service",
    "Kitchen Fire Suppression System",
    // ****************

    // Brand Specific Keywords
    "Zedex Fire",
    "Zedex fire fighting",
    "Zedex fire safety",
    "Zedex fire solutions",

    // Location-Specific Keywords (Adjust based on Zedex Fire's primary service areas)
    "Fire fighting equipment Delhi",
    "Fire safety solutions Delhi NCR",
    "Fire extinguisher supplier India",
    "Fire protection systems Gurugram",
    "Fire safety equipment Noida",
  ],
  
  openGraph: {
    title: "Zedex Fire: Fire Fighting Equipment & Safety Solutions India",
    description: "Protect your assets with Zedex Fire's comprehensive range of high-quality fire fighting equipment, safety solutions, and suppression systems. Reliable fire protection for all sectors.",
    url: "https://www.zedexfire.com/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618669/abc-dry-powder-extinguisher_cbhshq.webp", // Placeholder: Suggest using a strong, relevant image from their homepage, e.g., a banner image or main product shot.
        width: 1200,
        height: 630,
        alt: "Zedex Fire fighting equipment and safety solutions",
      },
    ],
  },
 

robots: "noindex, nofollow",

  alternates: {
    canonical: "https://www.zedexfire.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zedex Fire: Fire Fighting & Safety Equipment",
    description: "Your trusted partner for fire fighting equipment, complete fire safety solutions, and reliable suppression systems. Ensure maximum protection with Zedex Fire.",
    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618669/abc-dry-powder-extinguisher_cbhshq.webp", // Placeholder: Same as Open Graph image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<meta name="robots" content="noindex, nofollow" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16532850100"></Script>

        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16532850100');
          `
        }} />

        <meta name="google-site-verification" content="JZS7lm8ZnieiJrYNPlrak7_aof-8UBTd74dNVuDpaaM" />

        <Script id="google-analytics" >

          {` window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-SJ6EERXFS4');`}

        </Script>




      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <SpeedInsights />
        <Header />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-SJ6EERXFS4"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden"
            }}>
          </iframe>
        </noscript>

        {children}

        <Footer />

      </body>
    </html>
  );
}
