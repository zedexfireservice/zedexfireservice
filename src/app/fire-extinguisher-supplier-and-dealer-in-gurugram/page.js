import React from 'react'
import FireSupplierDealer from './FireSupplierDealer'

export const metadata = {
  title: "Fire Extinguisher Supplier & Dealer in Gurugram | Zedexfire",
  description:
    "Secure your Gurugram property with Zedexfire. We provide ISI-certified fire extinguishers, refilling, installation & compliance under the Haryana Fire Act 2022. Trusted by top clients. Act now for safety!",
  keywords: [
    // Core Product & Service Keywords
    "fire extinguisher Gurugram",
    "fire extinguisher Gurgaon",
    "fire extinguisher supplier Gurugram",
    "fire extinguisher dealer Gurugram",
    "fire safety equipment Gurugram",
    "fire fighting equipment Gurugram",
    "fire extinguisher refilling Gurugram",
    "fire extinguisher installation Gurugram",
    "fire safety audit Gurugram",
    "fire suppression systems Gurugram",

    // Local & Compliance Keywords
    "Gurugram fire safety",
    "Gurgaon fire safety",
    "Haryana Fire Act 2022",
    "Fire NOC Gurugram",
    "fire safety compliance Gurugram",
    "Gurugram fire regulations",
    "commercial fire safety Gurugram",
    "residential fire safety Gurugram",

    // Product Types
    "ABC fire extinguisher Gurugram",
    "CO2 fire extinguisher Gurugram",
    "water foam fire extinguisher Gurugram",
    "clean agent fire extinguisher Gurugram",
    "modular fire extinguisher Gurugram",

    // Company & Trust
    "Zedexfire Gurugram",
    "Zedexfire fire safety",
    "ISI certified fire extinguisher",
    "trusted fire safety Gurugram",
    "top fire extinguisher supplier Delhi NCR", // Broaden slightly for regional search
    "fire safety solutions Gurugram",
    "fire protection Gurugram",

    // Benefit & Intent Keywords
    "property safety Gurugram",
    "life safety Gurugram",
    "fire prevention Gurugram",
    "emergency preparedness Gurugram",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Fire Extinguisher Supplier & Dealer in Gurugram | Zedexfire",
    description:
      "Secure your Gurugram property with Zedexfire. We provide ISI-certified fire extinguishers, refilling, installation & compliance under the Haryana Fire Act 2022. Trusted by top clients. Act now for safety!",
    url: "https://www.zedexfire.com/blog/fire-extinguisher-supplier-and-dealer-in-gurugram", // Placeholder: Ensure this matches your actual blog post URL
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1748582659/How_to_use_a_Fire_extinguisher_lggeit.webp", // Placeholder: Use a relevant, high-quality image for this blog post
        width: 1200,
        height: 630,
        alt: "Zedexfire: Fire Extinguisher Supplier and Dealer in Gurugram",
      },
    ],
  },
  alternates: {
    canonical:
      "https://www.zedexfire.com/blog/fire-extinguisher-supplier-and-dealer-in-gurugram", // Placeholder: Ensure this matches your actual canonical URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Extinguisher Supplier & Dealer in Gurugram | Zedexfire",
    description:
      "Zedexfire: Your trusted Gurugram fire extinguisher supplier & dealer. ISI-certified products, refilling, installation & compliance under Haryana Fire Act 2022. Secure your property now!",
    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1748582659/How_to_use_a_Fire_extinguisher_lggeit.webp", // Placeholder: Use the same image as Open Graph
  },
};


export default function page() {
  return (
    <>
    <FireSupplierDealer/>
    </>
  )
}
