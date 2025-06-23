 "use client"
import { useState } from 'react';
import { 
  FlameAlert, ShieldCheck, Building, AlarmClock, 
  FileText, Zap, RadioTower, BellElectric, 
  Thermometer, Eye, ChevronRight, 
  AlertCircle,
  AlertCircleIcon,
  BellElectricIcon,
  EyeClosed,
  ThermometerIcon,
  Download,
  PanelTop,
  Battery,
  AlertOctagon,
  LucideAlarmSmoke,
  BrainCircuit,
  Cpu,
  Send,
  Search,
  ShieldAlert,
  IndianRupee,
  ClipboardCheck,
  Building2,
  Wifi,
  MapPin,
  LayoutGrid,
  MapPinCheck,
  RadioTowerIcon,
  Wrench,
  Hammer,
  Lightbulb,
  ChevronDown,
  PhoneCall
} from 'lucide-react';
import Link from 'next/link';



export default function FireAlarmSystemBlogPage() {

     const coreDefinition = {

    title: "What is a Fire Alarm System? Your Complete Guide to Safety & Protection with Zedex Fire",
    title2:"Understanding the Core: What Exactly is a Fire Alarm System?",
    paragraphs: [
      "In today's world, where safety is paramount, a robust fire alarm system isn't just an option—it's an absolute necessity. Whether it's safeguarding your home, a bustling commercial establishment, or an industrial facility in Gurugram, Haryana, or the wider Delhi NCR region, a well-designed and maintained fire alarm system is your first line of defence against potential devastation. At Zedex Fire, we understand the critical importance of reliable fire detection systems. This comprehensive guide will demystify what a fire alarm system is, how it functions, and why partnering with an expert like Zedex Fire is crucial for your peace of mind and compliance.",

    ],
    para2:"A fire alarm system is an integrated network of electronic devices designed to detect the presence of fire or its early signs (smoke, heat, carbon monoxide) and alert occupants, initiating a response to mitigate danger. Its primary function is to provide early warning, allowing for safe evacuation and prompt intervention by emergency services, thereby minimizing property damage and, most importantly, saving lives. These sophisticated fire detection systems are engineered to operate continuously, monitoring designated areas 24/7 for any indicators of a fire hazard.",
    features: [
      { icon: <Thermometer size={16} />, text: "Heat detection" },
      { icon: <Eye size={16} />, text: "Smoke detection" },
      { icon: <BellElectric size={16} />, text: "Alert systems" }
    ]
  };

  // Benefits data
  const benefits = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Life Safety",
      content: "The most vital role. Early detection provides precious minutes for safe evacuation, preventing injury and fatalities.",
      color: "red"
    },
    {
      icon: <Building size={24} />,
      title: "Property Protection",
      content: "Prompt alerts enable quick fire suppression efforts, significantly reducing damage to buildings, assets, and critical infrastructure.",
      color: "orange"
    },
    {
      icon: <FileText size={24} />,
      title: "Regulatory Compliance",
      content: "In India, various building codes and fire safety regulations (e.g., National Building Code of India, local municipal bylaws) mandate the installation and maintenance of certified fire alarm systems for different types of establishments. Zedex Fire ensures your system adheres to all necessary compliance standards.",
      color: "blue"
    },
    {
      icon: <Zap size={24} />,
      title: "Business Continuity",
      content: "For commercial and industrial clients, a functional fire alarm system helps mitigate risks that could lead to costly downtime and operational disruptions.",
      color: "green"
    },
    {
      icon: <AlarmClock size={24} />,
      title: "Insurance Benefits",
      content: "Many insurance providers offer reduced premiums for properties equipped with advanced, well-maintained fire detection systems.",
      color: "purple"
    }
  ];

  // CTA data
  const ctaContent = {
    title: "Invest in Your Safety with Zedex Fire",
    description: "Whether it's safeguarding your home, a bustling commercial establishment, or an industrial facility in Gurugram, Haryana, or the wider Delhi NCR region, a well-designed and maintained fire alarm system is your first line of defence against potential devastation.",
    buttonText: "Contact Our Safety Experts"
  };

const detectionFeatures = [
  {
    icon: Thermometer,
    label: "Thermal Sensor Activation",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    icon: Eye,
    label: "Optical Smoke Detection",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    icon: BellElectric,
    label: "Automated Alarm Signaling",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
];

 const components = [
    {
      title: "1. Fire Alarm Control Panel (FACP)",
      description: "The Brain of the System: This central hub monitors input from all detection devices, processes signals, activates notification appliances, and transmits information to monitoring stations. Zedex Fire installs advanced FACPs that offer robust control and diagnostic capabilities.",
      icon: <BrainCircuit size={24} />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "2. Initiating Devices (Detectors)",
      description: "",
      icon: <LucideAlarmSmoke size={24} />,
      color: "bg-blue-100 text-blue-600",
      subtypes: [
        {
          name: "Smoke Detectors:",
          description: "Designed to detect smoke particles. Common types include:",
          items: [
            "Ionization Smoke Detectors: Sensitive to fast-flaming fires.",
            "Photoelectric Smoke Detectors: More effective for slow, smoldering fires."
          ]
        },
        {
          name: "Heat Detectors:",
          description: "Respond to abnormal increases in temperature.",
          items: [
            "Fixed Temperature Detectors: Activate when a pre-set temperature is reached.",
            "Rate-of-Rise Heat Detectors: Activate when the temperature increases rapidly."
          ]
        },
        {
          name: "Carbon Monoxide (CO) Detectors:",
          description: "Detect the presence of the odorless, colorless, and poisonous CO gas, often a byproduct of incomplete combustion."
        },
        {
          name: "Manual Call Points (Manual Pull Stations):",
          description: "Allow occupants to manually initiate an alarm by pulling a lever, providing a crucial human interface for early reporting."
        }
      ]
    },
    {
      title: "3. Notification Appliances:",
      description: "",
      icon: <AlertOctagon size={24} />,
      color: "bg-red-100 text-red-600",
      subtypes: [
        {
          name: "Sounders (Alarms):",
          description: "Produce loud audible signals (horns, bells) to alert occupants."
        },
        {
          name: "Strobes (Visual Alarms):",
          description: "Emit bright flashing lights, crucial for individuals with hearing impairments or in noisy environments."
        },
        {
          name: "Speakers/Voice Evacuation Systems:",
          description: "Provide clear, intelligible voice messages guiding occupants during an emergency, often used in large commercial or public buildings."
        }
      ]
    },
    {
      title: "4. Power Supplies:",
      description: "",
      icon: <Battery size={24} />,
      color: "bg-yellow-100 text-yellow-600",
      subtypes: [
        {
          name: "Primary Power:",
          description: "Typically drawn from the building's electrical system."
        },
        {
          name: "Secondary (Backup) Power:",
          description: "Batteries or generators ensure the system remains operational during power outages."
        }
      ]
    },
    {
      title: "5. Annunciators:",
      description: "Remote panels that display the status of the fire alarm system, often located near building entrances for emergency responders.",
      icon: <PanelTop size={24} />,
      color: "bg-green-100 text-green-600"
    }
  ];


   const steps = [
    {
      title: "Detection",
      description: "An initiating device (e.g., a smoke detector or heat detector) senses early signs of a fire. A person can also activate a manual call point.",
      icon: <Search size={24} />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Signal Transmission",
      description: "The activated device sends a signal to the Fire Alarm Control Panel (FACP).",
      icon: <Send size={24} />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Processing & Verification",
      description: "The FACP analyzes the signal. In advanced systems, it might verify the alarm to prevent false alarms.",
      icon: <Cpu size={24} />,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Alarm Activation",
      description: "If a true fire condition is confirmed, the FACP activates the notification appliances (sounders, strobes, voice evacuation) throughout the building.",
      icon: <AlarmClock size={24} />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Emergency Response Notification",
      description: "The FACP automatically transmits a signal to a central monitoring station or directly to the fire department (depending on system configuration and local regulations).",
      icon: <RadioTower size={24} />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "System Monitoring",
      description: "The FACP continuously monitors all components for faults, power failures, or disconnections, ensuring the system is always ready.",
      icon: <ShieldCheck size={24} />,
      color: "bg-green-100 text-green-600"
    }
  ];


   const systemTypes = [
    {
      title: "Conventional Fire Alarm Systems",
      description: "Divide a building into detection zones. When an alarm triggers, the panel indicates the zone, but not the exact device location. Ideal for smaller buildings.",
      icon: <LayoutGrid size={24} />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Addressable Fire Alarm Systems",
      description: "Each device has a unique 'address,' allowing the control panel to pinpoint the exact location of a fire or fault. Highly efficient for larger, more complex properties.",
      icon: <MapPin size={24} />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Wireless Fire Alarm Systems",
      description: "Utilize secure radio frequencies to connect devices, eliminating the need for extensive wiring. Offers flexibility, easier installation, and is ideal for heritage buildings or properties where wiring is challenging.",
      icon: <Wifi size={24} />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Intelligent/Analogue Addressable Systems",
      description: "These advanced systems continuously monitor detector levels and can 'learn' normal environmental conditions, significantly reducing false alarms and providing more precise fire indications.",
      icon: <BrainCircuit size={24} />,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  // Selection factors - EXACTLY as you wrote them
  const selectionFactors = [
    {
      icon: <Building2 size={20} />,
      text: "the size and type of your property (residential, commercial, industrial)"
    },
    {
      icon: <ClipboardCheck size={20} />,
      text: "local building codes"
    },
    {
      icon: <IndianRupee size={20} />,
      text: "budget"
    },
    {
      icon: <ShieldAlert size={20} />,
      text: "specific risks"
    }
  ];


  const trustPoints = [
  {
    icon: Lightbulb,
    title: 'Expert Consultation & System Design',
    description:
      'Our seasoned fire safety engineers conduct site assessments and risk evaluations to design intelligent, tailor-made fire alarm systems that meet rigorous standards and your facility’s exact needs.',
    bg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: Hammer,
    title: 'Certified & Professional Installation',
    description:
      'Our trained, licensed technicians ensure each system is meticulously installed, tested, and fully compliant with NBC and local fire regulations for total peace of mind.',
    bg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: Wrench,
    title: 'Proactive Maintenance & Servicing',
    description:
      'We offer comprehensive maintenance plans that include inspections, performance testing, and system recalibration—ensuring your fire alarm operates 24/7 without fail.',
    bg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    icon: RadioTowerIcon,
    title: '24/7 Monitoring & Emergency Response',
    description:
      'Certain systems include round-the-clock monitoring with direct alert capabilities to fire departments or safety teams for rapid action in emergencies.',
    bg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: MapPinCheck,
    title: 'Deep Local Expertise',
    description:
      'Based in Gurugram and serving all of Delhi NCR, we understand regional compliance codes, permitting challenges, and environmental conditions—delivering superior local support.',
    bg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
];


const faqs = [
  {
    question: 'How often should I test my fire alarm system?',
    answer:
      "While local regulations may vary, it's generally recommended to conduct weekly or monthly user checks and annual professional inspections and fire alarm system maintenance by certified technicians like Zedex Fire.",
  },
  {
    question: "What's the difference between a smoke detector and a fire alarm system?",
    answer:
      'A smoke detector is a single device designed to detect smoke. A fire alarm system is a comprehensive network that includes multiple detection devices (smoke, heat, CO), a central control panel, and various notification appliances, providing a much broader and more coordinated response.',
  },
  {
    question: 'Are fire alarm systems mandatory for all buildings in India?',
    answer:
      'The mandate for fire alarm systems depends on the building type, size, occupancy, and local fire safety codes set by authorities like the National Building Code of India (NBC) and local municipal corporations. Commercial, industrial, and multi-occupancy residential buildings typically require them. Zedex Fire can advise on your specific compliance needs in Gurugram and Haryana.',
  },
  {
    question: 'How much does a fire alarm system cost?',
    answer:
      'The fire alarm system cost varies significantly based on the type of system (conventional, addressable, wireless), building size, number of devices, complexity of installation, and features. We recommend a free site survey and consultation with Zedex Fire for an accurate, personalized quote.',
  },
  {
    question: 'Can Zedex Fire integrate fire alarm systems with other safety systems?',
    answer:
      'Yes, modern fire alarm systems can often be integrated with other building management systems, security systems, and access control for a unified safety infrastructure. Discuss your integration needs with our experts during your consultation.',
  },
];


 const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
 
   <section className=" relative h-screen  md:h-[80vh]  bg-gradient-to-r from-red-600 to-orange-500   p-8 md:p-12 text-white mb-12 shadow-xl">
       

           <div className="container mx-auto h-full flex flex-col justify-center px-6">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-red-100 bg-red-800/50 rounded-full backdrop-blur-sm">
                FIRE SAFETY ESSENTIALS
              </span>
              <h1 className=" text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
            Fire Alarm Systems: Your Complete Guide to Safety & Protection
              </h1>
              <p className=" text-lg md:text-sm text-red-50 mb-8">
  In today's world, where safety is paramount, a robust fire alarm system isn't just an option—it's an absolute necessity.              </p>
            
            </div>
          </div>
      </section>

       <div className="  container mx-auto px-4   font-sans">
      

      {/* Core Definition Section */}
      <section className="mb-16 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="flex flex-col-reverse md:flex-row-reverse">
          <div className="p-8 md:p-10 md:w-2/3">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircleIcon className="text-red-600 m-2  "   />
              </div>
              <h2 className="   md:text-2xl font-bold text-gray-800">
                {coreDefinition.title}
              </h2>
            </div>
            
            {coreDefinition.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 text-sm md:text-left text-justify md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 md:p-10 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200">
            
     <img className=' object-center object-cover' src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1749038480/fire_alarm_scmnlu.webp" alt="Fire Alarm Systems" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        {/* Main Description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className=" m-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M6.343 5.343l-.707.707M3 12H2m9 9v-1m-6.364-1.636l.707-.707M12 21v-1m6.364-1.636l.707-.707M5.343 18.657l-.707-.707" />
              </svg>
            </div>
            <h2 className="   md:text-4xl font-bold text-gray-800">
              Understanding the Core: What Exactly is a Fire Alarm System?
            </h2>
          </div>

          <p className=" text-sm md:text-lg text-justify md:text-left text-gray-700 mb-5 leading-relaxed">
            A fire alarm system is an integrated network of electronic devices designed to detect the presence of fire or its early signs (smoke, heat, carbon monoxide) and alert occupants, initiating a response to mitigate danger. Its primary function is to provide early warning, allowing for safe evacuation and prompt intervention by emergency services, thereby minimizing property damage and, most importantly, saving lives.
          </p>

          <p className="text-sm md:text-lg text-justify md:text-left text-gray-700 leading-relaxed">
            These sophisticated fire detection systems are engineered to operate continuously, monitoring designated areas 24/7 for any indicators of a fire hazard.
          </p>
        </div>

        {/* Detection Features */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-200">
          <span className="md:text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553 2.276A2 2 0 0121 14.118V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.882a2 2 0 011.447-1.842L9 10m6 0V5a3 3 0 00-6 0v5m6 0H9" />
            </svg>
            <span> Key System Capabilities</span>
          </span>
          <ul className="space-y-4 text-sm md:text-lg">
            {detectionFeatures.map(({ icon: Icon, label, bgColor, textColor }, index) => (
              <li key={index} className="flex gap-3 items-start">
                <div className={`w-6 h-6 ${bgColor} ${textColor} rounded-full flex items-center justify-center`}>
                  <Icon size={14} />
                </div>
                <span className="text-gray-700">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className=" md:text-3xl font-bold mb-8 text-center text-gray-800">
       Why is a Reliable Fire Alarm System Indispensable for Your Property?
 </h2>
 <p className="text-gray-700 mb-4 text-sm text-justify md:text-left mx-3  md:text-lg leading-relaxed">
    Investing in a high-quality fire alarm system from Zedex Fire offers multi-faceted benefits, crucial for any property owner or facility manager in Gurugram and beyond:

 </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition duration-300 h-full"
            >
              <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-full flex items-center justify-center mb-4`}>
                {benefit.icon}
              </div>
              <h3 className=" md:text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.content}</p>
            </div>
          ))}
        </div>
      </section>

   <section className="mb-16 bg-white rounded-xl   overflow-hidden border border-gray-100">
        <div className="flex  flex-col-reverse  justify-center items-center md:flex-row-reverse">
          <div className="p-8 md:p-10 md:w-6/12">
            <div className="  border-l-2 border-red-500 p-4 flex items-center flex-col gap-3 mb-5">
              
              <h2 className=" md:text-3xl font-bold text-gray-800">
                        The Anatomy of Safety : Key Components of a Fire Alarm System

              </h2>

               <p  className="text-gray-700 mb-4 text-sm md:text-lg leading-relaxed">
                        A typical fire alarm system comprises several interconnected components, each playing a vital role in the detection and notification process :

              </p>

            </div>
            
            
             
        
          </div>
          
          <div className="  p-8 md:p-10 md:w-6/12 border-t md:border-t-0 md:border-l border-gray-200">
            
     <img className=' object-center object-cover' src=" https://res.cloudinary.com/dgx5cntyb/image/upload/v1749102637/alarm_system_ejyv1z.webp" alt="                        The Anatomy of Safety : Key Components of a Fire Alarm System
" />
          </div>
        </div>
      </section>




  <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Section Header */}
     

      {/* Components List */}
      <div className="space-y-12">
        {components.map((component, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            {/* Main Component Header */}
            <div className="p-6 md:p-8 border-b border-gray-200 flex items-start gap-4">
              <div className={`${component.color} w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-1`}>
                {component.icon}
              </div>
              <div>
                <h3 className="md:text-2xl font-bold text-gray-800">{component.title}</h3>
                {component.description && (
                  <p className="text-gray-700 text-sm mt-2">{component.description}</p>
                )}
              </div>
            </div>

            {/* Subtypes */}
            {component.subtypes && (
              <div className="p-6 md:p-8 bg-gray-50">
                {component.subtypes.map((subtype, subIndex) => (
                  <div key={subIndex} className="mb-6 last:mb-0">
                    <h4 className="md:text-lg font-semibold text-gray-800 mb-2">{subtype.name}</h4>
                    {subtype.description && (
                      <p className="text-gray-700 mb-3 text-sm">{subtype.description}</p>
                    )}
                    {subtype.items && (
                      <ul className="space-y-2 pl-5">
                        {subtype.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700 flex items-start gap-2">
                            <span className="text-gray-400 mt-1.5">•</span>
                            <span className=' text-sm'>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

      {/* Final CTA */}
      <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className=" text-xl md:text-3xl font-bold mb-4">
            {ctaContent.title}
          </h2>
          <p className="text-gray-300 mb-6 text-sm md:text-lg">
            {ctaContent.description}
          </p>
          <Link href="/contact-Us" className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 inline-flex items-center gap-2">
            <RadioTower   />
          <span className=' text-sm'>  {ctaContent.buttonText}</span>
          </Link>
        </div>
      </section>




   <section className="mt-16 bg-white rounded-xl   overflow-hidden border border-gray-100">
        <div className="flex flex-col-reverse justify-center items-center md:flex-row-reverse">
          <div className="p-8 md:p-10 md:w-7/12">
            <div className="  border-l-2 border-red-500 p-4 flex items-center flex-col gap-3 mb-5">
              
              <h2 className=" md:text-3xl font-bold text-gray-800">
          How Does a Fire Alarm System Work? A Step-by-Step Overview

              </h2>

               <p  className="text-gray-700 mb-4 text-sm md:text-lg leading-relaxed">
                                 The operation of a fire alarm system follows a precise sequence to ensure rapid and effective response:


              </p>

            </div>
          </div>
          
          <div className="  p-8 md:p-10 md:w-5/12 border-t md:border-t-0 md:border-l border-gray-200">
            
     <img className=' object-center object-cover rounded-2xl' src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1749102637/alaram_system3_vxys6x.webp" alt="  How Does a Fire Alarm System Work? A Step-by-Step Overview
" />
          </div>
        </div>
      </section>


 <div className="max-w-6xl mx-auto px-4 md:py-16">
    
      

      {/* Workflow Visualization */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500 hidden md:block"></div>
        
        {/* Steps */}
        <div className="space-y-8 md:space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              {/* Step content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-full">
                  <div className={`${step.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="md:text-2xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step number (mobile) */}
              <div className="md:hidden w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center z-10">
                <span className="text-xl font-bold text-blue-600">{index + 1}</span>
              </div>

              {/* Step number (desktop) */}
              <div className="hidden md:flex w-16 h-16 bg-white border-4 border-blue-500 rounded-full items-center justify-center z-10">
                <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
              </div>

              {/* Empty spacer for desktop layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>

  
    </div>




   <section className="mt-16 bg-white rounded-xl   overflow-hidden border border-gray-100">
        <div className=" flex flex-col-reverse justify-center items-center md:flex-row-reverse">
          <div className="p-8 md:p-10 md:w-7/12">
            <div className="  border-l-2 border-red-500 p-4 flex items-center flex-col gap-3 mb-5">
              
              <h2 className=" md:text-3xl font-bold text-gray-800">
          Types of Fire Alarm Systems : Finding the Right Fit for Your Needs

              </h2>

               <p  className="text-gray-700 mb-4 text-sm md:text-lg leading-relaxed">
          Understanding different fire alarm system types is essential for optimal protection. Zedex Fire specializes in the installation and maintenance of all major categories:


              </p>

            </div>
          </div>
          
          <div className="  p-8 md:p-10 md:w-5/12 border-t md:border-t-0 md:border-l border-gray-200">
            
     <img className=' object-center object-cover rounded-2xl' src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1749102637/alaram_system_2_zj922f.webp" alt="  Types of Fire Alarm Systems : Finding the Right Fit for Your Needs
" />
          </div>
        </div>
      </section>



 <div className="max-w-6xl mx-auto px-4 md:py-16">
  
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {systemTypes.map((system, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="p-6 md:p-8">
              <div className={`${system.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                {system.icon}
              </div>
              <h3 className=" md:text-2xl font-bold text-gray-800 mb-3">
                {system.title}
              </h3>
              <p className=" text-sm text-gray-700">
                {system.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Choosing Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Choosing the Right Fire Alarm System with Zedex Fire
          </h3>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-700 text-sm mb-6">
                Selecting the ideal fire detection system involves considering various factors:
              </p>
              
              <ul className="space-y-3">
                {selectionFactors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full shadow-sm mt-0.5">
                      {factor.icon}
                    </div>
                    <span className="text-gray-700 text-sm">{factor.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2 bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
              <p className="text-gray-700 text-sm text-justify">
                At Zedex Fire, our experts provide tailored advice, ensuring you get a system that's not just functional but perfectly suited to your unique requirements. We conduct thorough site assessments and offer comprehensive fire alarm system installation services across Gurugram, Haryana, and Delhi NCR.
              </p>
              
              <Link href="/contact-Us" className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition duration-300 inline-flex items-center text-sm gap-2">
                Get Expert Consultation <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


      <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className=" text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Zedex Fire: Your Trusted Partner in Fire Safety
        </h2>
        <p className=" text-sm md:text-lg text-gray-600">
          With a reputation built on technical excellence and local expertise, we go beyond products—we deliver reliable protection and lasting peace of mind.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trustPoints.map((point, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition"
          >
            <div
              className={`w-12 h-12 ${point.bg} rounded-full flex items-center justify-center mb-4`}
            >
              <point.icon className={`${point.iconColor}`} size={24} />
            </div>
            <h3 className="  md:text-xl font-semibold text-gray-800 mb-2">{point.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className=" text-2xl md:text-4xl font-bold text-red-700 mb-4">Frequently Asked Questions</h2>
        <p className=" text-sm md:text-lg text-gray-600">
          Explore common questions about fire alarm systems, answered by the experts at Zedex Fire.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-red-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="md:text-lg text-sm font-semibold text-gray-800">{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                } text-red-600`}
              />
            </button>
            {activeIndex === index && (
              <p className="mt-4 text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
    


    <section className=" m-4 md:m-12 relative bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 text-white py-16 rounded-2xl overflow-hidden shadow-lg px-6 sm:px-10">

      <div className="max-w-4xl mx-auto text-center">
      
        <div className="mb-6">
          <ShieldCheck size={36} className="mx-auto text-white drop-shadow-md" />
          <h2 className=" md:text-3xl sm:text-4xl font-bold mt-4">
            Secure Your Property Today with Zedex Fire's Expert Fire Alarm Solutions!
          </h2>
        </div>

        <p className=" text-sm md:text-lg   text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Don’t wait for a crisis to act. Partner with Zedex Fire for state-of-the-art fire alarm system installation, proactive maintenance, and comprehensive fire safety solutions tailored for your peace of mind.
        </p>

        <a    href="tel:9999883999" className=" text-sm inline-flex items-center gap-2 bg-white text-red-700 font-semibold px-8 py-3 rounded-full hover:bg-red-100 transition shadow-md">
          <PhoneCall size={20} />
          Get FREE Consultation
        </a>

        <p className="mt-6 text-sm text-white/80">
          Now serving Gurugram, Haryana & Delhi NCR
        </p>

      </div>

    </section>

    </div>
    
    </>
  )
}
