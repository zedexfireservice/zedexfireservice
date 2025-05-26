"use client"

import { useState } from 'react';
 
import { motion } from 'framer-motion';
 
export default function FireExtinguisher() {

      const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const FireRisks = [
    {
      title: "Class A Fires",
      description: "Involve ordinary combustible materials like wood, paper, cloth, and plastics.",
    },
    {
      title: "Class B Fires",
      description: "Involve flammable liquids such as petrol, oil, paints, and solvents."
    },
    {
      title: "Class C Fires",
      description: "Involve flammable gases like LPG, propane, and butane."
    },
    {
      title: "Class D Fires",
      description: "Involve combustible metals like magnesium, titanium, and potassium."
    },
    {
      title: "Class K / Class F Fires",
      description: "Involve cooking oils and fats (e.g., in commercial kitchens)."
    }
  ];

  const ABCChemicalFire = [
    {
      title: "ABC Dry Chemical Fire Extinguishers : "
    },
    {
      title: "Versatile Protection :",
      description: "Your multi-purpose solution for Class A, B, and C fires. Ideal for homes, offices, schools, and general commercial spaces in Delhi NCR."
    },
    {
      title: "Key Features :",
      description: "High effectiveness, rapid knockdown, available in various capacities."
    },
    {
      title: "Suitable For :",
      description: "Wood, paper, plastics, flammable liquids, electrical equipment."
    },
    {
      title: 
      <>
      <a href="tel:9999883999">
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">Get Pricing for ABC Extinguishers</button>
 </a>
      </>
    },
    {
      title: "CO2 Fire Extinguishers : ",
    },
    {
      title: "Residue-Free Solution : ",
      description: "Perfect for Class B (flammable liquids) and electrical (Class C) fires, especially in sensitive environments like data centers, server rooms, and laboratories across Delhi NCR."
    },
    {
      title: "Key Features : ",
      description: "Non-conductive, non-corrosive, no clean-up required."
    },
    {
      title: "Suitable For : ",
      description: "Flammable liquids, electrical equipment."
    },
    {
      title: 
      <>
  <a href="tel:9999883999">


      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">Get Pricing for CO2 Extinguishers</button>
       </a>
      </>
    },
    {
      title: "Water & Foam Fire Extinguishers : "
    },
    {
      title: "Effective for Class A/B : ",
      description: "Water extinguishers are ideal for Class A fires, while Foam (AFFF) extinguishers are highly effective on Class A and B fires."
    },
    {
      title: "Key Features : ",
      description: "Cooling and soothing effect."
    },
    {
      title: "Suitable For : ",
      description: "Wood, paper, cloth (Water); Flammable liquids (Foam)."
    },
    {
      title: 
      <>
 <a href="tel:9999883999">

      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">Get Pricing for Water/Foam Extinguishers
      </button>

 </a>

      </>
    },
    {
      title: "Wet Chemical Fire Extinguishers (Class K/F) : ",
    },
    {
      title: "Kitchen Fire Specialists : ",
      description: "Specifically designed for Class K (cooking oil and fat) fires, making them indispensable for restaurants, food courts, and commercial kitchens in Delhi NCR."
    },
    {
      title: "Key Features : ",
      description: "Forms a cooling blanket, prevents re-ignition."
    },
    {
      title: "Suitable For : ",
      description: "Cooking oils and fats."
    },
    {
      title: 
            <>
 <a href="tel:9999883999">

      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">Get Pricing for Wet Chemical Extinguishers
      </button>
    </a>
  </>
    },
    {
      title: "Clean Agent Fire Extinguishers (e.g., HFC 236fa) : ",
    },
    {
      title: "Sensitive Environment Protection : ",
      description: "An ideal choice for valuable assets, electronics, and critical documents, effective on Class A, B, and C fires without leaving residue."
    },
    {
      title: "Key Features : ",
      description: "Non-toxic, non-corrosive, electrically non-conductive, ozone-friendly."
    },
    {
      title: "Suitable For : ",
      description: "Server rooms, data centers, museums, art galleries."
    },
    {
      title: 
           <>
 <a href="tel:9999883999">

      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">Get Pricing for Clean Agent Extinguishers</button>
    </a>
    </>
    },
    {
      title: "Automatic Modular Fire Extinguishers : "
    },
    {
      title: "Unattended Fire Protection : ",
      description: "Automatically detects and suppresses fires in enclosed spaces, ideal for server rooms, electrical panels, and storage areas."
    },
    {
      title: "Key Features : ",
      description: "Ceiling-mounted, automatic activation, ideal for 24/7 protection."
    },
    {
      title: "Suitable For :",
      description: "Unattended spaces, high-risk areas.",
    },
    {
      title: 
            <>
 <a href="tel:9999883999">

      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">Get Pricing for Automatic Extinguishers
      </button>
      </a>
    </>
    }
  ];

  const Comprehensive = [
    {
      title: "Fire Extinguisher Refilling & Recharging in Delhi NCR : "
    },
    {
      title: "Certified & Reliable : ",
      description: "We provide expert refilling and recharging services for all types of fire extinguishers, adhering to ISO 9001:2008 and BIS/ISI standards. Our facilities in Delhi NCR ensure quick and efficient service."
    },
    {
      title: "Importance : ",
      description: "Regular refilling after use or expiry is crucial for operational readiness."
    },
    {
      title: "Annual Maintenance Contracts (AMC) for Fire Extinguishers : "
    },
    {
      title: "Ensuring Compliance & Readiness : ",
      description: "Our AMCs guarantee periodic inspections, maintenance, and necessary repairs, keeping your fire extinguishers in optimal condition and ensuring compliance with local regulations."
    },
    {
      title: "Benefits : ",
      description: "Peace of mind, prolonged equipment life, immediate response to issues."
    },
    {
      title: "Professional Installation Services : ",
      description: "Our certified technicians ensure proper installation and placement of fire extinguishers in your premises across Delhi NCR, maximizing their effectiveness in an emergency."
    },
    {
      title: "Fire Safety Audits & NOC Consultancy in Delhi : "
    },
    {
      title: "Expert Guidance : ",
      description: "Our team conducts thorough fire safety audits of your property and assists with obtaining Fire No Objection Certificates (NOC) and ensuring compliance with Delhi's fire safety regulations."
    },
    {
      title: "Hands-on Fire Safety Training Programs : "
    },
    {
      title: "Empowering Your Team : ",
      description: "We offer practical training sessions for your staff or residents on the correct use of fire extinguishers (PASS method), emergency evacuation procedures, and basic fire prevention techniques, building a safer community in Delhi NCR."
    }
  ];

  const Why = [
    {
      title: "ISO 9001:2008 Certified Quality : ",
      description: "All our fire extinguishers and services adhere to stringent international quality management standards."
    },
    {
      title: "Delhi NCR Local Experts : ",
      description: "Our deep understanding of local regulations and rapid response capabilities ensure unmatched service across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad."
    },
    {
      title: "Highly Qualified Team : ",
      description: "Our team of fire safety engineers and technicians is rigorously trained to provide expert advice, seamless installation, and efficient maintenance."
    },
    {
      title: "Comprehensive Solutions : ",
      description: "From product supply to refilling, AMC, training, and NOC consultancy, we are your single point of contact for all fire safety needs."
    },
    {
      title: "Customer-Centric Approach : ",
      description: "We prioritize your safety and satisfaction, offering personalized solutions and dedicated after-sales support."
    },
    {
      title: "Proven Track Record : ",
      description: "As a testament to our dedication, Zedex Fire has successfully secured countless lives and properties, consistently delivering excellence in fire safety for many years."
    }
  ];

  const faqs = [
    {
      question: "How often should fire extinguishers be inspected?",
      answer: "Fire extinguishers should be inspected monthly for visible damage and proper pressure. A professional maintenance check should be performed annually by a certified technician."
    },
    {
      question: "What is the lifespan of a typical fire extinguisher?",
      answer: "Most fire extinguishers last 5-15 years depending on the type and maintenance. CO2 extinguishers typically last 10 years, while dry chemical extinguishers last 12 years with proper care."
    },
    {
      question: "Can I use one fire extinguisher for all types of fires?",
      answer: "No, different fires require different extinguishers. ABC extinguishers work on most common fires, but specialized fires (like cooking oil or electrical) need specific extinguishers."
    },
    {
      question: "How do I know which fire extinguisher to choose for my business?",
      answer: "Our experts will assess your premises, identify potential fire risks, and recommend the appropriate types and sizes of extinguishers for optimal protection."
    },
    {
      question: "What's included in your Annual Maintenance Contract (AMC)?",
      answer: "Our AMC includes quarterly inspections, annual maintenance, pressure testing when needed, refilling/recharging, and replacement of parts as required to keep your extinguishers operational."
    },
    {
      question: "How quickly can you respond to service requests in Delhi NCR?",
      answer: "We typically respond within 24 hours for urgent requests and within 3 working days for routine services across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad."
    },
    {
      question: "Do you provide fire safety training?",
      answer: "Yes, we offer comprehensive hands-on training covering proper extinguisher use (PASS method), evacuation procedures, and fire prevention techniques tailored to your specific environment."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };


  return (
    <>
    <div className="hero mx-auto">
      {/* Hero Section */}
       <section>

                <div className="relative flex  h-[86vh] md:h-[60vh] w-full">


          
  <div className="box w-full h-full">
                          <img
          src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300835/fire_extinguisher_2_itdsfe.webp"
          className="hidden md:block h-full w-full object-cover object-center"
          alt="Fire Extinguisher Solutions"
        />
        <img
          src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300891/2_df1czf.webp"
          className="md:hidden h-full w-full object-cover object-center"
          alt="Fire Extinguisher Solutions"
        />
                       </div>


                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Fire Extinguisher ISI Mark "Zedex" <br />
            <span className=' text-2xl'> Home / Fire Extinguisher ISI Mark "Zedex"</span>
          </p>
         
                    </div>
                </div>

            </section>


 

      {/* Main Content */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <motion.div 
            variants={itemVariants}
            className="flex  justify-evenly  flex-col lg:flex-row items-center gap-10 mb-20"
          >
            <div className="lg:w-4/12 w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative h-full border-2 border-red-300 p-2 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618669/abc-dry-powder-extinguisher_cbhshq.webp"
                  alt="ABC Dry Powder Extinguisher"
                  className="w-full h-full object-cover rounded"
                />
              </motion.div>
            </div>

            <div className="lg:w-5/12 w-full">
              <motion.h2 
                variants={fadeInVariants}
                className="text-3xl font-bold mb-4 text-gray-800"
              >
                Zedex Fire: Your Trusted Partner for Comprehensive Fire Extinguisher Solutions in Delhi NCR
              </motion.h2>
              <motion.h3 
                variants={fadeInVariants}
                className="text-xl font-semibold mb-4 text-red-600"
              >
                Safeguarding Delhi NCR: Premium Fire Extinguishers & Expert Services by Zedex Fire
              </motion.h3>
              <motion.p 
                variants={fadeInVariants}
                className="text-gray-700 leading-relaxed mb-4"
              >
                Protecting Homes, Businesses, and Industries Across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad with ISO 9001:2008 Certified Quality and Unmatched Fire Safety Expertise.
              </motion.p>
            </div>
          </motion.div>

          {/* Fire Risks Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <motion.h2 
              variants={fadeInVariants}
              className="text-3xl font-bold mb-6 text-gray-800"
            >
              Understanding Fire Risks: A Guide by Zedex Fire Experts
            </motion.h2>
            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700 leading-relaxed mb-8"
            >
              Before choosing your fire extinguisher, it's crucial to understand the different types of fires you might encounter. Our experts guide you through the essential fire classes:
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {FireRisks.map((risk, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-red-500"
                >
                  <h3 className="text-xl font-bold text-red-600 mb-2">{risk.title}</h3>
                  <p className="text-gray-700">{risk.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700 leading-relaxed mt-8"
            >
              Knowing your fire risks helps you select the right fire extinguisher, a decision our Zedex Fire experts in Delhi NCR are always ready to assist you with.
            </motion.p>
          </motion.div>

          {/* Products Section - Zigzag Layout */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <motion.h2 
              variants={fadeInVariants}
              className="text-3xl font-bold mb-6 text-gray-800"
            >
              Our Comprehensive Range of Certified Fire Extinguishers for Delhi NCR
            </motion.h2>
            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700 leading-relaxed mb-8"
            >
              Zedex Fire is a proud provider of ISO 9001:2008 and BIS/ISI certified fire extinguishers, ensuring adherence to the highest Indian and international safety standards. Explore our diverse range:
            </motion.p>

            {ABCChemicalFire.map((item, index) => {
              if (index % 5 === 0) {
                return (
                  <motion.div 
                    key={index}
                    variants={containerVariants}
                    className={`flex flex-col py-8 ${index % 10 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 my-12 `}
                  >
                    <div className="md:w-1/2 w-full">

                <motion.div 
  whileHover={{ scale: 1.02 }}
  className="relative w-full h-[200px]   md:h-[350px]   overflow-hidden"
>
  <img 
    src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1748002618/WhatsApp_Image_2025-05-23_at_17.45.48_l0uvu4.jpg"
    alt={item.title}
    className="w-full h-full object-contain border rounded-4xl p-4 "
  />
</motion.div>
                      
                    </div>

                    <div className="md:w-1/2 w-full">
                      <motion.h3 
                        variants={fadeInVariants}
                        className="text-2xl font-bold text-red-600 mb-4"
                      >
                        {item.title}
                      </motion.h3>
                      {ABCChemicalFire[index + 1] && (
                        <>
                          <motion.h4 
                            variants={fadeInVariants}
                            className="text-xl font-semibold mb-2"
                          >
                            {ABCChemicalFire[index + 1].title}
                          </motion.h4>
                          <motion.p 
                            variants={fadeInVariants}
                            className="text-gray-700 mb-4"
                          >
                            {ABCChemicalFire[index + 1].description}
                          </motion.p>
                        </>
                      )}
                      {ABCChemicalFire[index + 2] && (
                        <>
                          <motion.h4 
                            variants={fadeInVariants}
                            className="text-xl font-semibold mb-2"
                          >
                            {ABCChemicalFire[index + 2].title}
                          </motion.h4>
                          <motion.p 
                            variants={fadeInVariants}
                            className="text-gray-700 mb-4"
                          >
                            {ABCChemicalFire[index + 2].description}
                          </motion.p>
                        </>
                      )}
                      {ABCChemicalFire[index + 3] && (
                        <>
                          <motion.h4 
                            variants={fadeInVariants}
                            className="text-xl font-semibold mb-2"
                          >
                            {ABCChemicalFire[index + 3].title}
                          </motion.h4>
                          <motion.p 
                            variants={fadeInVariants}
                            className="text-gray-700 mb-6"
                          >
                            {ABCChemicalFire[index + 3].description}
                          </motion.p>
                        </>
                      )}
                      {ABCChemicalFire[index + 4] && (
                        <motion.div variants={fadeInVariants}>
                          {ABCChemicalFire[index + 4].title}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              }
              return null;
            })}

            <motion.div 
              variants={fadeInVariants}
              className="text-gray-700 leading-relaxed mt-8 text-center"
            >
              <p className=' py-3'> Need help choosing the right extinguisher for your specific needs in Delhi NCR? </p>
              <button className="ml-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Request a Free Site Assessment
              </button>
            </motion.div>
          </motion.div>

          {/* Services Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <motion.h2 
              variants={fadeInVariants}
              className="text-3xl font-bold mb-6 text-gray-800"
            >
              Comprehensive Fire Extinguisher Services in Delhi NCR
            </motion.h2>
            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700 leading-relaxed mb-8"
            >
              At Zedex Fire, our commitment to your safety extends far beyond product sales. We offer a full spectrum of fire extinguisher services:
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Comprehensive.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-red-600 mb-3">{service.title}</h3>
                  {service.description && (
                    <p className="text-gray-700">{service.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full p-7 rounded-xl bg-gradient-to-r from-red-50 to-gray-50 mb-20"
          >
            <div className="flex items-center justify-center h-full">
              <div className="w-full flex flex-col justify-center items-center gap-6 text-center">
                <motion.h2 
                  variants={fadeInVariants}
                  className="text-2xl md:text-3xl font-bold text-gray-800"
                >
                  Get Expert Advice for Your Fire Safety Solution Needs
                </motion.h2>
                <motion.p 
                  variants={fadeInVariants}
                  className="text-gray-700 max-w-2xl"
                >
                  Our certified fire safety experts are ready to assess your needs and recommend the perfect fire protection solution for your premises in Delhi NCR.
                </motion.p>
                <motion.div variants={fadeInVariants}>
                  <a
                    href="tel:9999883999"
                    className="inline-block rounded-lg relative overflow-hidden group items-center justify-center px-6 py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-red-600 active:shadow-none shadow-lg bg-gradient-to-tr from-red-600 to-red-500 border-red-700 text-white font-bold"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                    <span className="relative">Contact Zedex Fire Expert</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <motion.h2 
              variants={fadeInVariants}
              className="text-3xl font-bold mb-6 text-gray-800"
            >
              Why Delhi NCR Trusts Zedex Fire: Our Unbeatable Advantages
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Why.map((reason, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-red-600 mb-3">{reason.title}</h3>
                  <p className="text-gray-700">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            variants={itemVariants}
            className="w-full p-7 rounded-xl bg-gradient-to-r from-red-600 to-red-700 mb-20"
          >
            <div className="flex items-center justify-center h-full">
              <div className="w-full flex flex-col justify-center items-center gap-6 text-center text-white">
                <motion.h2 
                  variants={fadeInVariants}
                  className="text-2xl md:text-3xl font-bold"
                >
                  Ready to Enhance Your Fire Safety in Delhi NCR?
                </motion.h2>
                <motion.p 
                  variants={fadeInVariants}
                  className="max-w-2xl"
                >
                  Don't compromise on safety. Partner with Zedex Fire, your reliable firefighting equipment supplier and dealer in Delhi NCR.
                </motion.p>
                <motion.div variants={fadeInVariants}>
                  <a
                    href="tel:9999883999"
                    className="inline-block rounded-lg relative overflow-hidden group items-center justify-center px-6 py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-white active:shadow-none shadow-lg bg-white text-red-600 font-bold hover:bg-gray-50 transition"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-red-100 rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                    <span className="relative">Request a Free Quote Today!</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-20"
          >
            <motion.h2 
              variants={fadeInVariants}
              className="text-3xl font-bold mb-6 text-gray-800 text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              variants={fadeInVariants}
              className="text-gray-700 text-center mb-8 max-w-2xl mx-auto"
            >
              Here are answers to some common questions about our fire extinguisher products and services in Delhi NCR.
            </motion.p>

            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="mb-4 overflow-hidden"
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.button>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: activeIndex === index ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
</div>
    </>
  )
}
