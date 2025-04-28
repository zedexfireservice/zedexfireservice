import Image from 'next/image'

export default function page() {
    return (
        <>

            <section>
                <div className="relative flex  h-[86vh] md:h-[60vh] w-full">
                    <Image
                        src="/anti-rodent-system2.jpg"
                        alt="interior l-shape category for design with oven and appliances" fill
                        className="object-cover rounded-lg "
                        priority
                    />

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center md:text-left text-red-900 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">

                            Anti-Rodent System

                            <br />

                            <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  Anti-Rodent System


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
                                <Image
                                    src="/anti-rodent-system1.jpg"
                                    alt="Anti Rodent System"
                                    width={600}
                                    height={500}
                                    className="rounded-xl w-full h-auto"
                                />
                            </div>

                            <div className="w-0 lg:w-1/12"></div>

                            <div className="lg:w-6/12 w-full mt-8 lg:mt-0">
                                <h1 className="text-3xl font-bold mb-4">Anti-Rodent System</h1>
                                <p className="text-gray-700">
                                    Ultrasonic rodent repellent systems are devices designed to keep rats, mice, and other rodents away by emitting high-frequency sound waves. These ultrasonic waves, typically ranging from 20 kHz to 65 kHz, are above the range of human hearing but are audible and irritating to rodents. Marketed as a humane and non-toxic alternative to traditional pest control methods like traps, poisons, or chemicals, these devices aim to deter rodents without causing them harm.
                                </p>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="mt-20">
                            <h1 className="text-3xl font-bold mb-6">Description</h1>
                            <p className="text-gray-700 mb-6">
                                A Rodent Repellent System is an electronic device designed to safeguard enclosed spaces from rats and other rodents. It works by emitting Very High Frequency (VHF) or ultrasonic sound waves that are unpleasant to rodents, effectively driving them away. The system is a non-lethal and chemical-free solution, making it a safe and eco-friendly alternative to traditional pest control methods.
                            </p>

                            <h1 className="text-3xl font-bold mb-6">Suitable for:</h1>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Data Centers</li>
                                <li>Server Rooms</li>
                                <li>Power Room (UPS Room, Rectifier Room, Substation Room)</li>
                                <li>Telecom Switch Room</li>
                                <li>Laboratories / Chemical Room</li>
                                <li>Warehouse / Store Room</li>
                            </ul>
                        </div>

                        {/* Data Center Protection Section */}
                        <div className="mt-20">
                            <h1 className="text-3xl font-bold mb-6">
                                Keep your Data Center safe from rodents with the Rodent Repellent System.
                            </h1>
                            <p className="text-gray-700 mb-4">
                                A Rodent Repellent is a device that emits ultrasonic sound waves to create an environment that is unpleasant for rodents, effectively driving them away. This helps ensure your Data Center remains rodent-free. The high-frequency sound encourages rodents to vacate the area. According to research conducted by the University of Nebraska, the Rodent Repellent has been proven effective — rodents under observation either exited the buildings or relocated to areas not exposed to ultrasonic treatment.
                            </p>
                            <p className="text-gray-700 mb-4">
                                As a critical business facility, a Data Center must be protected from various risks — including rodent infestations. Rodent control can be effectively managed using a Rodent Repellent System. These systems are highly efficient in indoor environments such as offices, server rooms, and other enclosed spaces with minimal external disturbances. The Rodent Repellent System can be easily installed within the Data Center, with the ideal mounting location being a wall corner at a height of 3 to 10 feet from the floor for optimal coverage.
                            </p>
                        </div>

                        {/* Benefits Section */}
                        <div className="mt-20">
                            <h1 className="text-3xl font-bold mb-6">
                                Rodent Repellent System is important to achieve below outcomes:
                            </h1>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Utilizes advanced ultrasonic technology for rodent deterrence</li>
                                <li>Delivers highly effective and reliable rat and rodent control</li>
                                <li>Completely free of chemicals or toxic substances</li>
                                <li>Silent to human ears – no audible disturbance</li>
                                <li>A humane solution (PETA recommended) – repels rodents without harming or killing them</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
