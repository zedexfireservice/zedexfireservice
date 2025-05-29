// app/blog/fire-extinguisher-guide/page.tsx
import { Flame, AlertTriangle, Download, Phone, Zap, Fuel, Utensils, Factory, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function FireExtinguisherGuide() {
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

  return (
    <div className="bg-white">
      {/* Premium Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-red-900 to-red-700">
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