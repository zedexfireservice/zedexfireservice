import React from 'react'
import TopCompany from './TopCompany'

export const metadata = {
  title: "Top Fire Fighting Company in Delhi NCR | Zedex Fire Services",
  description: "Looking for the best firefighting company in Delhi NCR? Zedex Fire Services is ISO 9001:2008 certified, offering top-quality systems & equipment. Contact us today!",
  keywords: [ 
    "Top fire fighting company Delhi",
    "Best firefighting company Delhi NCR",  
    "Firefighting company Delhi NCR",
    "ISO 9001:2008 certified firefighting",  
    "Top-quality fire systems",           
    "Top-quality fire equipment",          
    "Fire fighting services Delhi",
    "Fire safety company Delhi NCR",
    "Fire protection company Delhi",
    "Comprehensive fire solutions",
    "Fire safety experts Delhi",
    "Fire suppression services Delhi",
    "Fire alarm installation Delhi",
    "Fire extinguisher supplier Delhi", 
    "Zedex Fire",
    "Zedex Fire Services",
    "Zedex fire fighting",
    "Zedex fire safety",
    "ISO 9001:2008 certified",  
    "Fire fighting company Delhi",
    "Fire fighting company Gurgaon",
    "Fire fighting company Noida",
    "Fire fighting company Ghaziabad",
    "Fire fighting company Faridabad",
    "Fire fighting company India",
  ],
  robots: "index, follow",

  openGraph: {
    title: "Top Fire Fighting Company in Delhi NCR | Zedex Fire Services",
    description: "Looking for the best firefighting company in Delhi NCR? Zedex Fire Services is ISO 9001:2008 certified, offering top-quality systems & equipment. Contact us today!",
    url: "https://www.zedexfire.com/top-fire-fighting-company-in-delhi",
    type: "article",  
    images: [
      {
        url: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618767/topfire_jx2sgb.webp", 
        width: 1200,
        height: 630,
        alt: "Zedex Fire: Best Firefighting Company in Delhi NCR",
      },
    ],
    
  },
  alternates: {
    canonical: "https://www.zedexfire.com/top-fire-fighting-company-in-delhi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Firefighting Company Delhi NCR - Zedex Fire Services",
    description: "Looking for the best firefighting company in Delhi NCR? Zedex Fire Services is ISO 9001:2008 certified, offering top-quality systems & equipment. Contact us today!",
    image: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618767/topfire_jx2sgb.webp",  
  },
};
export default function page() {
  return (
    <>
    
     <TopCompany/>
     
     </>
  )
}
