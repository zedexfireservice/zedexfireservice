import React from 'react'

import { 
  FlameAlert, ShieldCheck, Building, AlarmClock, 
  FileText, Zap, RadioTower, BellElectric, 
  Thermometer, Eye, ChevronRight, 
  AlertCircle,
  AlertCircleIcon,
  BellElectricIcon,
  EyeClosed,
  ThermometerIcon,
  Download
} from 'lucide-react';


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

  return (
    <>
 
   <section className=" relative h-screen  md:h-[80vh]  bg-gradient-to-r from-red-600 to-orange-500   p-8 md:p-12 text-white mb-12 shadow-xl">
       

           <div className="container mx-auto h-full flex flex-col justify-center px-6">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-red-100 bg-red-800/50 rounded-full backdrop-blur-sm">
                FIRE SAFETY ESSENTIALS
              </span>
              <h1 className="text-3xl font-bold text-white leading-tight mb-4">
            Fire Alarm Systems: Your Complete Guide to Safety & Protection
              </h1>
              <p className="text-sm text-red-50 mb-8">
  In today's world, where safety is paramount, a robust fire alarm system isn't just an option—it's an absolute necessity.              </p>
            
            </div>
          </div>
      </section>

       <div className="  container mx-auto   font-sans">
      

      {/* Core Definition Section */}
      <section className="mb-16 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="md:flex">
          <div className="p-8 md:p-10 md:w-2/3">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircleIcon className="text-red-600" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {coreDefinition.title}
              </h2>
            </div>
            
            {coreDefinition.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 md:p-10 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Eye className="text-blue-500" size={20} />
              Key Detection Capabilities
            </h3>
            <ul className="space-y-3">
              {coreDefinition.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className={`w-5 h-5 bg-${feature.color}-100 rounded-full flex items-center justify-center mt-0.5 shrink-0`}>
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M6.343 5.343l-.707.707M3 12H2m9 9v-1m-6.364-1.636l.707-.707M12 21v-1m6.364-1.636l.707-.707M5.343 18.657l-.707-.707" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Understanding the Core: What Exactly is a Fire Alarm System?
            </h2>
          </div>

          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            A fire alarm system is an integrated network of electronic devices designed to detect the presence of fire or its early signs (smoke, heat, carbon monoxide) and alert occupants, initiating a response to mitigate danger. Its primary function is to provide early warning, allowing for safe evacuation and prompt intervention by emergency services, thereby minimizing property damage and, most importantly, saving lives.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            These sophisticated fire detection systems are engineered to operate continuously, monitoring designated areas 24/7 for any indicators of a fire hazard.
          </p>
        </div>

        {/* Detection Features */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553 2.276A2 2 0 0121 14.118V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.882a2 2 0 011.447-1.842L9 10m6 0V5a3 3 0 00-6 0v5m6 0H9" />
            </svg>
            Key System Capabilities
          </h3>
          <ul className="space-y-4">
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
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
       Why is a Reliable Fire Alarm System Indispensable for Your Property?
 </h2>
 <p className="text-gray-700 mb-4 text-lg leading-relaxed">
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
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {ctaContent.title}
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            {ctaContent.description}
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 inline-flex items-center gap-2">
            <RadioTower size={20} />
            {ctaContent.buttonText}
          </button>
        </div>
      </section>
    </div>
    
    </>
  )
}
