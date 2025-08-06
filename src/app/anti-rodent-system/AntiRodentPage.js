import React from 'react'

export default function AntiRodentPage() {

    const Technical = [
        {
            title: 'Damage to Electrical Wiring',
            description: 'Leading to short circuits, malfunctions, and potential fire outbreaks.',
        },

        {
            title: 'False Fire Alarms',
            description: 'Disrupting operations, causing unnecessary panic, and eroding trust in your safety systems.',
        },

        {
            title: 'Compromised Hygiene',
            description: 'Spreading diseases and contaminating sensitive areas.',
        },

        {
            title: "Structural Damage",
            description: "Gnawing through insulation, drywall, and other building materials.",

        },
        {
            title: "Business Downtime",
            description: "Resulting in financial losses and operational disruptions."
        }

    ]


    const KeyFeatures = [
        {
            title: 'Highly Effective Rodent Deterrence',
            description: 'Tested and proven to reduce rodent activity.',
        },

        {
            title: "Protects Critical Infrastructure",
            description: "Safeguards wiring, fire detection systems, communication lines, and other essential equipment from rodent damage."
        },

        {
            title: "Prevents False Alarms",
            description: "Ensures the reliability of your fire safety systems, minimizing disruptions and unnecessary responses."
        }
        ,
        {
            title: "Safe and Humane",
            description: "The system is non-toxic, chemical-free, and does not harm rodents."
        },
        {
            title: "Wide Coverage Area",
            description: "Suitable for various property sizes and layouts across Delhi NCR."
        },
        {
            title: "Easy Installation and Low Maintenance",
            description: "Designed for seamless integration and minimal upkeep, saving you time and resources."
        },
        {
            title: "Durable and Reliable",
            description: "Built with high-quality materials to ensure long-lasting performance in the demanding conditions of Delhi NCR."
        },
        {
            title: "Cost-Effective Long-Term Solution",
            description: "Prevents costly damage, repairs, and operational downtime associated with rodent infestations."
        },
        {
            title: "Backed by Zedex Fire's Expertise",
            description: "Benefit from our years of experience and commitment to quality as an ISO 9001:2008 certified company."
        }


    ]

    const Why = [
        {
            title: 'Proven Expertise',
            description: 'As a leading provider of fire safety solutions and an ISO 9001:2008 certified company, we adhere to the highest standards of quality and reliability.',
        },

        {
            title: "Tailored Solutions",
            description: "We understand that every property in Delhi NCR has unique needs. Our experts will assess your specific requirements and recommend the most effective Anti-Rodent System for your situation.",

        }
        ,

        {
            title: "Comprehensive Support",
            description: " From initial consultation and installation to ongoing support, we are committed to ensuring your complete satisfaction."
        }
        ,
        {
            title: "Local Presence in Delhi NCR:",
            description: "We have a strong presence in the Delhi NCR region, allowing us to provide prompt and efficient service."
        }

    ]


    return (
        <>
            <section>
                <div className="relative flex  h-[86vh] md:h-[60vh] w-full">


                    <div className="box w-full h-full">
                        <img src=" https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300835/Anti_Rodent_System_2_savp7r.webp"
                            className=' hidden md:block  h-full w-full  object-center object-cover'
                            alt="  Addressable Fire Alarm System"

                        />

                        <img
                            src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300893/7_z7pbmx.webp"
                            className=' md:hidden  h-full w-full object-center object-cover'
                            alt="  Addressable Fire Alarm System"

                        />
                    </div>

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center md:text-left text-red-50 text-3xl md:text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">

                            Anti-Rodent System

                            <br />

                            <span className="text-center text-[12px]  md:text-[15px] pt-5 w-full md:text-start uppercase">Home /  Anti-Rodent System


                            </span>
                        </p>
                    </div>
                </div>
            </section>


            <section>
                <div className="py-16 bg-white">
                    <div className="container mx-auto px-4">

                        {/* About Section */}
                        <div className="flex flex-col lg:flex-row items-center">
                            <div className="lg:w-5/12 w-full">
                                <img
                                    src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618669/anti-rodent-system1_llhvue.webp"
                                    alt="Anti Rodent System"
                                    className="rounded-xl w-full h-auto"
                                />


                            </div>

                            <div className="w-0 lg:w-1/12"></div>

                            <div className="lg:w-6/12 w-full mt-8 lg:mt-0">
                                <p className=" text-center md:text-left text-2xl md:text-3xl font-bold mb-4">Keep Your Premises Safe and Secure : Introducing the Advanced</p>
                                <h1 className="md:text-2xl font-bold mb-4 text-center md:text-left ">Zedex Anti-Rodent System in Delhi NCR
                                </h1>
                                <p className="text-gray-700 py-2  text-justify md:text-left">

                                    Rodents pose a significant threat to the safety and operational efficiency of your property, especially when it comes to critical fire safety systems. They can gnaw through wiring, trigger false alarms, create fire hazards, and compromise hygiene. Don't let these unwanted intruders put your assets and people at risk.

                                </p>
                                <p className="text-gray-700 py-2 text-justify md:text-left" >
                                    Introducing the <strong>Zedex Anti-Rodent System</strong>, your reliable and effective solution to combat rodent infestations in Delhi NCR. As an <strong>ISO 9001:2008 certified company</strong>, Zedex Fire is committed to providing you with the highest quality and most dependable safety solutions. Our advanced <strong>Anti-Rodent System</strong> is specifically designed to protect your valuable infrastructure from the damaging effects of rodents, ensuring uninterrupted operation and minimizing potential hazards.

                                </p>

                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="mt-20">
                            <h2 className=" text-center md:text-left md:text-2xl font-bold mb-6">The Rodent Threat : Why You Need a Robust Anti-Rodent System in Delhi NCR
                            </h2>
                            <p className="text-gray-700 mb-6 text-center md:text-left">
                                Delhi NCR's dynamic environment can unfortunately provide ample opportunities for rodent populations to thrive. These pests can cause:

                            </p>


                            <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">

                                {Technical.map((items, index) => (
                                    <li key={index} className=" py-1">
                                        <span className="font-semibold">{items.title} – </span> {items.description}
                                    </li>
                                ))}

                            </ul>

                            <p className="text-gray-700 md:mb-6 py-5  text-center md:text-left">
                                The <strong>Zedex Anti-Rodent System</strong> offers a proactive approach to prevent these issues before they escalate.
                            </p>
                        </div>

                        {/* Data Center Protection Section */}
                        <div className=" mt-10 md:mt-20">
                            <h2 className="md:text-2xl text-center md:text-left font-bold mb-6">
                                Introducing the Intelligent Zedex Anti-Rodent System : Your Shield Against Rodents in Delhi NCR

                            </h2>
                            <p className="text-gray-700 text-justify md:text-left mb-4 py-3">
                                Our state-of-the-art <strong>Anti-Rodent System</strong> utilizes advanced ultrasonic technology to effectively deter rodents without causing harm. This ensures a safe and humane solution for your property in Delhi NCR.

                            </p>

                            <p className="text-gray-700 mb-6 text-center md:text-left md:text-2xl font-semibold">
                                Key Features and Benefits of the Zedex Anti-Rodent System :

                            </p>


                            <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">

                                {KeyFeatures.map((items, index) => (
                                    <li key={index} className=" py-1">
                                        <span className="font-semibold">{items.title} – </span> {items.description}
                                    </li>
                                ))}

                            </ul>

                        </div>




                        <div className=" mt-10 md:mt-20">
                            <h2 className=" text-center md:text-left md:text-2xl font-bold mb-6">
                                Why Choose Zedex Fire for Your Anti-Rodent System Needs in Delhi NCR?

                            </h2>
                            <p className="text-gray-700 text-justify mb-4 py-2">
                                When it comes to protecting your property from the detrimental effects of rodents, you need a partner you can trust. Zedex Fire offers

                            </p>




                            <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">

                                {Why.map((items, index) => (
                                    <li key={index} className=" py-1">
                                        <span className="font-semibold">{items.title} – </span> {items.description}
                                    </li>
                                ))}

                            </ul>

                        </div>


                        <div className="w-full md:p-7 rounded-xl">
                            <div className="flex items-center justify-center h-full">
                                <div className="w-full flex flex-col justify-start lg:items-start items-center gap-3">

                                    {/* Divider with Heading */}
                                    <div className=" relative inline-flex py-2 items-center justify-center w-full mx-auto mt-10  my-4 md:mb-0">
                                        <hr className="w-[90%] h-px my-8 bg-gray-300 border-0" />
                                        <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[14px] md:text-2xl capitalize font-semibold font-sans">
                                            Protect Your Property Today with the Zedex Anti-Rodent System in Delhi NCR

                                        </h2>
                                    </div>

                                    {/* Paragraphs */}

                                    <p className="font-sans md:text-center  w-full py-4 text-justify "  >
                                        Don't wait until rodents cause costly damage or compromise your safety. Invest in the proactive protection offered by the Zedex Anti-Rodent System.
                                        Ensure the safety and longevity of your infrastructure with the reliable Zedex Anti-Rodent System – your trusted partner in Delhi NCR.
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
