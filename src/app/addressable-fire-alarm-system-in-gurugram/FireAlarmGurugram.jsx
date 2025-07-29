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


export default function FireAlarmGurugram() {


 const fireClassesRef = useRef(null);  

  const scrollToFireClasses = () => {
    if (fireClassesRef.current) {
      fireClassesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


     const passSteps = [

    {
      step: "The Haryana Fire and Emergency Services Act, 2022",
      description: "This updated legislation sets forth detailed requirements for fire prevention and life safety measures for various building types in Haryana, including Gurugram.",
      icon: <Hand className="w-6 h-6 text-red-600" />
    },

    {
      step: "National Building Code (NBC) Part IV",
      description: "Provides comprehensive guidelines for fire protection in buildings.",
      icon: <Target className="w-6 h-6 text-red-600" />
    },
   

    {
      step: "Indian Standards (IS 2189)",
      description: "Specifies the requirements for automatic fire detection and alarm systems.",

      icon: <MousePointerClick className="w-6 h-6 text-red-600" />
    },
     {
      step: "NFPA 72",
      description: "The globally recognized National Fire Alarm and Signaling Code for installation, inspection, testing, and maintenance.",
      icon: <Target className="w-6 h-6 text-red-600" />
    },

    
    
    
  ];


  const usageRecommendations = [

    {
      title: "Installation, Maintenance & Addressing Common Alarm Issues",
      icon: <Home className="w-7 h-7 text-red-700" />,
      points: [

        "Precision Installation : Proper placement and correct wiring are paramount to prevent common issues like false alarms or system failures. Our meticulous approach ensures optimal performance.",

        "Comprehensive Maintenance (AMCs) : Regular maintenance isn't just a recommendation; it's essential for reliability and compliance. Our Annual Maintenance Contracts (AMCs) proactively address common problems" ,
        "Preventing False Alarms : Through proper design, regular cleaning, and sensitivity adjustments, we minimize nuisance alarms often caused by dust, steam, or improper installation.",
        "Battery Management : Routine checks and timely replacements of backup batteries ensure your system remains operational during power outages."
        ,
        "Faulty Wiring/Components : Our inspections identify and rectify issues with wiring, sensors, and control panels before they become critical failures.",
        "Aging Systems : When to consider upgrades or replacements, and how Zedexfire advises.",
        "User Training : We provide guidance and resources for Gurugram occupants/staff on basic system operation and emergency protocols.",
        "Troubleshooting & Rapid Response : We quickly diagnose and resolve any issues, ensuring minimal downtime. Our teams are equipped to handle common trouble signals and complex system errors."
      ]
    },

     {
      title: "Why Gurugram Chooses Zedexfire for Fire Alarm Systems",
      icon: <Wrench className="w-7 h-7 text-red-700" />,
      points: [
     "Choosing Zedexfire means partnering with a leader committed to unparalleled safety and service"
,
"Trusted by Leading Organizations: Our proven track record of safeguarding prominent clients such as Reliance, DLF, Apollo Hospitals, ITC, JLL, Honda, and Fortis Healthcare demonstrates our unwavering commitment to excellence and reliability in fire safety solutions.",
"Hyper-Local Expertise: We are deeply ingrained in Gurugram's fabric, understanding its specific building codes, unique risks in different sectors (e.g., Cyber City, Udyog Vihar, Sohna Road), and local emergency protocols.",
"Comprehensive Solutions: From initial design and supply to expert installation, diligent maintenance, and full compliance assistance, we offer end-to-end fire alarm system services.",
"ISI Certified Products: We supply only the highest quality, ISI-certified products, ensuring the reliability and effectiveness of every component in your system.",
"Dedicated & Highly Skilled Professionals: Our professionals are meticulously trained and experienced in the latest fire safety technologies and Gurugram's regulatory nuances, ensuring a seamless and reliable experience."
 ]
    },

    {
      title: "Cost Considerations for Fire Alarm Systems in Gurugram",
      icon: <Wrench className="w-7 h-7 text-red-700" />,
      points: [
     "The investment in a fire alarm system varies based on several factors, including the type of system (conventional, addressable, wireless), the size and complexity of your Gurugram property, the number of detection devices required, and any additional integrations or monitoring services. While costs differ, investing in a high-quality fire alarm system is not an expense but a crucial investment that protects lives, property, and ensures business continuity, potentially reducing insurance premiums and avoiding regulatory penalties."
,
  ]
    },
     
   
     
  ];


  const fireClasses = [
    {
      class: 'A',
      title: 'Conventional Fire Alarm Systems',
      icon: <Flame className="w-5 h-5" />,
      description: 
      
<>

<ul className=' list-disc  ps-4'>
    <li>
      Ideal for smaller commercial spaces or residential buildings, these systems divide your property into zones. When an alarm triggers, it indicates a fire within a specific zone.


    </li>

  
</ul>
  
</>
      , 
      
    },

    {
      class: 'B',
      title: 'Addressable Fire Alarm Systems',
      icon: <Fuel className="w-5 h-5" />,
      description:

   <>

<ul className=' list-disc  ps-4'>
    <li>

       Perfect for Gurugram's larger corporate offices, high-rise apartments, and sprawling commercial complexes. These systems pinpoint the exact location of a fire, allowing for faster, more precise responses.

    </li>

</ul>
  
</>
     ,
    
    },

    {
      class: 'C',
      title: '  Wireless Fire Alarm Systems',
      icon: <Zap className="w-5 h-5" />,
      description: 
       
     <>

<ul className=' list-disc  ps-4'>
    <li>
    
   Offering flexibility and minimal disruption, wireless systems are excellent for existing buildings, heritage structures, or temporary setups where wiring is challenging. They reduce installation time and preserve aesthetics.

    </li>

     
 
</ul>
  
</>
     ,
       
    
    },

   
   
  ];



const extinguishers = [
  {
    name: "Fire Alarm Control Panel (FACP)",
    mechanism: " The 'brain' of the system, monitoring all detectors and initiating alarms.",
    
    icon: <WaterIcon className="w-6 h-6 text-red-600" />
  },

  {
    name: "Smoke Detectors",
    mechanism: " Vital for early warning, available as photoelectric (for smoldering fires, common in offices/residences) or beam detectors (for large, open spaces like warehouses).",
   
    icon: <FoamIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Heat Detectors",
    mechanism: " Respond to rapid temperature increases or fixed high temperatures, suitable for kitchens or areas where smoke detection might be challenging.",
    
    icon: <DCPIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Manual Call Points (MCPs)",
    mechanism: " Strategically placed 'break glass' units for manual fire reporting.",
    
    icon: <CO2Icon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Notification Appliances",
    mechanism: "Sounders (hooters), strobe lights, and sometimes voice evacuation systems to alert occupants and guide safe evacuation.",
    
    icon: <CO2Icon className="w-6 h-6 text-red-600" />
  },
 
  {
    name: "Ancillary Devices",
    mechanism: "Include gas leakage detectors, duct smoke detectors (for HVAC systems), and interfaces with other building management systems.",
    
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

Fire Alarm System in Gurugram : Your Complete Guide to Safety & Compliance | Zedexfire

              </h1>
              <p className="text-sm text-red-50 mb-8">

Gurugram, a thriving hub of innovation and growth, pulses with corporate towers, expansive residential complexes, and dynamic commercial spaces. While this rapid development fuels prosperity, it also amplifies the critical need for robust fire safety measures. At Zedexfire, we understand that an effective fire alarm system in Gurugram isn't merely an installation; it's the bedrock of security, ensuring early detection and protecting lives and valuable assets.


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
                                        src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747899349/FAS_phone_view_sk73ws.webp"
                                        alt="Fire VESDA System"

                                        className=" w-full h-full rounded-xl object-center  object-cover "
                                    />

                                </div>
                            </div>

                            <div  className="lg:w-6/12 w-full mt-8 lg:mt-0">
                                <div className="space-y-3">
                                    <h2 className=" text-2xl text-center md:text-left md:text-3xl font-bold text-gray-800">

Why a Reliable Fire Alarm System is Non-Negotiable in Gurugram's Landscape


                                    </h2>

                                    <div className="max-w-4xl mx-auto">
          <div className="  prose prose-lg prose-red  text-justify md:text-left">
            <p>

The city's rapid expansion, coupled with its dense population and diverse building types, presents unique fire safety challenges. Recent incidents across Gurugram highlight the devastating consequences of delayed detection. A well-designed and maintained fire alarm system is your first line of defense, providing crucial minutes for evacuation and emergency response.


            </p>
            <p className=' py-3'>

Beyond immediate safety, compliance is paramount. The Haryana Fire and Emergency Services Act, 2022, mandates stringent fire safety measures, including advanced alarm systems. Non-adherence can lead to severe penalties, operational shutdowns, and significant financial repercussions for businesses and property owners alike.

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
Understanding Fire Alarm Systems : Types and Core Components

 </h2>
      <p className=" text-sm text-justify md:text-lg text-gray-700">

Choosing the right fire alarm system for your Gurugram property requires understanding the options. Zedexfire offers comprehensive solutions, tailored to your specific needs 


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
Key Components that Make Up a Robust System 

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
Fire Alarm System Regulations & Compliance in Gurugram

        </h2>
        <p className=" text-sm text-center text-gray-600 mb-6">
Adhering to local and national fire safety codes is critical. Zedexfire ensures your system is fully compliant with

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
 For high-rise buildings (above 16.5m residential, above 9m educational/institutional) and special buildings (over 500 sq m floor area), the Act mandates a Fire No Objection Certificate (NOC). While a full NOC is valid for up to 5 years, an annual Self-Declaration Certificate verifying the good working condition of your fire fighting system, including the fire alarm, is now a crucial yearly requirement. Zedexfire’s expertise ensures your system meets these ongoing compliance needs. Furthermore, the Act mandates the appointment of a Fire Safety Officer in certain buildings to oversee fire safety measures.

     </p>
      </div>
    </div>

    {/* Extinguisher Types Section */}
    <div className="max-w-4xl mx-auto">
      <h2 className="  text-2xl md:text-3xl font-bold text-red-700 mb-8 text-center">
Installation, Maintenance & Addressing Common Alarm Issues

      </h2>
      <p className=' pb-3 text-center  text-sm'>

   A fire alarm system is an intricate network that requires expert handling. Our certified professionals excel in

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
 Secure Your Gurugram Property with a State-of-the-Art Fire Alarm System.


            </h2>
            <p className=" text-sm   mb-4 text-red-50">
Don't leave the safety of your Gurugram property to chance. Partner with Zedexfire, your reliable expert for fire alarm systems in Gurugram/Gurgaon, and take a decisive step towards creating a safer, more secure environment for your family, employees, or tenants.



            </p>
            <p className=" text-sm   mb-8 text-red-50">
Contact us today for a personalized consultation or a detailed quote for your property. Let Zedexfire help you protect what matters most.



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
