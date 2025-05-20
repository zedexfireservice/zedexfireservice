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
    default: "Zedex Fire Services",
    template: "%s"
  },

  description: "Explore Zedexfire's range of fire equipment and safety products designed to protect your home and business. Stay safe with our reliable solutions.",

}
;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

{/* <script>
  gtag('event', 'conversion', {'send_to': 'AW-16532850100/t4DICJmHm6cZELSLvcs9'});
</script> */}

  <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=AW-16532850100`}
      />
      
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16532850100');
          `,
        }}
      />
  



      
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
