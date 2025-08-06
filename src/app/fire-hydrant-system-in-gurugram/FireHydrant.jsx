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


export default function FireHydrant() {


 const fireClassesRef = useRef(null);  

  const scrollToFireClasses = () => {
    if (fireClassesRef.current) {
      fireClassesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

     const passSteps = [
    {
      step: "Mandatory Installation ",
      description: " Specified for high-rise buildings (residential above 16.5m, educational/institutional above 9m) and buildings over 500 sq m floor area.",
      icon: <Hand className="w-6 h-6 text-red-600" />
    },
    {
      step: " Design & Layout Approval",
      description: " Your fire fighting scheme, including the hydrant system, must be approved by the Competent Authority.",
      icon: <Target className="w-6 h-6 text-red-600" />
    },
    {
      step: "Fire NOC",
      description: " A fully operational and compliant fire hydrant system is essential for obtaining your property's Fire No Objection Certificate, valid for up to 5 years.",

      icon: <MousePointerClick className="w-6 h-6 text-red-600" />
    },
    {
      step: "Annual Self-Declaration Certificate",
      description: " A yearly verification confirming your fire fighting systems, including the hydrant, are in good working condition.",

      icon: <MousePointerClick className="w-6 h-6 text-red-600" />
    },
    {
      step: " Fire Safety Officer",
      description: " Certain buildings are required to appoint a qualified Fire Safety Officer to oversee maintenance and compliance.",

      icon: <MousePointerClick className="w-6 h-6 text-red-600" />
    },
    
  ];


  const usageRecommendations = [
    {
      title: "Zedexfire's expert services ensure optimal performance",
      icon: <Home className="w-7 h-7 text-red-700" />,
      points: [
        "Precision Design & Installation : Our highly skilled engineers and technicians design systems precisely to NBC and IS standards, ensuring correct pipe sizing, pump selection, and strategic placement of hydrants and valves for maximum coverage and pressure.",

        "Comprehensive AMC & Regular Testing : We offer Annual Maintenance Contracts (AMCs) that include",

       "Routine Inspections : Checking for leaks, corrosion, obstructions, and proper drainage.",
       "Pressure & Flow Testing : Ensuring adequate water pressure and flow rate at all hydrant points."
       ,
       "Valve Exercising & Lubrication : Maintaining smooth operation of all valves.",
       "Pump House Checks : Verifying the functionality of all pumps, control panels, and power supplies.",
       "Hose Reel Inspection : Checking hoses for damage, proper winding, and nozzle functionality.",
       "Prompt Repair & Upgrades : We quickly diagnose and rectify any issues, from minor leaks to major component failures. We also advise on system upgrades to meet evolving safety standards or property needs."
      ]
    },
    {
      title: "Cost Considerations for Fire Hydrant Systems in Gurugram",
      icon: <Wrench className="w-7 h-7 text-red-700" />,
      points: [
        "The cost of a fire hydrant system varies significantly based on factors like building size, system complexity (wet/dry riser, number of hydrants/hose reels), pump capacity, water tank requirements, labor, and compliance-specific features. While the initial investment might seem substantial, it is a critical, long-term asset that",

        "Safeguards lives and property from devastating fire damage.",
        "Ensures uninterrupted business operations.",
        "Avoids hefty penalties for non-compliance.",
        "Potentially lowers insurance premiums."

        
      ]
    },
    {
      title: "Why Gurugram Trusts Zedexfire for Fire Hydrant Systems",
      icon: <Wrench className="w-7 h-7 text-red-700" />,
      points: [
        "Choosing Zedexfire means partnering with a leader committed to unparalleled safety and service :",

        "Trusted by Leading Organizations : Our proven track record of safeguarding prominent clients such as Reliance, DLF, Apollo Hospitals, ITC, JLL, Honda, and Fortis Healthcare demonstrates our unwavering commitment to excellence and reliability in fire safety solutions.",
       "Hyper-Local Expertise : We possess an in-depth understanding of Gurugram's specific architectural challenges, industrial demands, and regulatory environment."
,
"End-to-End Solutions : From initial design and supply of ISI-certified components to precision installation, proactive maintenance, and full compliance assistance, we cover every aspect of your fire hydrant system needs.",
"Highly Skilled & Dedicated Team : Our professionals are meticulously trained in the latest fire safety technologies and Gurugram's specific regulatory nuances, ensuring a seamless and reliable experience."
        
      ]
    }
  ];


  const fireClasses = [
    {
      class: 'A',
      title: 'Fire Water Storage Tank',
      icon: <Flame className="w-5 h-5" />,
      description: ' A dedicated reservoir ensuring a continuous and sufficient water supply for firefighting operations, independent of municipal lines during emergencies.',
      
    },
    {
      class: 'B',
      title: 'Fire Pumps (Jockey, Main, Standby)',
      icon: <Fuel className="w-5 h-5" />,
      description: 
      <>

        <ul>
            <li>
                <strong className=' text-red-500'>Jockey Pump :</strong> Maintains constant pressure in the system, compensating for minor leaks.

            </li>
            <li>
                <strong className=' text-red-500'> Main Pump :</strong> Activates automatically upon significant pressure drop (e.g., a hydrant opening), providing the primary high-pressure water flow.


            </li>
            <li>
                <strong className=' text-red-500'>Standby Pump (Diesel) :</strong>  A crucial backup, often diesel-driven, that kicks in if the main pump fails or power is lost, ensuring an uninterrupted water supply.



            </li>
        </ul>
      </>,
    
    },
    {
      class: 'C',
      title: 'Piping Network',
      icon: <Zap className="w-5 h-5" />,
      description: 
         <>
<p>
    A robust network of pipes (often made of ductile iron or steel) designed to withstand high pressure, distributing water throughout the building or complex. This includes:
</p>
        <ul>
            <li>
                <strong className=' text-red-500'>Wet Risers :</strong>  Vertical pipes constantly charged with water, providing immediate access on every floor. Ideal for Gurugram's high-rises.


            </li>
            <li>
                <strong className=' text-red-500'>Dry Risers :</strong>  Vertical pipes that are normally empty, filled by the fire brigade using their appliances. Suitable where freezing is a concern or immediate constant water is not feasible.



            </li>
           
        </ul>
      </>,
       
    
    },
    {
      class: 'D',
      title: 'Landing Valves (Internal Hydrants)',
      icon: <Factory className="w-5 h-5" />,
      description: ' Outlets located on each floor of a building, allowing firefighters to connect hoses inside the structure.',
      
    },
    {
      class: 'E',
      title: 'External Hydrant Valves',
      icon: <Utensils className="w-5 h-5" />,
      description: ' Located outside the building, connected to the main piping network, providing critical access points for the fire brigade.',
      
    },
    {
      class: 'F',
      title: 'Hose Reels & Hoses ',
      icon: <Utensils className="w-5 h-5" />,
      description: ' Mounted near landing valves, providing a readily accessible first-aid firefighting solution for occupants to tackle small fires before professional help arrives.',
      
    },
    {
      class: 'G',
      title: 'Fire Brigade Inlet',
      icon: <Utensils className="w-5 h-5" />,
      description: ' A crucial connection point outside the building, allowing the fire department to pump water into your internal hydrant system, boosting pressure and supply.',
      
    }
  ];



const extinguishers = [
  {
    name: "Wet Riser Systems",
    mechanism: " The most common in Gurugram's urban environment, continuously filled with water for instant use.",
    
    icon: <WaterIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Dry Riser Systems",
    mechanism: " Less common in Gurugram due to climate, but used in specific scenarios where pipes must remain dry.",
   
    icon: <FoamIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Yard Hydrant Systems",
    mechanism: " External hydrants strategically placed around large commercial properties, industrial parks, or residential townships for external firefighting access.",
    
    icon: <DCPIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Sprinkler System Integration",
    mechanism: "Fire hydrant systems are often integrated with automatic sprinkler systems for a holistic fire protection strategy.",
    
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
            <div className="max-w-2xl pt-4">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-red-100 bg-red-800/50 rounded-full backdrop-blur-sm">
                FIRE SAFETY ESSENTIALS
              </span>
              <h1 className=" md:text-3xl font-bold text-white leading-tight mb-4">
Fire Hydrant System in Gurugram: Your Ultimate Shield Against Major Blazes | Zedexfire


              </h1>
              <p className="text-sm text-red-50 mb-8">
Gurugram, a beacon of modern infrastructure and booming commerce, houses a dense tapestry of high-rise buildings, sprawling industrial zones, and vibrant residential complexes. In such a rapidly developing urban landscape, conventional fire safety measures are often insufficient against major fire outbreaks. This is where a robust Fire Hydrant System becomes not just a necessity, but an indispensable safeguard. At Zedexfire, we specialize in designing, installing, and maintaining advanced fire hydrant systems in Gurugram, providing the ultimate defense for your property and its occupants.


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
                                        src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1753529202/inner_hydrant_bvpgcw.webp"
                                        alt="Fire VESDA System"

                                        className=" w-full h-full rounded-xl object-center  object-cover "
                                    />

                                </div>
                            </div>

                            <div  className="lg:w-6/12 w-full mt-8 lg:mt-0">
                                <div className="space-y-3">
                                    <h2 className=" text-2xl text-center md:text-left md:text-3xl font-bold text-gray-800">
Why a Fire Hydrant System is Crucial for Gurugram Properties

                                    </h2>
                                    <div className="max-w-4xl mx-auto">
          <div className="  prose prose-lg prose-red  text-justify md:text-left">
            <p>
       While fire extinguishers handle small, incipient fires, a fire hydrant system provides an immediate, high-volume water supply essential for professional firefighters to combat large, escalating blazes. In a city like Gurugram, where rapid response and abundant water are critical, a well-functioning hydrant system can mean the difference between a minor incident and a catastrophic disaster.


            </p>
            <p className=' py-3'>
              Beyond operational effectiveness, compliance with the Haryana Fire and Emergency Services Act, 2022, is mandatory for many large and high-risk buildings. Non-compliance can lead to severe legal repercussions and significant financial losses. A meticulously installed and maintained fire hydrant system ensures your property meets these vital regulatory requirements.
  
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
  Understanding the Core Components of a Fire Hydrant System

 </h2>
      <p className=" text-sm text-justify md:text-lg text-gray-700">
A comprehensive fire hydrant system is a sophisticated network designed for immediate and sustained water delivery. Key components include:


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
               {item.class}: {item.title}
            </h3>
          </div>
          <div className="space-y-2 text-sm text-gray-800 leading-relaxed">
            <div>
             {item.description}
            </div>
            
            
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
      Types of Fire Hydrant Systems for Gurugram Properties

      </h2>
      <p className=" text-sm md:text-lg text-gray-700 text-justify">
    The choice of system depends on your property's size, occupancy, and specific risks :

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
    Compliance with Haryana Fire Act 2022: Your Legal Obligation

        </h2>
        <p className=" text-sm text-center text-gray-600 mb-6">
  The Haryana Fire and Emergency Services Act, 2022, along with the National Building Code (NBC) and IS standards (e.g., IS 3844 for fire hose reels, IS 909 for hydrants, NFPA 14 for standpipes), dictates rigorous requirements for fire hydrant systems.
 </p>
    <div className="flex flex-col lg:flex-row items-start pt-12 gap-12 mb-20">
    
      {/* Image Section - Left Side */}
     

      {/* Content Section - Right Side */}
      <div className="md::w-1/2 w-full">
     
        <p className=' pb-2'>
         Key compliance aspects include :
   
        </p>
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
     Professional Installation & Critical Maintenance for Lifespan and Reliability

      </h2>
      <p className=' pb-3  text-sm'>
        A fire hydrant system is only as effective as its installation and maintenance. Common issues like leaks, corrosion, low water pressure, blocked pipes, or malfunctioning valves can render the entire system useless during an emergency.

      </p>
      
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
            <h2 className=" text-2xl md:text-3xl font-bold mb-6">
         Safeguard Your Gurugram Property with a Robust Fire Hydrant System.

            </h2>
            <p className=" text-sm   mb-8 text-red-50">
          Don't leave your property vulnerable to major fire risks. Partner with Zedexfire, your trusted expert for fire hydrant systems in Gurugram/Gurgaon, and invest in a comprehensive shield against disaster.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a  href="tel:9810216907"  className="px-8 py-4 bg-white text-red-700 font-medium rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-md">
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
          href="tel:9810216907" 
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
