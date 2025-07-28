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


export default function SuppressionGurgaon() {


 const fireClassesRef = useRef(null);  

  const scrollToFireClasses = () => {
    if (fireClassesRef.current) {
      fireClassesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


     const passSteps = [

    {
      step: "The Haryana Fire and Emergency Services Act, 2022 ",
      description: "Mandates specific suppression systems for various building types and hazards.",
      icon: <Hand className="w-6 h-6 text-red-600" />
    },

    {
      step: "National Building Code (NBC) Part IV",
      description: " Provides comprehensive guidelines for fire protection systems.",
      icon: <Target className="w-6 h-6 text-red-600" />
    },

    {
      step: "Specific Indian Standards (IS) & NFPA Codes",
      description: "Such as NFPA 2001 (for Clean Agent Fire Extinguishing Systems) or IS 15493 (for water mist systems), among others relevant to each system type.",

      icon: <MousePointerClick className="w-6 h-6 text-red-600" />
    },

    
    
    
  ];


  const usageRecommendations = [

    {
      title: "Zedexfire's end-to-end services include  ",
      icon: <Home className="w-7 h-7 text-red-700" />,
      points: [

        "Customized Design : Our expert engineers meticulously design the system based on the specific hazard, room volume, asset value, and Gurugram's regulatory requirements.",

        "Precision Installation : Our certified technicians ensure flawless installation, adhering to manufacturer specifications and industry best practices." 
        
      ]
    },

    {
      title: "Comprehensive Annual Maintenance Contracts (AMCs): Regular inspections and testing are vital. Our AMCs cover",
      icon: <Wrench className="w-7 h-7 text-red-700" />,
      points: [
     "Cylinder Pressure Checks : Verifying agent levels and pressure gauges.",
   "Nozzle & Piping Inspection : Checking for blockages, corrosion, or damage."
,

        "Detection System Testing : Ensuring detectors and control panels function correctly.",

        "Integrity Testing (for Clean Agent rooms) : Confirming room seals to ensure effective agent concentration.",

        "Documentation : Meticulous record-keeping for all maintenance activities, crucial for compliance."
        ,
        "Prompt Repairs & System Upgrades : We quickly diagnose and resolve issues, ensuring your system remains operational. We also advise on necessary upgrades for aging systems or changing hazard profiles."
      ]
    },
     
    {
      title: "Why Gurugram Chooses Zedexfire for Advanced Fire Suppression",
      icon: <Wrench className="w-7 h-7 text-red-700" />,
      points: [
     "Partnering with Zedexfire means investing in advanced safety and unparalleled expertise"
,
"Trusted by Leading Organizations: Our proven track record of safeguarding prominent clients such as Reliance, DLF, Apollo Hospitals, ITC, JLL, Honda, and Fortis Healthcare demonstrates our unwavering commitment to excellence and reliability in fire safety solutions.",
"Hyper-Local Expertise : We possess a deep understanding of Gurugram's diverse commercial, industrial, and IT sectors, allowing us to provide tailored solutions that meet local needs and regulations.",
"Comprehensive Solutions: From initial risk assessment and custom design to the supply of ISI-certified products, precision installation, proactive maintenance, and full compliance assistance, we cover every aspect of your fire suppression needs.",
"Highly Skilled & Dedicated Team: Our professionals are meticulously trained and experienced in the latest fire suppression technologies, ensuring reliable and effective system performance."
      ]
    },
     
  ];


  const fireClasses = [
    {
      class: 'A',
      title: 'Clean Agent Fire Suppression Systems (Gaseous)',
      icon: <Flame className="w-5 h-5" />,
      description: 
      
<>

<ul className=' list-disc  ps-4'>
    <li>
     <strong className=' text-red-500'>How they work :</strong> These systems rapidly discharge a non-conductive, non-corrosive, and residue-free gas that extinguishes fire by removing heat or oxygen, or interfering with the chemical chain reaction.

    </li>

     <li >
       <strong className=' text-red-500'>Types :</strong>  Popular agents include Novec™ 1230 Fire Protection Fluid (FK-5-1-12), FM-200™ (HFC-227ea), and inert gases like Argonite (50% Argon, 50% Nitrogen) or Inergen® (Nitrogen, Argon, CO2).

    </li>

     <li> 
       <strong className=' text-red-500'> Ideal for : </strong>
        Data centers, server rooms, control rooms, telecommunication facilities, archives, museums, art galleries, pharmaceutical manufacturing, and other areas with sensitive electronic equipment or valuable assets where water/powder would cause unacceptable damage. Many are safe for occupied spaces when discharged.

    </li>
</ul>
  
</>
      , 
      
    },

    {
      class: 'B',
      title: 'CO2 Fire Suppression Systems (Gaseous)',
      icon: <Fuel className="w-5 h-5" />,
      description:

   <>

<ul className=' list-disc  ps-4'>
    <li>

     <strong className='text-red-500'> How they work :</strong>  Carbon Dioxide (CO2) extinguishes fire by rapidly displacing oxygen, suffocating the fire.


    </li>

     <li>
       <strong className=' text-red-500'>Ideal for :</strong>   Generator rooms, electrical switchgear rooms, industrial machinery spaces, paint booths, solvent storage areas, or any enclosed space where personnel are not regularly present or can be evacuated immediately due to CO2's oxygen-depleting nature.


    </li>
 
</ul>
  
</>
     ,
    
    },

    {
      class: 'C',
      title: 'Water Mist Fire Suppression Systems',
      icon: <Zap className="w-5 h-5" />,
      description: 
       
     <>

<ul className=' list-disc  ps-4'>
    <li>
     <strong className=' text-red-500'>How they work : </strong>  Discharges a very fine mist of water droplets that extinguishes fire through cooling, oxygen displacement (steam), and radiant heat blocking. Uses significantly less water than traditional sprinklers.


    </li>

     <li >
       <strong className=' text-red-500'>Ideal for : </strong>  Data centers, turbines, machinery spaces, electrical hazards, marine applications, and even heritage buildings where minimal water damage is crucial. Offers efficient fire control with less cleanup.


    </li>
 
</ul>
  
</>
     ,
       
    
    },

    {
      class: 'D',
      title: 'Foam Fire Suppression Systems',
      icon: <Factory className="w-5 h-5" />,
      description: 
       <>

<ul className=' list-disc  ps-4'>
    <li>
     <strong className=' text-red-500'>How they work : </strong>   Discharges a foam solution (e.g., AFFF - Aqueous Film Forming Foam, FFFP - Film Forming FluoroProtein) that spreads over flammable liquids, cooling the fire, suppressing vapors, and creating a barrier between the fuel and oxygen.



    </li>

     <li >
       <strong className=' text-red-500'>Ideal for : </strong> Petrochemical facilities, fuel storage areas, aircraft hangars, chemical plants, and areas with large quantities of flammable liquids (Class B fires).



    </li>
 
</ul>
  
</>
      ,
      
    },

    {
      class: 'E',
      title: 'Commercial Kitchen Fire Suppression Systems (Wet Chemical)',
      icon: <Factory className="w-5 h-5" />,
      description: 
       <>

<ul className=' list-disc  ps-4'>
    <li>
     <strong className=' text-red-500'> How they work : </strong> Specifically designed for commercial kitchens, these systems discharge a wet chemical agent that rapidly extinguishes grease (Class F) fires by saponification (forming a foam blanket) and cooling, preventing re-ignition.
 
    </li>

     <li >
       <strong className=' text-red-500'>Ideal for : </strong>
       
       Restaurants, hotels, cafeterias, and any commercial kitchen in Gurugram with deep fryers and cooking equipment.


    </li>
 
</ul>
  
</>
      ,
      
    },
   
  ];



const extinguishers = [
  {
    name: "Storage Cylinders",
    mechanism: "Store the extinguishing agent under high pressure.",
    
    icon: <WaterIcon className="w-6 h-6 text-red-600" />
  },

  {
    name: "Piping Network",
    mechanism: " Distributes the agent to discharge nozzles.",
   
    icon: <FoamIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Nozzles",
    mechanism: " Designed to rapidly and effectively disperse the agent over the protected area.",
    
    icon: <DCPIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Detection System",
    mechanism: "Integrated smoke, heat, or flame detectors that automatically activate the system.",
    
    icon: <CO2Icon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Control Panel",
    mechanism: "The 'brain' managing detection, alarm, and release sequences, often integrated with the building's main fire alarm system.",
    
    icon: <CO2Icon className="w-6 h-6 text-red-600" />
  },
 
  {
    name: "Manual Release/Abort Stations",
    mechanism: "Provide options for manual activation or temporary halt of discharge.",
    
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

Fire Suppression System in Gurugram : Advanced Protection for Critical Assets | Zedexfire


              </h1>
              <p className="text-sm text-red-50 mb-8">

Gurugram, a powerhouse of commerce and technology, houses myriad critical assets – from vast data centers and server rooms to intricate industrial machinery and high-value archives. While conventional fire fighting methods are essential, these specialized environments demand an immediate, precise, and often residue-free response that only a dedicated Fire Suppression System can provide. At Zedexfire, we are Gurugram's leading experts in designing, installing, and maintaining advanced fire suppression solutions, safeguarding your most valuable investments.


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
                                        src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747373103/mobile_view_638_x_870_px_fggarf.webp"
                                        alt="Fire VESDA System"

                                        className=" w-full h-full rounded-xl object-center  object-cover "
                                    />

                                </div>
                            </div>

                            <div  className="lg:w-6/12 w-full mt-8 lg:mt-0">
                                <div className="space-y-3">
                                    <h2 className=" text-2xl text-center md:text-left md:text-3xl font-bold text-gray-800">

Beyond Extinguishers : Why Specialized Suppression is Vital in Gurugram


                                    </h2>

                                    <div className="max-w-4xl mx-auto">
          <div className="  prose prose-lg prose-red  text-justify md:text-left">
            <p>

In Gurugram's rapidly evolving landscape, a standard fire extinguisher might not be enough. Imagine a fire in a data center – water or powder would cause irreparable damage to sensitive electronics. A fire suppression system acts automatically and rapidly to extinguish a fire, often before significant damage occurs, minimizing downtime and protecting irreplaceable assets.


            </p>
            <p className=' py-3'>

Furthermore, critical facilities in Gurugram must adhere to stringent safety protocols under the Haryana Fire and Emergency Services Act, 2022, and Part IV of the National Building Code (NBC). Non-compliance jeopardizes not just safety, but also legal standing and operational continuity.

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
Understanding Fire Suppression Systems : Types & Their Applications

 </h2>
      <p className=" text-sm text-justify md:text-lg text-gray-700">

Zedexfire offers a diverse range of specialized fire suppression systems, each tailored to specific hazards and environments prevalent in Gurugram:


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
   Key Components of an Advanced Suppression System :

      </h2>
    
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
Compliance with Haryana Fire Act 2022 : Your Regulatory Partner

        </h2>
        <p className=" text-sm text-center text-gray-600 mb-6">
Installing and maintaining a fire suppression system in Gurugram demands strict adherence to regulatory standards. Zedexfire ensures compliance with:

 </p>
    <div className="flex flex-col lg:flex-row items-start pt-12 gap-12 mb-20">
    
      {/* Image Section - Left Side */}
      
      <div className="md::w-1/2 w-full">
     
       
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

     <p className=' pt-4'>
     A fully functional and approved fire suppression system is integral to obtaining your property's Fire No Objection Certificate (NOC) and maintaining compliance through the annual Self-Declaration Certificate.

     </p>
      </div>
    </div>

    {/* Extinguisher Types Section */}
    <div className="max-w-4xl mx-auto">
      <h2 className="  text-2xl md:text-3xl font-bold text-red-700 mb-8 text-center">
Expert Design, Installation & Critical Maintenance for Uncompromised Safety

      </h2>
      <p className=' pb-3  text-sm'>

    The precision of a fire suppression system's design and installation is paramount. Common issues like leaks, low cylinder pressure, blocked nozzles, or detection system failures can compromise its effectiveness.

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
        <strong className="text-red-700">Pro Tip : </strong> Consult with fire safety experts like <strong>Zedex Fire</strong> for a professional assessment and tailored solutions. We specialize in understanding the unique needs of Indian homes, offices, and industries.
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
  Protect Your Critical Assets in Gurugram with Zedexfire's Advanced Fire Suppression Systems.

            </h2>
            <p className=" text-sm   mb-4 text-red-50">
   Don't compromise the safety of your invaluable assets. Partner with Zedexfire, your reliable expert for fire suppression systems in Gurugram/Gurgaon, and invest in a cutting-edge shield against fire.



            </p>
            <p className=" text-sm   mb-8 text-red-50">
   Contact us today for a personalized consultation or a detailed quote for your property. Let Zedexfire help you secure your future.



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
