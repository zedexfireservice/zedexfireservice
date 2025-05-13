import React from 'react'

export default function FireSuppressionPage() {

     const fireSuppressionComponents = [
    {
      title: "Early Detection and Rapid Response –",
      description:
        "Our systems are engineered for swift fire detection and immediate activation, minimizing the time for a fire to escalate and cause extensive damage.",
    },
    {
      title: "Minimized Property Damage and Loss –",
      description:
        "By quickly suppressing fires at their source, our systems help reduce structural damage, equipment loss, and business interruption. Many of our clean agent systems leave no residue, allowing for quicker recovery and minimal downtime",
    },

    {
      title: "Enhanced Occupant Safety –",
      description:
        "Protecting lives is paramount. Our fire suppression systems provide crucial time for safe evacuation and reduce the risk of injuries or fatalities.",
    },
    {
      title: "Compliance with Safety Regulations –",
      description:
        "Installing a compliant fire suppression system ensures adherence to local and national fire safety codes, preventing potential legal and financial repercussions.",
    },

    {
      title: "24/7 Uninterrupted Protection –",
      description:
        "Our automatic fire suppression systems offer continuous monitoring and protection, even when facilities are unoccupied.",
    },

    {
      title: "Protection of Critical Assets –",
      description:
        "For businesses dealing with sensitive equipment or irreplaceable data, such as data centers and archives, our specialized systems offer crucial protection against fire and water damage (in the case of clean agent systems).",
    },


    {
      title: "Potential Insurance Benefits –",
      description:
        "Many insurance providers offer reduced premiums for properties equipped with certified fire suppression systems.",
    },


  ];



  const qualityChecklist = [
    {
      title: "Manufacturing Excellence –",
      description:
        "As an ISO 9001:2008 certified manufacturer, we leverage our expertise to produce high-quality components and systems, adhering to stringent quality management principles and industry standards.",
    },
    {
      title: "Wide Range of Supply –",
      description:
        "We offer a diverse selection of fire suppression systems and related equipment to meet various requirements and budgets.",
    },
    {
      title: "Reliable Dealership –",
      description:
        "As authorized dealers for leading brands, we provide access to a wide array of cutting-edge fire safety technologies.",
    },
    {
      title: "Professional Installation –",
      description:
        "Our certified and experienced technicians ensure the correct and efficient installation of your fire suppression system, guaranteeing optimal performance.",
    },
  ];


  const fireSuppression1 = [
    {
      title: "Water-Based Sprinkler Systems :",
      description:
        <>
          <p>The most common and cost-effective solution for a wide range of hazards in commercial, industrial, and residential buildings. As your ISO 9001:2008 certified manufacturer, supplier, dealer, and installer, we offer various types, including:
          </p>

          <ul className=' list-disc md:list-inside py-3'>
            <li >
              <span className="font-semibold">Wet Pipe Systems : </span> Ideal for environments where freezing is not a concern, such as offices and retail spaces.
            </li>
            <li >
              <span className="font-semibold">Dry Pipe Systems : </span> Used in areas subject to freezing temperatures, such as unheated warehouses or parking garages.
            </li>
            <li >
              <span className="font-semibold">Pre-Action Systems : </span> Ideal for protecting sensitive areas like museums, libraries, and data centers, preventing accidental water discharge .
            </li>
            <li >
              <span className="font-semibold">Deluge Systems : </span> Designed for high-hazard environments where rapid fire spread is a risk, such as chemical plants and power stations .
            </li>
            <li >
              <span className="font-semibold">Water Mist Systems : </span> Suitable for areas where minimizing water damage is crucial.
            </li>
          </ul>

        </>
      ,
    },
    {
      title: "Clean Agent Fire Suppression Systems :",
      description:
        <>
          <p>Utilizing non-conductive, non-corrosive gases that leave no residue, ideal for protecting sensitive electronic equipment, data centers, telecommunication facilities, and archives in Delhi NCR. As your trusted ISO 9001:2008 certified supplier and installer, options include :
          </p>

          <ul className=' list-disc md:list-inside py-3'>
            <li >
              <span className="font-semibold">FM-200 Systems : </span> A widely used clean agent known for its effectiveness and safety.
            </li>
            <li >
              <span className="font-semibold">Novec 1230 Systems : </span> An environmentally friendly clean agent with a high safety margin .

            </li>
            <li >
              <span className="font-semibold">Inert Gas Systems (Argonite, Inergen) : </span> Using naturally occurring gases to reduce oxygen levels and suppress fires.


            </li>

          </ul>

        </>
      ,
    },


    {
      title: "Foam Suppression Systems :",
      description: "Highly effective for flammable liquid fires commonly found in industrial facilities, fuel storage areas, and aircraft hangars in the Delhi NCR region. As your reliable ISO 9001:2008 certified dealer and installer, we offer various foam types to suit different hazards . "
      ,
    },

    {
      title: "Dry Chemical Suppression Systems :",
      description: "Suitable for specific industrial and commercial applications involving Class A, B, and C fires. As your experienced ISO 9001:2008 certified supplier and installer, we provide tailored solutions ."
      ,
    },
    {
      title: "Aerosol Suppression Systems :",
      description: "A compact and efficient solution for enclosed spaces like electrical cabinets, server racks, and machinery. As your dependable ISO 9001:2008 certified dealer and installer, we offer these space-saving systems ."
      ,
    },



  ];

  const fireSuppression2 = [
    {
      title: "Certified Quality : ",
      description: "As an ISO 9001:2008 certified company, we adhere to stringent quality management systems, ensuring superior product and service delivery ."
      ,
    },


    {
      title: "Direct from the Source : ",
      description: "As a manufacturer, we offer competitive pricing and greater control over product quality ."
      ,
    },


    {
      title: "Comprehensive Service : ",
      description: "Benefit from our expertise as your single point of contact for supply, dealing, and installation ."
      ,
    },


    {
      title: "Local Expertise : ",
      description: "We have a deep understanding of the specific fire safety challenges and regulations in the Delhi NCR region ."
      ,
    },
    
    {
      title: "Customized Solutions : ",
      description: "Our experienced team will assess your unique risks and requirements to design and install the most effective fire suppression system for your premises ."
      ,
    },

    {
      title: "High-Quality Products : ",
      description: "We provide reliable and certified fire suppression systems, whether manufactured by us or sourced through our trusted dealerships ."
      ,
    },

    {
      title: "Expert Installation and Maintenance : ",
      description: "Our certified and experienced technicians ensure the correct and efficient installation of your fire suppression system, guaranteeing optimal performance ."
      ,
    },


    {
      title: "Commitment to Safety : ",
      description: "Your safety and the protection of your assets are our top priorities. We are dedicated to providing solutions that offer peace of mind ."
      ,
    },

    {
      title: "Comprehensive Support : ",
      description: "From initial consultation to ongoing support, Zedex Fire is your trusted partner in fire safety ."
      ,
    },



  ];


  
  return (
    <>
 <section>
        <div className="relative flex  h-[86vh] md:h-[60vh] w-full">

          <img
            src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618658/inner-bg_ixhn9v.webp"
            alt="Fire suppression system"
            className="object-cover rounded-lg w-full"
          />

          <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
            <p className="text-center md:text-left text-red-50 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
              Fire suppression system


              <br />
              <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  Fire suppression system

              </span>
            </p>
          </div>
        </div>
      </section>



      <section>

        <div className=" py-4 md:py-16 bg-white">
          <div className="container mx-auto px-4">


            <div className="flex justify-around flex-col lg:flex-row items-center ">
              <div className="lg:w-5/12 w-full">

                <img
                  src="/fire-suppression-system-1.webp"
                  alt="Fire suppression system"
                  className="rounded-xl w-full h-auto"
                />

              </div>

              <div className="w-0 lg:w-1/12"></div>

              <div className="lg:w-6/12 w-full mt-8 lg:mt-0">
                <h1 className=" md:text-3xl text-center md:text-left font-bold mb-4">Advanced Fire Suppression Systems in Delhi NCR: Your End-to-End Solution by Zedex Fire - An ISO 9001:2008 Certified Company
                </h1>
                <p className="text-gray-700 text-justify md:text-left">
                  Fires pose a significant threat to businesses and properties in the bustling Delhi NCR region. At Zedex Fire, we understand the critical importance of having reliable and effective fire suppression systems in place to safeguard your valuable assets and ensure the safety of occupants. As a leading  <strong>manufacturer, supplier, dealer, and installer of fire suppression systems in Delhi NCR</strong>, Zedex Fire offers a complete suite of advanced fire protection solutions, providing unparalleled protection against fire hazards in Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad. We are proud to be an <strong>ISO 9001:2008 certified company</strong>, demonstrating our commitment to quality management and customer satisfaction.

                </p>
              </div>
            </div>


            <div className="mt-20">
              <div className="flex flex-col gap-6 lg:flex-row-reverse items-center">
                <div className="lg:w-6/12 w-full">
                  <img
                    src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618768/fire-suppression-system-2_wgxcfe.jpg"
                    alt="Key Components of a Fire Suppression System"

                    className="rounded-xl w-full h-auto"
                  />
                </div>

                <div className="lg:w-6/12 w-full mt-8 lg:mt-0">

                  <h2 className="  md:text-3xl text-center md:text-left font-bold mb-6">
                    Why is a Robust Fire Suppression System Essential in Delhi NCR ?
                  </h2>
                  <p className="text-gray-700 text-justify md:text-left" >Delhi NCR's dynamic environment, encompassing commercial hubs, industrial complexes, data centers, and residential areas, faces diverse fire risks. A well-designed fire suppression system offers numerous benefits:
                  </p>
                  <ul className="list-disc text-justify md:text-left px-3 py-2 space-y-4 text-gray-700">
                    {fireSuppressionComponents.map((item, index) => (
                      <li key={index}>
                        <span className="font-semibold">{item.title}</span> {item.description}
                      </li>
                    ))}
                  </ul>




                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="md:text-3xl font-bold mb-6 text-center  md:text-left">Your Trusted Manufacturer, Supplier, Dealer, and Installer of Fire Suppression Systems in Delhi NCR - An ISO 9001:2008 Certified Company</h2>
              <p className="text-gray-700 mb-4 text-center md:text-left">
                As a comprehensive provider committed to quality, Zedex Fire manages every stage of your fire suppression system needs, ensuring excellence and seamless integration :
              </p>
              <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
                {qualityChecklist.map((item, index) => (
                  <li key={index}>
                    <span className="font-semibold">{item.title}</span> {item.description}
                  </li>
                ))}
              </ul>
            </div>


            <div className="mt-20">
              <h2 className=" text-2xl md:text-3xl font-bold mb-6 text-center  md:text-left">
                Our Comprehensive Range of Fire Suppression Systems in Delhi NCR
              </h2>
              <p className="text-gray-700 mb-4 text-center md:text-left">
                Zedex Fire offers a diverse portfolio of fire suppression systems tailored to meet the unique needs of various applications in Delhi NCR :
              </p>
              <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
                {fireSuppression1.map((item, index) => (
                  <li key={index}>
                    <span className="font-semibold">{item.title}</span> {item.description}
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="mt-20">

              <h2 className=" md:text-3xl font-bold mb-6 text-center  md:text-left">
               Why Choose Zedex Fire for Your Fire Suppression Needs in Delhi NCR ?
              </h2>
              
              <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
                {fireSuppression2.map((item, index) => (
                  <li key={index}>
                    <span className="font-semibold">{item.title}</span> {item.description}
                  </li>
                ))}
              </ul>

            </div>



            <div className="mt-20">

              <h2 className=" md:text-2xl font-bold mb-6 text-justify  md:text-left">
               Protect Your Delhi NCR Property Today with Zedex Fire - Your ISO 9001:2008 Certified Manufacturer, Supplier, Dealer, and Installer
              </h2>
              
              <p className="text-gray-700 mb-4 text-justify md:text-left">
               
              </p>

 <div className="w-full md:p-7 rounded-xl">
                            <div className="flex items-center justify-center h-full">
                                <div className="w-full flex flex-col justify-start lg:items-start items-center gap-3">

                                    {/* Divider with Heading */}
                                    <div className="relative inline-flex py-2 items-center justify-center w-full mx-auto my-7 md:mb-0">
                                        <hr className="w-[90%] h-px my-8 bg-gray-300 border-0" />
                                        <h2 className="absolute text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[15px] md:text-2xl capitalize font-semibold font-sans">
                                            Get Expert Advice for Your Fire Safety Solution Needs
                                        </h2>
                                    </div>

                                    {/* Paragraphs */}
                                    <p className="font-sans text-center  w-full">
                                        Protect your  Don't wait for a fire incident to recognize the importance of a reliable fire suppression system. Contact Zedex Fire today for a consultation and let our experts, as your local <strong>ISO 9001:2008 certified manufacturer, supplier, dealer, and installer</strong>, help you choose, implement, and maintain the best fire suppression solution to safeguard your property and ensure the safety of everyone in your Delhi NCR premises.
                                    </p>


                                    {/* Button */}
                                    <div className="w-full flex justify-center">
                                        <a
                                            href="tel:9999883999"
                                            className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white"
                                        >
                                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                                            <span className="relative">Contact Zedex Fire Expert</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
            </div>





          </div>
        </div>

      </section>
    </>
  )
}
