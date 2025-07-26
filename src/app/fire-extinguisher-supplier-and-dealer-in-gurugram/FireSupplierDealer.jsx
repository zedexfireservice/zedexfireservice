'use client';

import { useRef } from 'react';
import { Flame, AlertTriangle, Download, Phone, Zap, Fuel, Utensils, Factory, ChevronRight, Shield, FireExtinguisherIcon, AlertCircleIcon, ShieldCheckIcon, FlaskConicalOffIcon, WrenchIcon, CalendarCheck2Icon, ClipboardCheckIcon, LightbulbOffIcon } from 'lucide-react';
 
 
import {  
  Droplet as FoamIcon,
  Zap as DCPIcon,
  ThermometerSnowflake as CO2Icon,
  Flame as WetIcon,
  ShieldCheck as CleanIcon
} from "lucide-react";
import { Battery as WaterIcon } from "lucide-react";

import {
  Hand,
  Target,
  MousePointerClick,
  Repeat,
  Home,
  Wrench,
  Restaurant, 
  Server,
  ShieldCheck
} from "lucide-react";
import Link from 'next/link';


export default function FireSupplierDealer() {


 const fireClassesRef = useRef(null);  

  const scrollToFireClasses = () => {
    if (fireClassesRef.current) {
      fireClassesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

     const passSteps = [
    {
      step: "Clarifying Your Obligations :",
      description: " We help you interpret the specific fire safety requirements relevant to your property type and location within Gurugram.",
      icon: <Hand className="w-6 h-6 text-red-600" />
    },
    {
      step: "Preparation for Inspections :",
      description: " Our team ensures your fire fighting scheme and equipment align with the National Building Code (NBC) and local Gurugram guidelines.",
      icon: <Target className="w-6 h-6 text-red-600" />
    },
    {
      step: "Ensuring Continuous Compliance :",
      description: " Through our diligent maintenance and refilling services, you can confidently provide the required annual Self-Declaration Certificate, knowing your systems are expertly managed.",
      icon: <MousePointerClick className="w-6 h-6 text-red-600" />
    },
    
  ];


  const usageRecommendations = [
    {
      title: "Why Gurugram Chooses Zedexfire for Unmatched Safety",
      icon: <Home className="w-7 h-7 text-red-700" />,
      points: [
        "Trusted by Leading Organizations : Our proven track record of safeguarding prominent clients such as Reliance, DLF, Apollo Hospitals, ITC, JLL, Honda, and Fortis Healthcare demonstrates our unwavering commitment to excellence and reliability in fire safety solutions.",

        "Quality & Certifications : All our products are ISI certified, guaranteeing reliability and strict adherence to national safety standards. Our services consistently meet the highest industry benchmarks.",

        "Dedicated & Skilled Professionals : Our team comprises highly trained and experienced fire safety experts committed to delivering excellence in every interaction, from initial consultation to ongoing support."
        ,
        "Competitive & Transparent Pricing : We believe that superior fire safety should be accessible. We offer competitive pricing models without compromising on the quality of our products or services."
      ]
    },
    {
      title: "Ready to Enhance Your Gurugram Property's Fire Safety ?",
      icon: <Wrench className="w-7 h-7 text-red-700" />,
      points: [
        "Don't wait for an incident to occur. Partner with Zedexfire, your trusted fire extinguisher supplier and dealer in Gurugram/Gurgaon, and take a decisive step towards creating a safer, more secure environment for your family, employees, or tenants.",

        "Contact us today for a personalized consultation or to explore our comprehensive range of fire safety products and services. Let Zedexfire help you protect what matters most.",

        
      ]
    }
  ];


  const fireClasses = [
    {
      class: 'A',
      title: 'ABC Dry Powder Fire Extinguishers ',
      icon: <Flame className="w-5 h-5" />,
      description: ' Your versatile solution for Class A (ordinary combustibles), B (flammable liquids), and C (electrical) fires, making them ideal for homes, small businesses, and general office spaces.',
      
    },
    {
      class: 'B',
      title: 'CO2 Fire Extinguishers ',
      icon: <Fuel className="w-5 h-5" />,
      description: " Perfect for Gurugram's numerous IT rooms, server centers and electrical panels, as they extinguish fires without leaving corrosive residue.",
    
    },
    {
      class: 'C',
      title: 'Water & Foam Fire Extinguishers ',
      icon: <Zap className="w-5 h-5" />,
      description: ' Crucial for Class A and B fires respectively, highly effective for residential buildings and commercial properties like hotels and restaurants.',
    
    },
    {
      class: 'D',
      title: 'Clean Agent Fire Extinguishers ',
      icon: <Factory className="w-5 h-5" />,
      description: 'Designed for sensitive environments like data centers and high-tech offices, providing residue-free suppression that protects valuable equipment.',
      
    },
    {
      class: 'K',
      title: 'Special Application & Automatic Modular Types ',
      icon: <Utensils className="w-5 h-5" />,
      description: 'Tailored for specific industrial hazards in areas like Manesar or specialized commercial setups.',
      
    },
    {
      class: 'M',
      title: 'Complete Fire Fighting Systems ',
      icon: <Utensils className="w-5 h-5" />,
      description: ' From robust fire alarm and sprinkler systems to powerful fire hydrants and advanced fire suppression solutions, we equip your property with multiple layers of defense.',
      
    }
  ];



const extinguishers = [
  {
    name: "Fire Extinguisher Refilling in Gurugram ",
    mechanism: "We provide prompt, certified refilling services for all types of extinguishers, adhering to stringent safety and quality standards. Our efficient process ensures your Gurugram property maintains continuous protection.",
    
    icon: <WaterIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Professional Installation & Commissioning",
    mechanism: " Our skilled technicians ensure your fire safety equipment is installed correctly and strategically positioned for maximum effectiveness across your Gurugram premises, in line with building codes.",
   
    icon: <FoamIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Annual Maintenance Contracts (AMCs)",
    mechanism: "Regular maintenance isn't just a recommendation; it's a critical compliance requirement. Our AMCs ensure your fire safety systems are consistently inspected, serviced, and maintained in peak working condition.",
    
    icon: <DCPIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Fire Safety Audits & Advisory Services",
    mechanism: "We conduct thorough fire risk assessments and provide expert guidance to help Gurugram businesses, educational institutions, and residential societies navigate complex regulations and implement best practices.",
    
    icon: <CO2Icon className="w-6 h-6 text-red-600" />
  },
 
];


  return (
    <>
 <div className=" " >
      {/* Premium Hero Section */}
      <section  className="px-8 relative h-screen  md:h-[80vh] bg-gradient-to-r from-red-900 to-red-700">
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto h-full flex flex-col justify-center px-6">
            <div className="max-w-2xl">
              <span className=" mt-4 inline-block px-3 py-1 mb-4 text-sm font-medium text-red-100 bg-red-800/50 rounded-full backdrop-blur-sm">
                FIRE SAFETY ESSENTIALS
              </span>
              <h1 className=" md:text-3xl font-bold text-white leading-tight mb-4">
Your Essential Guide to Fire Safety: Zedexfire - Leading Fire Extinguisher Supplier & Dealer in Gurugram/Gurgaon

              </h1>
              <p className="text-sm text-red-50 mb-8">
Gurugram, the dynamic heart of Haryana, continues its incredible growth as a major corporate, commercial, and residential hub. This rapid expansion, however, brings with it an escalating responsibility: ensuring stringent fire safety. At Zedexfire, we are deeply committed to safeguarding lives and property, serving as a premier fire extinguisher supplier and dealer in Gurugram/Gurgaon. We provide comprehensive, compliant, and cutting-edge fire safety solutions precisely engineered for the city's unique infrastructure and needs.

              </p>
              <div className="flex flex-wrap gap-4">
                <a  href="/zedex-fire-services-catalogue-2025.pdf"
                      download="zedex-fire-services-catalogue-2025" className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-white text-red-700 font-medium rounded-lg hover:bg-gray-100 transition-all shadow-md">
                  <Download className="w-5 h-5" />
                  Download Product Catalogue
                </a>
                <button  onClick={scrollToFireClasses} className="  cursor-pointer flex items-center gap-2 px-6 py-3 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all shadow-md">
                  Read Case Studies
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Exact Content */}
<div className="container mx-auto px-4">
 <section className=" py-12 bg-white md:mt-24" ref={fireClassesRef}  >
                    <div className="container mx-auto ">
                        <div className="flex justify-around flex-col lg:flex-row items-center">

                            <div className="lg:w-5/12 w-full">
                                <div className="relative w-full    rounded overflow-hidden">

                                    <img
                                        src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1753529464/extinguisher_ojfdme.webp"
                                        alt="Fire VESDA System"

                                        className=" w-full h-full rounded-xl object-center  object-cover "
                                    />

                                </div>
                            </div>

                            <div  className="lg:w-6/12 w-full mt-8 lg:mt-0">
                                <div className="space-y-3">
                                    <h2 className=" text-2xl text-center md:text-left md:text-3xl font-bold text-gray-800">
Why Fire Safety Demands Your Immediate Attention in Gurugram

                                    </h2>
                                    <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-red  text-justify md:text-left">
            <p>
          Recent incidents across Gurugram – from devastating warehouse fires and tragic residential blazes to industrial accidents and AC compressor explosions – serve as powerful reminders that fire hazards are a constant threat. Beyond the immediate danger to lives, non-compliance with the Haryana Fire and Emergency Services Act, 2022, can result in significant legal penalties, operational shutdowns, and severe financial losses. Every building, from a high-rise apartment to a bustling office, must prioritize proactive fire preparedness.

            </p>
           
          </div>
        </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
    

      {/* Fire Classes Section - Exact Content */}
  <section className="bg-white md:py-20">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto mb-16 text-center">
      <h2 className=" text-md text-left md:text-3xl font-bold flex items-center justify-center gap-3 text-red-700 mb-4">
        <AlertTriangle className=" w-24 h-full md:w-8 md:h-8 text-red-700" />
   Zedexfire : Your Complete Fire Safety Partner in Gurugram
 </h2>
      <p className=" text-sm text-justify md:text-lg text-gray-700">
 With years of dedicated service and an in-depth understanding of Gurugram's evolving fire safety landscape, Zedexfire offers more than just products. We are your comprehensive fire safety partner, ensuring you have the right equipment and knowledge to respond effectively.

 </p>
      <h2 className=" pt-8 text-md text-left md:text-2xl font-bold flex items-center justify-center gap-3 text-red-700 mb-4">
     Our Extensive Product Range for Gurugram :

 </h2>
      <p className=" text-sm text-justify  text-gray-700">
We supply a wide array of <Link href='/fire-extinguishers'>
    ISI-certified fire extinguishers
</Link> and state-of-the-art firefighting equipment, designed to combat every class of fire hazard prevalent in Gurugram's diverse environments:


 </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {fireClasses.map((item) => (
        <div
          key={item.class}
          className="group relative overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-6 shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white border border-red-200 rounded-xl shadow">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-red-800">
              Class {item.class}: {item.title}
            </h3>
          </div>
          <div className="space-y-2 text-sm text-gray-800 leading-relaxed">
            <p>
             {item.description}
            </p>
            
            
          </div>
          <div className="absolute -bottom-1 -right-1 opacity-10 text-[6rem] font-black text-red-300 pointer-events-none group-hover:opacity-20 transition-all">
            {item.class}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





    <section className="bg-white py-20">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto mb-16 text-center">
      <h2 className="text-md text-left md:text-3xl font-bold flex items-center justify-center gap-3 text-red-700 mb-4">
        <FireExtinguisherIcon className="w-24 h-full md:w-8 md:h-8 text-red-700" />
        Beyond Supply: Our Essential Gurugram-Focused Services

      </h2>
      <p className=" text-sm md:text-lg text-gray-700 text-justify">
       A fire extinguisher is only effective if it's properly maintained and ready for use. Zedexfire offers a full spectrum of services to ensure your equipment is always compliant and operational :

      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 ">
      {extinguishers.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-6 shadow hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white border border-red-100 rounded-full shadow">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-red-800">
              {index + 1}. {item.name}
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Mechanism : </strong> {item.mechanism}</li>
          
          </ul>
          <div className="absolute -bottom-2 -right-2 opacity-10 text-[5rem] font-extrabold text-red-300 pointer-events-none group-hover:opacity-20 transition">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



<section className="bg-white md:py-20">
  <div className="container mx-auto px-6 max-w-6xl">
     <h2 className=" text-center text-2xl md:text-3xl font-bold text-red-700 mb-4">
       Navigating Gurugram's Fire Safety Regulations with Confidence

        </h2>
        <p className=" text-sm text-center text-gray-600 mb-6">
    The <strong>Haryana Fire and Emergency Services Act, 2022,</strong> introduces updated compliance norms. For many commercial buildings and high-rise residential properties (above 16.5m), a <strong>Fire No Objection Certificate (NOC)</strong> is mandatory. While a full NOC is valid for up to 5 years (depending on the building type), an <strong>annual Self-Declaration Certificate</strong> affirming your fire fighting system's operational status is now a key requirement.
  </p>
    <div className="flex flex-col lg:flex-row items-start pt-12 gap-12 mb-20">
    
      {/* Image Section - Left Side */}
      <div className="lg:w-1/2 w-full">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img 
            src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618655/fire-extinguisher1_ogj1a9.webp" 
            alt="Proper fire extinguisher usage demonstration"
            className="w-full h-auto object-cover"
         
          />
        
        </div>
      </div>

      {/* Content Section - Right Side */}
      <div className="lg:w-1/2 w-full">
     
        
        <div className="space-y-4">
          {passSteps.map(({ step, description, icon }) => (
            <div key={step} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:border-red-200 transition-all">
              <div className="bg-red-100 p-2 rounded-lg text-red-600">
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{step}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </div>

    {/* Extinguisher Types Section */}
    <div className="max-w-4xl mx-auto">
      <h2 className="  text-2xl md:text-3xl font-bold text-red-700 mb-8 text-center">
      Why Choose Zedex Fire?

      </h2>
      
      <div className="grid gap-6 sm:grid-cols-2">
        {usageRecommendations.map(({ title, icon, points }) => (
          <div key={title} className="group p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-50 rounded-lg text-red-600 group-hover:bg-red-100 transition">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <ul className="space-y-2 pl-2">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                  <svg className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



<section className="bg-red-50 py-20 rounded-lg">
  <div className="container mx-auto px-6 max-w-6xl">
    
    {/* Pro Tip Section */}
    <div className="bg-white border-l-4 border-red-600 shadow-md p-6 rounded-lg mb-12 flex items-start gap-4">
      <LightbulbOffIcon className="w-24 h-full md:w-8 md:h-8 text-red-600 mt-1" />
      <p className="text-gray-800  text-justify text-sm md:text-md">
        <strong className="text-red-700">Pro Tip :</strong> Consult with fire safety experts like <strong>Zedex Fire</strong> for a professional assessment and tailored solutions. We specialize in understanding the unique needs of Indian homes, offices, and industries.
      </p>
    </div>

    {/* Maintenance & Inspection */}
    <div className="mb-16">
      <h2 className=" text-2xl px-2 md:text-3xl font-bold text-red-700 mb-6 flex items-center gap-3">
        <ClipboardCheckIcon className="w-24 h-full md:w-8 md:h-8 text-red-700" />
        Fire Extinguisher Maintenance & Inspection
      </h2>
      <p className="text-gray-700 mb-6 text-sm md:text-lg ">
        A fire extinguisher is only effective if it works when needed. Follow these essential maintenance practices:
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl p-6 shadow border border-red-100">
          <CalendarCheck2Icon className="w-6 h-6 text-red-600 mb-3" />
          <h3 className="font-semibold text-red-700 mb-2">Monthly Visual Check</h3>
          <ul className="text-sm text-gray-700 list-disc list-outside px-3 space-y-1">
            <li>Is the extinguisher accessible and visible?</li>
            <li>Is the pressure gauge in the green zone?</li>
            <li>Are the pin and tamper seal intact?</li>
            <li>No signs of damage, corrosion, or leakage?</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-red-100">
          <WrenchIcon className="w-6 h-6 text-red-600 mb-3" />
          <h3 className="font-semibold text-red-700 mb-2">Annual Professional Servicing</h3>
          <p className="text-sm text-gray-700">
            Indian fire safety laws require certified annual servicing. <strong>Zedex Fire</strong> ensures your extinguishers stay compliant and ready.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-red-100">
          <FlaskConicalOffIcon className="w-6 h-6 text-red-600 mb-3" />
          <h3 className="font-semibold text-red-700 mb-2">Hydrostatic Testing</h3>
          <p className="text-sm text-gray-700">
            Every 5–12 years (based on type), extinguishers must undergo hydrostatic testing to check cylinder integrity.
          </p>
        </div>
      </div>
    </div>

    {/* Why Choose Zedex Fire */}
 

    {/* Conclusion */}
    <div className="text-center bg-white p-8 rounded-xl shadow border border-red-100">
      <AlertCircleIcon className="w-8 h-8 text-red-600 mx-auto mb-4" />
      <h3 className=" text-xl md:text-2xl font-semibold text-red-700 mb-3">Conclusion: Be Prepared, Stay Safe</h3>
      <p className="text-gray-700 text-justify text-sm md:text-md max-w-2xl mx-auto">
        A fire extinguisher is a small investment with life-saving potential. Learn your fire classes, use the right extinguisher, and follow the PASS method to safeguard your property and lives. Don’t wait for a crisis—<strong className="text-red-700">act today</strong>.
      </p>
    </div>
  </div>
</section>
      {/* Professional CTA */}
     
</div>
 <section className="py-20 bg-gradient-to-r from-red-800 to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className=" text-2xl md:text-3xl font-bold mb-6">Protect What Matters Most</h2>
            <p className=" text-sm md:text-xl mb-8 text-red-50">
              Zedex Fire provides certified fire protection solutions for businesses and homes across India. Our experts are ready to assess your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a  href="tel:9999883999"  className="px-8 py-4 bg-white text-red-700 font-medium rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-md">
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </a>
              <a  href="/zedex-fire-services-catalogue-2025.pdf"
                      download="zedex-fire-services-catalogue-2025" className="px-8 py-4 border border-white/30 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 shadow-md">
                Download Fire Safety Guide
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
        
      {/* Floating Emergency Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="tel:9999883999" 
          className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-full shadow-lg hover:bg-red-700 transition-all animate-pulse"
        >
          <Phone className="w-5 h-5" />
          <span>Contact Us</span>
        </a>
      </div>



    </div>

    </>
  )
}
