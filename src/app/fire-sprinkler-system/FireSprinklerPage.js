import React from 'react'

export default function FireSprinklerPage() {
      const sprinklertypes = [
        {
            title: "Wet Pipe Systems -",
            description: "The most prevalent type, ideal for environments within Delhi NCR where freezing temperatures are not a concern, ensuring immediate water discharge upon activation.",
        },
        {
            title: "Dry Pipe Systems -",
            description: "Essential for unheated spaces common in the outskirts of Delhi NCR where freezing is a risk. These systems use pressurized air or nitrogen, releasing water only after fire detection and sprinkler head activation ",
        },
        {
            title: "Pre-Action Systems -",
            description: "Perfect for sensitive areas within Delhi NCR, such as data centers and museums, minimizing the risk of accidental water damage by requiring two distinct triggers (fire detection and sprinkler head activation) before water release",
        },
        {
            title: "Deluge Systems:  -",
            description: "Designed for high-hazard industries prevalent in certain zones of Delhi NCR, offering rapid and simultaneous discharge of a large volume of water through open sprinkler heads.",
        },
        {
            title: "Foam Water Systems -",
            description: "Crucial for facilities in the industrial belts of Delhi NCR dealing with flammable liquids, combining water with foam concentrate to effectively suppress such fires.",
        },

        {
            title: "Water Spray Systems -",
            description: "Tailored for protecting specific hazards like electrical transformers often found in commercial and industrial settings across Delhi NCR.",
        },
        {
            title: "Water Mist Systems -",
            description: "An excellent choice for minimizing water damage in sensitive environments throughout Delhi NCR, utilizing fine water droplets for effective fire suppression.",
        },

    ];


    const sprinklerfeatures = [
        {
            title: "Automatic Activation -",
            description: "Our systems provide immediate, autonomous fire suppression, crucial for a rapid response in the densely populated and varied environments of Delhi NCR.",
        },


        {
            title: "Targeted Response -",
            description: "Limiting water discharge to the immediate fire area minimizes damage, a significant advantage in both residential and commercial properties across Delhi NCR.",
        },


        {
            title: "Reliable Performance -",
            description: "ZedEx Fire systems are constructed with high-grade components and adhere to stringent national and local Delhi NCR fire safety standards, guaranteeing dependable operation.",
        },


        {
            title: "Versatile Applications -",
            description: "Versatile Applications: Our systems cater to the diverse building types and industries within Delhi NCR, from residential apartments and bustling commercial complexes to sprawling industrial estates.",
        },


        {
            title: "Expert Installation and Maintenance Across Delhi NCR -",
            description: "Our experienced team provides professional installation and consistent maintenance services throughout Delhi NCR, ensuring your system operates optimally and complies with local regulations.",
        },



    ];




    const sprinklerHeads = [
        {
            title: "Sprinkler Heads –",
            description: "A wide variety of types to meet the diverse aesthetic and functional needs of properties in Delhi NCR",
        },
    ];

    const sprinklerHeads2 = [
        {
            title: "UL Listed Flexible Sprinkler Hose –",
            description: "The UL Listed Flexible Sprinkler Hose is a flexible connector used to connect the sprinkler head to the water supply. It is available in both braided and unbraided types and comes in various lengths (700mm, 1000mm, 1200mm, 1500mm, 1800mm). The flexibility of the hose allows for easier installation and adjustment of the sprinkler head’s position.",
        },


        {
            title: "Piping and Fittings –",
            description: "Durable and fire-resistant pipes and fittings designed to withstand the demands of various environments within Delhi NCR.",
        },

        {
            title: "Valves –",
            description: "Control, alarm, and other critical valves ensuring efficient system operation and control, compliant with Delhi NCR safety codes.",
        },


        {
            title: "Detection Systems –",
            description: "Integration of advanced smoke and heat detectors for pre-action and deluge systems, crucial for early warning in Delhi NCR buildings.",
        },

        {
            title: "Accessories –",
            description: "Comprehensive range of hoses, gauges, and other accessories for seamless installation and maintenance throughout the Delhi NCR region.",
        },



    ];






    const sprinklerHeadstypes = [
        {
            title: "Pendent Type Fire Sprinkler –",
            description: "Installed on ceilings, these sprinklers hang down and spray water downward in a circular pattern, covering the floor below.",
        },
        {
            title: "Sidewall Type Fire Sprinkler –",
            description: "Mounted on walls or ceilings, these sprinklers direct water to one side, making them ideal for narrow spaces or rooms where ceiling installation is impractical.",
        },

        {
            title: "Upright Type Fire Sprinkler –",
            description: "Installed on ceilings but face upward, these sprinklers are typically used in areas with exposed pipes and high ceilings, spraying water upwards and then outward.",
        },


        {
            title: "Concealed Type Fire Sprinkler –",
            description: "These sprinklers are hidden behind a cover plate until activated. They are aesthetically pleasing and blend into the ceiling, making them ideal for places where appearance is important.",
        },



    ];



    const sprinklerApplications = [
        {

            description: "Residential buildings (apartments, gated communities in Gurgaon, Noida, etc.)",
        },
        {

            description: "Commercial buildings (offices, shopping malls, hotels in Delhi, Faridabad, Ghaziabad)",
        },

        {
            description: " Industrial facilities (factories in the NCR industrial belts)"
        }
        ,
        {
            description: " Warehouses and logistics hubs across the region"
        }
        ,
        {
            description: " High-hazard environments (chemical plants, refineries within the NCR)"
        },
        {
            description: "Data centers and IT parks in Gurgaon and Noida"
        },
        {
            description: "Educational institutions and hospitals throughout Delhi NCR"
        }


    ];


    const sprinklerwhychoose = [

        {
            title: "Local Expertise –",
            description: "With a strong presence in Delhi NCR, we possess in-depth knowledge of local fire safety regulations and specific needs of the region.",
        },

        {
            title: "Quality Assurance –",
            description: "We supply and install only top-tier fire sprinkler systems and components, ensuring long-lasting and reliable protection for properties in Delhi NCR.",
        },

        {
            title: " Dedicated Service –",
            description: "Our experienced professionals are committed to providing exceptional service and prompt support to clients across Delhi NCR.",
        },


        {
            title: "Comprehensive Solutions for Delhi NCR –",
            description: " We offer end-to-end fire sprinkler system solutions, from initial consultation and design to professional installation, rigorous testing, and ongoing maintenance throughout the entire National Capital Region.",
        },


        {
            title: "Unwavering Commitment to Safety in Delhi NCR : –",
            description: "ZedEx Fire prioritizes the safety of lives and property in Delhi NCR, providing fire sprinkler systems that offer superior protection.",
        },




    ];


  return (
    <>
      <section>
                <div className="relative flex  h-[86vh] md:h-[60vh] w-full">
                   

                      <div className="box w-full h-full">
                               <img src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300835/fire_sprinklers_fje9ba.webp"
                  className=' hidden md:block  h-full w-full  object-center object-cover'
                  alt="  Addressable Fire Alarm System"
                  
                />

                <img
                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300891/1_iuuhca.webp"
                  className=' md:hidden  h-full w-full object-center object-cover'
                       alt="  Addressable Fire Alarm System"
                 
                />
                       </div>

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center md:text-left text-red-50 text-3xl md:text-5xl font-bold flex flex-col justify-center items-center h-full my-auto">
                            Fire Sprinkler System


                            <br />
                            <span className="text-center  text-[12px]  md:text-[15px] pt-5 w-full md:text-start uppercase">Home /  Fire Sprinkler System

                            </span>
                        </p>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-around flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-5/12 w-full">

                            <img
                                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618656/fire-sprinkler-system-2_ey3qlf.webp"
                                alt="Fire Sprinkler System"
                                className="rounded-xl w-full h-auto"
                            />

                        </div>

                        <div className="lg:w-6/12 w-full">
                            <h1 className="text-3xl font-bold mb-4 text-center md:text-left" >ZedEx Fire : Your Trusted Fire Sprinkler System Supplier, Distributor, and Installer in Delhi NCR
                            </h1>
                            <h2 className="  font-bold mb-4 text-center md:text-left" >
                                Protecting Lives and Property Across Delhi NCR with Reliable Fire Sprinkler Systems

                            </h2>
                            <p className="text-gray-700  text-justify md:text-left">
                                At ZedEx Fire, we understand the unique fire safety challenges faced by businesses and residents in the Delhi NCR region. Fire sprinkler systems are a vital element of any robust fire protection strategy, providing dependable and effective fire suppression to safeguard lives and minimize property damage. As a leading supplier, distributor, and installer of fire sprinkler systems throughout Delhi NCR, ZedEx Fire is dedicated to delivering superior quality systems and expert services tailored to your specific requirements and local regulations.

                            </p>
                        </div>
                    </div>

                    <div className="row py-5">

                        <div className="relative py-5 inline-flex items-center justify-center w-full mx-auto my-4">
                            <hr className="w-full h-px my-8 bg-gray-300 border-0" />
                            <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[16px] md:text-xl font-semibold font-sans">
                                What is a Fire Sprinkler System?
                            </h2>
                        </div>




                        <p className="text-gray-700  text-justify md:text-left">A fire sprinkler system is an active fire protection method that utilizes a network of pipes filled with water (or, in certain applications, air or nitrogen), connected to strategically positioned sprinkler heads throughout a building. Upon detecting a fire, the heat activates the sprinkler heads in the immediate vicinity, discharging water to control or extinguish the blaze. Contrary to common belief, only the sprinklers directly affected by the heat will activate, thereby limiting water damage.
                        </p>

                        <h2 className="text-2xl pt-4 font-bold mb-4 text-center md:text-left">
                            Types of Fire Sprinkler Systems Offered by ZedEx Fire in Delhi NCR

                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {sprinklertypes.map((item, index) => (
                                <li key={index} className=' py-1 text-justify md:text-left'>
                                    <span className="font-semibold  ">{item.title}</span> {item.description}
                                </li>
                            ))}
                        </ul>


                    </div>

                    <div className="mt-20">
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

                            <div className="lg:w-6/12 w-full">

                                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
                                    Key Features of ZedEx Fire Sprinkler Systems for Delhi NCR
                                </h2>

                                <ul className="  list-disc pl-6 space-y-2 text-gray-700">
                                    {sprinklerfeatures.map((item, index) => (
                                        <li key={index} className=' py-2 text-justify md:text-left'>
                                            <span className="font-semibold  ">{item.title}</span> {item.description}
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div className="lg:w-6/12 w-full">

                                <img src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618656/fire-sprinkler-system-3_w6g04z.webp"
                                    alt=" Fire Sprinkler System"
                                    className="rounded-xl w-full h-auto"
                                />

                            </div>
                        </div>

                        <div className="mt-12">

                            <div className="relative py-5 inline-flex items-center justify-center w-full mx-auto my-4">
                                <hr className="w-full h-px my-8 bg-gray-300 border-0" />
                                <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[16px] md:text-xl font-semibold font-sans">
                                    ZedEx Fire Product Range for Delhi NCR
                                </h2>
                            </div>


                            <p className="text-gray-700 py-2  text-justify md:text-left">
                                We offer an extensive selection of fire sprinkler system components readily available for supply and installation across Delhi NCR :

                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {sprinklerHeads.map((item, index) => (
                                    <li key={index} className=' py-2 text-justify md:text-left'>
                                        <span className="font-semibold ">{item.title}</span> {item.description}
                                    </li>
                                ))}



                            </ul>
                            <ul className=" list-none py-2   px-6 space-y-2 text-gray-700">
                                {sprinklerHeadstypes.map((item, index) => (
                                    <li key={index} className='text-justify px-6 md:text-left list-outside'>
                                        <span className="font-semibold "> * {item.title}</span> {item.description}
                                    </li>
                                ))}
                            </ul>

                            <ul className="list-disc py-2 pl-6 space-y-2 text-gray-700">
                                {sprinklerHeads2.map((item, index) => (
                                    <li key={index} className='text-justify md:text-left'>
                                        <span className="font-semibold ">{item.title}</span> {item.description}
                                    </li>
                                ))}
                            </ul>


                        </div>



                    </div>


                    <div className="row">

                        <div className="relative py-5 inline-flex items-center justify-center w-full mx-auto my-4">
                            <hr className="w-full h-px my-8 bg-gray-300 border-0" />
                            <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[16px] md:text-xl font-semibold font-sans">
                                Applications Across Delhi NCR
                            </h2>
                        </div>


                        <p className="text-gray-700  text-justify md:text-left ">ZedEx Fire sprinkler systems are ideal for a wide spectrum of applications within Delhi NCR, including :
                        </p>


                        <ul className="list-disc pl-6 space-y-2 text-gray-700 py-2">
                            {sprinklerApplications.map((item, index) => (
                                <li key={index} className='text-justify md:text-left'>
                                    {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="row">
                        <h2 className="text-2xl pt-3 py-2 font-bold mb-4 text-center md:text-left">
                            Why Choose ZedEx Fire as Your Fire Sprinkler System Partner in Delhi NCR ?
                        </h2>





                        <ul className="list-disc pl-6 py-2 space-y-2 text-gray-700">
                            {sprinklerwhychoose.map((item, index) => (
                                <li key={index} className='text-justify md:text-left'>
                                    <span className="font-semibold ">{item.title}</span>      {item.description}
                                </li>
                            ))}
                        </ul>



                        <div className="w-full md:p-6 rounded-xl">
                            <div className="flex items-center justify-center h-full">
                                <div className="w-full flex flex-col justify-start lg:items-start items-center gap-3">

                                    {/* Divider with Heading */}
                                    <div className="relative inline-flex py-2 items-center justify-center w-full mx-auto my-7 md:mb-0">
                                        <hr className="w-[90%] h-px my-8 bg-gray-300 border-0" />
                                        <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[15px] md:text-2xl capitalize font-semibold font-sans">
                                            Get Expert Advice for Your Fire Safety Solution Needs
                                        </h2>
                                    </div>

                                    {/* Paragraphs */}
                                    <p className="font-sans text-center  w-full">
                                        Protect your property and loved ones in Delhi NCR with a reliable fire sprinkler system from ZedEx Fire. Contact us today for a consultation and quote tailored to your specific needs and location within the National Capital Region.
                                    </p>


                                    {/* Button */}
                                    <div className="w-full flex justify-center">
                                        <a
                                            href="tel:9810216907"
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
            </section>
    
    </>
  )
}
