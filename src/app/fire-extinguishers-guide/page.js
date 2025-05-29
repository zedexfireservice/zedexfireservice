// app/blog/fire-extinguisher-guide/page.tsx
import { Flame, AlertTriangle, Download, Phone, Zap, Fuel, Utensils, Factory, ChevronRight, Shield, FireExtinguisherIcon, AlertCircleIcon, ShieldCheckIcon, FlaskConicalOffIcon, WrenchIcon, CalendarCheck2Icon, ClipboardCheckIcon, LightbulbOffIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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



export default function FireExtinguisherGuide() {

     const passSteps = [
    {
      step: "Pull",
      description: "Pull the pin, breaking the tamper seal.",
      icon: <Hand className="w-6 h-6 text-red-600" />
    },
    {
      step: "Aim",
      description: "Aim the nozzle or hose at the base of the fire.",
      icon: <Target className="w-6 h-6 text-red-600" />
    },
    {
      step: "Squeeze",
      description: "Squeeze the operating handle to release the extinguishing agent.",
      icon: <MousePointerClick className="w-6 h-6 text-red-600" />
    },
    {
      step: "Sweep",
      description: "Sweep the nozzle from side to side at the base of the fire until it appears to be out.",
      icon: <Repeat className="w-6 h-6 text-red-600" />
    }
  ];

  const safetyNote = `Only attempt to extinguish a small fire if:
- You have the right type of extinguisher.
- The fire is small and contained.
- You have a clear escape route.
- You are confident in your ability.
If in doubt, evacuate immediately and call emergency services.`;

  const usageRecommendations = [
    {
      title: "For Homes",
      icon: <Home className="w-7 h-7 text-red-700" />,
      points: [
        "Kitchen : A small ABC powder fire extinguisher is a must-have, along with a fire blanket for small cooking fires.",
        "Living Areas/Bedrooms: An ABC dry chemical powder extinguisher is versatile for general combustibles.",
        "Garage/Workshop: Consider an ABC extinguisher, especially if you store flammable liquids."
      ]
    },
    {
      title: "For Businesses in India",
      icon: <Wrench className="w-7 h-7 text-red-700" />,
      points: [
        "Offices & Retail : Primarily ABC powder extinguishers and potentially CO2 extinguishers for server rooms or electrical panels.",
        "Restaurants & Commercial Kitchens: Wet Chemical (Class K) extinguishers are non-negotiable. Also consider CO2 for electrical equipment and ABC for general use.",
        "Manufacturing & Industrial Facilities: A thorough fire risk assessment is crucial. You’ll likely need a combination of ABC, foam, and specialized Class D extinguishers depending on materials used. Compliance with BIS standards and local fire safety regulations is paramount.",
        "Data Centers & Server Rooms: CO2 or Clean Agent extinguishers are highly recommended to protect sensitive electronics."
      ]
    }
  ];


  const fireClasses = [
    {
      class: 'A',
      title: 'Ordinary Combustibles',
      icon: <Flame className="w-5 h-5" />,
      description: 'Wood, paper, cloth, plastic, rubbish',
      examples: 'Wastepaper baskets, furniture',
      extinguisher: 'Water, Foam, Dry Chemical',
      color: 'bg-orange-100 border-orange-300'
    },
    {
      class: 'B',
      title: 'Flammable Liquids',
      icon: <Fuel className="w-5 h-5" />,
      description: 'Petrol, kerosene, paints, cooking oil (excluding fats)',
      examples: 'Garage spills, industrial solvents',
      extinguisher: 'Foam, CO2, Dry Chemical',
      color: 'bg-blue-100 border-blue-300'
    },
    {
      class: 'C',
      title: 'Electrical Equipment',
      icon: <Zap className="w-5 h-5" />,
      description: 'Energized appliances, wiring, fuse boxes',
      examples: 'Electrical panels, machinery',
      extinguisher: 'CO2, Dry Chemical',
      color: 'bg-yellow-100 border-yellow-300'
    },
    {
      class: 'D',
      title: 'Combustible Metals',
      icon: <Factory className="w-5 h-5" />,
      description: 'Magnesium, titanium, potassium, sodium',
      examples: 'Industrial manufacturing',
      extinguisher: 'Specialty Dry Powder',
      color: 'bg-purple-100 border-purple-300'
    },
    {
      class: 'K',
      title: 'Cooking Fats',
      icon: <Utensils className="w-5 h-5" />,
      description: 'Oils, animal fats, vegetable fats',
      examples: 'Commercial kitchens, fryers',
      extinguisher: 'Wet Chemical',
      color: 'bg-red-100 border-red-300'
    }
  ];



const extinguishers = [
  {
    name: "Water Extinguishers (Stored Pressure Type)",
    mechanism: "Cools the burning material by absorbing heat, effectively reducing its temperature below the ignition point.",
    bestFor: "Class A fires (wood, paper, textiles).",
    avoid: "Electrical fires (risk of electrocution) and flammable liquids/gases (can spread the fire).",
    uses: "Common in offices, schools, and general public areas for ordinary combustibles.",
    icon: <WaterIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Foam Extinguishers (AFFF - Aqueous Film-Forming Foam)",
    mechanism: "Creates a blanket over the burning liquid, cutting off the oxygen supply and also providing a cooling effect.",
    bestFor: "Class A and Class B fires (flammable liquids).",
    avoid: "Electrical fires (conductive) and Class K fires (less effective on hot cooking fats).",
    uses: "Ideal for workshops, garages, and areas where flammable liquids are stored.",
    icon: <FoamIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Dry Chemical Powder (DCP) Extinguishers (ABC Powder Extinguishers)",
    mechanism: "Interrupts the chemical reaction of the fire. The fine powder smothers the flames and forms a barrier between the fuel and oxygen.",
    bestFor: "Class A, B, and C fires. This makes them extremely versatile.",
    avoid: "Sensitive electronic equipment (can cause corrosion and damage), and typically not recommended for Class K due to cleanup and potential reignition.",
    uses: "The most common type for homes, offices, vehicles, and general industrial use due to their broad application. Look for BIS-certified fire extinguishers for reliability.",
    icon: <DCPIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Carbon Dioxide (CO2) Extinguishers",
    mechanism: "Displaces oxygen, creating an inert atmosphere, and also provides a significant cooling effect.",
    bestFor: "Class B (flammable liquids) and Class C (electrical) fires. They leave no residue, making them ideal for sensitive equipment.",
    avoid: "Class A fires (can reignite if not fully extinguished), and should be used with caution in confined spaces due to oxygen displacement.",
    uses: "Server rooms, electrical panels, laboratories, commercial kitchens, and areas with valuable electronics.",
    icon: <CO2Icon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Wet Chemical Extinguishers",
    mechanism: "Creates a soapy foam blanket that cools the fire and prevents reignition by forming a barrier over the hot cooking fats.",
    bestFor: "Class K fires (cooking oils and fats).",
    avoid: "",
    uses: "Commercial kitchens, restaurants, and food processing units.",
    icon: <WetIcon className="w-6 h-6 text-red-600" />
  },
  {
    name: "Clean Agent Extinguishers (e.g., HFC-227ea, FK-5-1-12)",
    mechanism: "Chemical interruption of the fire triangle, with minimal residue and safe for sensitive electronics.",
    bestFor: "Class A, B, and C fires, especially in environments where water or powder would cause significant damage.",
    avoid: "",
    uses: "Data centers, telecommunication facilities, museums, art galleries, and clean rooms. These are premium solutions for critical assets.",
    icon: <CleanIcon className="w-6 h-6 text-red-600" />
  }
];

  return (
    <div className="bg-white">
      {/* Premium Hero Section */}
      <section className="relative h-screen  md:h-[80vh] bg-gradient-to-r from-red-900 to-red-700">
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto h-full flex flex-col justify-center px-6">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-red-100 bg-red-800/50 rounded-full backdrop-blur-sm">
                FIRE SAFETY ESSENTIALS
              </span>
              <h1 className="text-3xl font-bold text-white leading-tight mb-4">
The Ultimate Guide to Fire Extinguishers: Types, Uses, and Essential Safety for Every Indian Home & Business
              </h1>
              <p className="text-sm text-red-50 mb-8">
Protect your loved ones and assets. Discover the right fire extinguisher for every fire class, learn proper usage, and find expert fire safety tips for homes and businesses in India with Zedex Fire.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-red-700 font-medium rounded-lg hover:bg-gray-100 transition-all shadow-md">
                  <Download className="w-5 h-5" />
                  Download Product Catalogue
                </button>
                <button className="flex items-center gap-2 px-6 py-3 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all shadow-md">
                  Read Case Studies
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Exact Content */}

         <section className="py-12 bg-white mt-24">
                    <div className="container mx-auto ">
                        <div className="flex justify-around flex-col lg:flex-row items-center">

                            <div className="lg:w-5/12 w-full">
                                <div className="relative w-full    rounded overflow-hidden">

                                    <img
                                        src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1748510430/WhatsApp_Image_2025-05-29_at_13.33.00_11zon_pyefty.webp"
                                        alt="Fire VESDA System"

                                        className=" w-full h-full rounded-xl object-center  object-cover "
                                    />

                                </div>
                            </div>

                            <div className="lg:w-6/12 w-full mt-8 lg:mt-0">
                                <div className="space-y-3">
                                    <h2 className=" text-2xl text-center md:text-left md:text-3xl font-bold text-gray-800">
Introduction: Your First Line of Defence Against Fire
                                    </h2>
                                    <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-red">
            <p>
              Imagine a small spark turning into a roaring inferno in mere seconds. In such critical moments, having the right tools can make all the difference. While professional firefighters are always the ultimate solution for large blazes, a fire extinguisher is your crucial first line of defence, capable of containing small fires before they escalate into dangerous situations.
            </p>
            <p>
              But with various types and sizes available, how do you choose the right one? And more importantly, how do you use it effectively? At <strong>Zedex Fire</strong>, your trusted partner in fire safety solutions across India, we believe that knowledge is power. This comprehensive guide will equip you with everything you need to know about fire extinguishers, ensuring you're prepared to protect your home, business, and loved ones.
            </p>
          </div>
        </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
    

      {/* Fire Classes Section - Exact Content */}
  <section className="bg-white py-20">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto mb-16 text-center">
      <h2 className="text-3xl font-bold flex items-center justify-center gap-3 text-red-700 mb-4">
        <AlertTriangle className="w-8 h-8 text-red-700" />
        Understanding Fire Classes: Not All Fires Are Created Equal
      </h2>
      <p className="text-lg text-gray-700">
        Before we dive into extinguishers, it’s vital to understand that fires are categorized based on the fuel they consume. Using the wrong type of extinguisher on a specific fire class can be ineffective or even dangerous. The most common fire classes are:
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
              <strong className="text-red-700">Materials:</strong> {item.description}
            </p>
            <p>
              <strong className="text-red-700">Examples:</strong> {item.examples}
            </p>
            <p>
              <strong className="text-red-700">Extinguisher Type:</strong> {item.extinguisher}
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
      <h2 className="text-3xl font-bold flex items-center justify-center gap-3 text-red-700 mb-4">
        <FireExtinguisherIcon className="w-8 h-8 text-red-700" />
        Types of Fire Extinguishers and How They Work
      </h2>
      <p className="text-lg text-gray-700">
        Knowing the fire classes helps you choose the correct fire extinguisher type. Here are the most common types available in India and their applications:
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
            <li><strong>Mechanism:</strong> {item.mechanism}</li>
            <li><strong>Best for:</strong> {item.bestFor}</li>
            {item.avoid && <li><strong>Avoid:</strong> {item.avoid}</li>}
            <li><strong>Key Uses:</strong> {item.uses}</li>
          </ul>
          <div className="absolute -bottom-2 -right-2 opacity-10 text-[5rem] font-extrabold text-red-300 pointer-events-none group-hover:opacity-20 transition">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




<section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            How to Use a Fire Extinguisher: The PASS Method
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Even with the right extinguisher, knowing how to use it properly is critical. Remember the PASS method:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
          {passSteps.map(({ step, description, icon }) => (
            <div key={step} className="flex items-start gap-4 p-4 border border-red-200 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="bg-red-100 p-3 rounded-lg">{icon}</div>
              <div>
                <h3 className="font-semibold text-red-700 mb-1">{step}</h3>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto mb-12 p-6 bg-red-50 border-l-4 border-red-500 text-red-800 text-sm whitespace-pre-line rounded shadow">
          <strong className="block mb-2">Important Safety Note:</strong>
          {safetyNote}
        </div>

        <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">
          Choosing the Right Fire Extinguisher for Your Needs
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {usageRecommendations.map(({ title, icon, points }) => (
            <div key={title} className="p-6 border border-red-200 rounded-2xl shadow hover:shadow-lg transition bg-gradient-to-br from-red-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-full border border-red-100 shadow-sm">{icon}</div>
                <h3 className="text-lg font-semibold text-red-800">{title}</h3>
              </div>
              <ul className="list-disc list-outside px-5 text-gray-700 space-y-2 text-sm">
                {points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>



<section className="bg-red-50 py-20">
  <div className="container mx-auto px-6 max-w-6xl">
    
    {/* Pro Tip Section */}
    <div className="bg-white border-l-4 border-red-600 shadow-md p-6 rounded-lg mb-12 flex items-start gap-4">
      <LightbulbOffIcon className="w-6 h-6 text-red-600 mt-1" />
      <p className="text-gray-800 text-md">
        <strong className="text-red-700">Pro Tip:</strong> Consult with fire safety experts like <strong>Zedex Fire</strong> for a professional assessment and tailored solutions. We specialize in understanding the unique needs of Indian homes, offices, and industries.
      </p>
    </div>

    {/* Maintenance & Inspection */}
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center gap-3">
        <ClipboardCheckIcon className="w-7 h-7 text-red-700" />
        Fire Extinguisher Maintenance & Inspection
      </h2>
      <p className="text-gray-700 mb-6">
        A fire extinguisher is only effective if it works when needed. Follow these essential maintenance practices:
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl p-6 shadow border border-red-100">
          <CalendarCheck2Icon className="w-6 h-6 text-red-600 mb-3" />
          <h3 className="font-semibold text-red-700 mb-2">Monthly Visual Check</h3>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
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
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center gap-3">
        <ShieldCheckIcon className="w-7 h-7 text-red-700" />
        Why Choose Zedex Fire?
      </h2>
      <p className="text-gray-700 mb-4">
        <strong>Zedex Fire</strong> is your trusted partner for high-quality fire protection solutions across India:
      </p>
      <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
        <li>BIS-certified fire extinguishers that meet national safety standards.</li>
        <li>Expert consultation for homes, commercial spaces, and industrial sectors.</li>
        <li>End-to-end service: selection, installation, maintenance & compliance support.</li>
        <li>Reliable after-sales servicing and responsive customer care.</li>
      </ul>
    </div>

    {/* Conclusion */}
    <div className="text-center bg-white p-8 rounded-xl shadow border border-red-100">
      <AlertCircleIcon className="w-8 h-8 text-red-600 mx-auto mb-4" />
      <h3 className="text-2xl font-semibold text-red-700 mb-3">Conclusion: Be Prepared, Stay Safe</h3>
      <p className="text-gray-700 text-md max-w-2xl mx-auto">
        A fire extinguisher is a small investment with life-saving potential. Learn your fire classes, use the right extinguisher, and follow the PASS method to safeguard your property and lives. Don’t wait for a crisis—<strong className="text-red-700">act today</strong>.
      </p>
    </div>
  </div>
</section>
      {/* Professional CTA */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Protect What Matters Most</h2>
            <p className="text-xl mb-8 text-red-50">
              Zedex Fire provides certified fire protection solutions for businesses and homes across India. Our experts are ready to assess your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-red-700 font-medium rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-md">
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-white/30 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 shadow-md">
                Download Fire Safety Guide
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Floating Emergency Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="tel:18001234567" 
          className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-full shadow-lg hover:bg-red-700 transition-all animate-pulse"
        >
          <Phone className="w-5 h-5" />
          <span>Emergency Call</span>
        </a>
      </div>
    </div>
  );
}