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


export default function FireSprinklerGurgaon() {


 const fireClassesRef = useRef(null);  

  const scrollToFireClasses = () => {
    if (fireClassesRef.current) {
      fireClassesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

     const passSteps = [
    {
      step: "The Haryana Fire and Emergency Services Act, 2022 ",
      description: " This Act mandates the installation of suppression systems in specified buildings, particularly high-rises (residential above 16.5m, educational/institutional above 9m) and large special buildings (over 500 sq m floor area).",
      icon: <Hand className="w-6 h-6 text-red-600" />
    },
    {
      step: "National Building Code (NBC) Part IV",
      description: " Provides comprehensive guidelines for fire protection in buildings.",
      icon: <Target className="w-6 h-6 text-red-600" />
    },
    {
      step: "Indian Standards (IS 15105:2021)",
      description: " The code of practice for design and installation of fixed automatic sprinkler fire extinguishing systems.",

      icon: <MousePointerClick className="w-6 h-6 text-red-600" />
    },
    {
      step: "NFPA 13",
      description: " The global standard for the installation of sprinkler systems, widely referenced.",

      icon: <MousePointerClick className="w-6 h-6 text-red-600" />
    },
    
    
  ];


  const usageRecommendations = [
    {
      title: "Zedexfire's end-to-end services include:",
      icon: <Home className="w-7 h-7 text-red-700" />,
      points: [
        "Precision Design & Installation: Our expert engineers meticulously design the system based on your property's specific hazards, occupancy, and Gurugram's regulatory requirements. Our certified technicians then execute precise, code-compliant installation.",
"Comprehensive Annual Maintenance Contracts (AMCs): Regular inspections and testing are paramount. Our AMCs cover",
"Visual Inspections: Checking for physical damage, corrosion, leaks, or obstructions.",
"Pressure & Flow Testing: Verifying adequate water pressure and flow rates throughout the system.",
"Valve Checks: Ensuring all control and alarm valves are in their proper positions and function correctly.",
"Fire Pump Testing: Regular testing of jockey, main, and standby pumps to ensure they activate as required.",
"Component Integrity: Inspecting sprinkler heads for damage or paint, checking piping for integrity, and verifying alarm functionality.",
"Documentation: Meticulous record-keeping for all inspections, tests, and maintenance activities, crucial for compliance.",
"Prompt Repairs & Upgrades: We quickly diagnose and resolve any issues, from minor repairs to major component replacements. We also provide expert advice on system upgrades to meet evolving safety standards."
        
      ]
    },
    {
      title: "Why Gurugram Chooses Zedexfire for Fire Sprinkler Systems",
      icon: <Wrench className="w-7 h-7 text-red-700" />,
      points: [
     "Partnering with Zedexfire means investing in peace of mind and the highest standards of safety",
     "Trusted by Leading Organizations: Our proven track record of safeguarding prominent clients such as Reliance, DLF, Apollo Hospitals, ITC, JLL, Honda, and Fortis Healthcare demonstrates our unwavering commitment to excellence and reliability in fire safety solutions.",
     "Hyper-Local Expertise: We possess a deep understanding of Gurugram's unique building types, local challenges, and the nuances of the Haryana Fire and Emergency Services Act.",
     "Comprehensive Solutions: From initial consultation and custom design to the supply of ISI-certified products, professional installation, proactive maintenance, and full compliance assistance, we offer end-to-end fire sprinkler solutions.",
     "Highly Skilled & Dedicated Team: Our professionals are meticulously trained and experienced in the latest fire safety technologies, ensuring precision and reliability in every project.",
     "Commitment to Quality: We use only top-grade, ISI-certified components and adhere to the strictest installation and maintenance protocols."


        
      ]
    },
     
  ];


  const fireClasses = [
    {
      class: 'A',
      title: 'Wet Pipe Sprinkler Systems',
      icon: <Flame className="w-5 h-5" />,
      description: ' The most common and reliable type. Pipes are constantly filled with pressurized water, allowing for immediate discharge upon sprinkler activation. Ideal for environments where temperatures remain above freezing, common in Gurugram offices, retail, and residential buildings.',
      
    },
    {
      class: 'B',
      title: 'Dry Pipe Sprinkler Systems',
      icon: <Fuel className="w-5 h-5" />,
      description: 
     ' Used in unheated areas (like parking garages or unconditioned warehouses) where pipes might freeze. These systems contain pressurized air or nitrogen; when a sprinkler activates, the air escapes, allowing water to flow.',
    
    },
    {
      class: 'C',
      title: 'Pre-Action Sprinkler Systems',
      icon: <Zap className="w-5 h-5" />,
      description: 
       
     ' Designed for environments sensitive to water damage (e.g., data centers, server rooms, museums, operation theaters). These systems require a two-step activation: a separate fire detection system (like a smoke detector) must trigger, and then a sprinkler head must activate due to heat, before water is released.',
       
    
    },
    {
      class: 'D',
      title: 'Deluge Sprinkler Systems',
      icon: <Factory className="w-5 h-5" />,
      description: 'Used in high-hazard areas where rapid fire spread is a concern (e.g., aircraft hangars, chemical storage). All sprinkler heads are open, and a deluge valve releases water simultaneously through all heads when the system detects a fire, providing a massive water discharge.',
      
    },
   
  ];



const extinguishers = [
  {
    name: "Water Supply",
    mechanism: " Can be from a municipal source, dedicated water storage tanks, or even natural sources, ensuring continuous water availability.",
    
    icon: <WaterIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Fire Pump(s)",
    mechanism: " (Jockey, Main, Standby) Essential for maintaining pressure and ensuring adequate water flow, especially for larger Gurugram buildings.",
   
    icon: <FoamIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Piping Network",
    mechanism: " A robust system of pipes (e.g., galvanized steel) designed to deliver water to all protected areas.",
    
    icon: <DCPIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Sprinkler Heads",
    mechanism: " The most visible part, each containing a heat-sensitive element (glass bulb or fusible link) that activates independently when a predetermined temperature is reached, discharging water over the fire area. Various types include pendant, upright, sidewall, and concealed.",
    
    icon: <CO2Icon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Control Valves",
    mechanism: " Crucial for isolating sections for maintenance or in emergencies. Indicating type valves (like OS&Y) provide a visual indication of their open/closed status.",
    
    icon: <CO2Icon className="w-6 h-6 text-red-600" />
  },
 
  {
    name: "Alarm Valve & Water Flow Alarm",
    mechanism: " Detects water flow, activating a local bell (water motor gong) and/or sending a signal to the Fire Alarm Control Panel.",
    
    icon: <CO2Icon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Fire Department Connection (FDC)",
    mechanism: " An external connection allowing the Gurugram Fire Department to pump additional water into the system, supplementing the supply.",
    
    icon: <CO2Icon className="w-6 h-6 text-red-600" />
  },
 
  {
    name: "System Air Vents & Drains",
    mechanism: " Important for preventing trapped air (which can cause corrosion and false alarms in wet systems) and for draining the system during maintenance.",
    
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
Fire Sprinkler System in Gurugram : Your Ultimate Guide to Active Fire Protection | Zedexfire



              </h1>
              <p className="text-sm text-red-50 mb-8">

Gurugram, a city of towering ambition and rapid development, demands the highest standards of safety for its myriad commercial complexes, residential high-rises, and industrial zones. While fire extinguishers tackle minor blazes and alarms provide crucial warnings, nothing offers a more immediate and effective defense against rapidly spreading fires than a well-designed Fire Sprinkler System. At Zedexfire, we specialize in providing state-of-the-art fire sprinkler solutions in Gurugram, ensuring robust, compliant, and reliable active fire protection for your property.


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
The Indispensable Role of Fire Sprinklers in Gurugram's Landscape


                                    </h2>
                                    <div className="max-w-4xl mx-auto">
          <div className="  prose prose-lg prose-red  text-justify md:text-left">
            <p>
  In a densely populated and vertically growing city like Gurugram, where minutes can mean the difference between containment and catastrophe, automatic fire sprinkler systems are vital. They are engineered to detect and suppress fires at their earliest stages, drastically minimizing damage, saving lives, and protecting property. According to statistics, fires in sprinkler-equipped buildings are contained to the room of origin over 90% of the time, making them a cornerstone of modern fire safety.


            </p>
            <p className=' py-3'>
          Beyond their immediate life-saving capabilities, a compliant fire sprinkler system is a mandatory requirement for many large and high-risk buildings under the Haryana Fire and Emergency Services Act, 2022. Non-compliance carries severe legal and financial penalties, underlining the necessity of professional installation and maintenance.

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
 Understanding Fire Sprinkler Systems : Types & Core Components

 </h2>
      <p className=" text-sm text-justify md:text-lg text-gray-700">
A fire sprinkler system is a sophisticated network designed for automatic fire detection and suppression. Zedexfire offers a range of systems, expertly tailored to the specific needs of your Gurugram property:


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
    Key Components of a Reliable Fire Sprinkler System :

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
   Compliance with Haryana Fire Act 2022: Your Legal Framework

        </h2>
        <p className=" text-sm text-center text-gray-600 mb-6">
Implementing a fire sprinkler system in Gurugram is heavily guided by regulations. Zedexfire ensures your installation adheres to:

 </p>
    <div className="flex flex-col lg:flex-row items-start pt-12 gap-12 mb-20">
    
      {/* Image Section - Left Side */}
     

      {/* Content Section - Right Side */}
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
        A functional and approved fire sprinkler system is critical for obtaining your building's Fire No Objection Certificate (NOC), which is valid for up to 5 years. Furthermore, the annual Self-Declaration Certificate, confirming the operational status of your fire fighting system, relies heavily on a well-maintained sprinkler system.

     </p>
      </div>
    </div>

    {/* Extinguisher Types Section */}
    <div className="max-w-4xl mx-auto">
      <h2 className="  text-2xl md:text-3xl font-bold text-red-700 mb-8 text-center">
 Professional Installation & Critical Maintenance : Ensuring Reliability

      </h2>
      <p className=' pb-3  text-sm'>

      While highly effective, a fire sprinkler system must be designed and maintained by qualified professionals to ensure flawless operation. Common issues like corrosion within pipes, leaking heads, pipe bursts (often due to freezing in unheated areas), faulty valves, or lack of proper water pressure can compromise effectiveness.


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
       Secure Your Gurugram Property with Advanced Fire Sprinkler Protection.

            </h2>
            <p className=" text-sm   mb-4 text-red-50">
      Don't underestimate the power of an automatic fire sprinkler system. Partner with Zedexfire, your reliable expert for fire sprinkler systems in Gurugram/Gurgaon, and invest in the ultimate active defense against fire.


            </p>
            <p className=" text-sm   mb-8 text-red-50">
    Contact us today for a personalized consultation or a detailed quote for your property. Let Zedexfire help you build a safer tomorrow.



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
