import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({

  variable: "--font-geist-mono",
  subsets: ["latin"],
  
});

export const metadata = {

  title: "Zedex Fire Services",
  description: "Explore Zedexfire's range of fire equipment and safety products designed to protect your home and business. Stay safe with our reliable solutions.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <meta name="google-site-verification" content="JZS7lm8ZnieiJrYNPlrak7_aof-8UBTd74dNVuDpaaM" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<Analytics/>
<SpeedInsights/>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
