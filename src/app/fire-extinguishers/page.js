import Image from 'next/image'

export default function page() {
    const extinguishers = [
        {
            title: "1. Water (Class A)",
            description:
                "Designed for ordinary combustibles like wood, paper, and textiles, water extinguishers work by cooling the fire to prevent re-ignition. They are environmentally friendly, cost-effective, and easy to use, making them ideal for homes and workplaces.",
        },
        {
            title: "2. Foam (Class A & B)",
            description:
                "Foam extinguishers effectively combat both Class A (wood, paper) and Class B (flammable liquid) fires. The foam forms a protective layer, smothering the fire and preventing re-ignition, making them perfect for industrial and commercial settings.",
        },
        {
            title: "3. Dry Powder (Class A, B, & C)",
            description:
                "A versatile choice for multiple fire types, dry powder extinguishers quickly suppress flames and prevent spread. They are effective on ordinary combustibles, flammable liquids, and electrical fires, ensuring broad fire protection.",
        },
        {
            title: "4. Carbon Dioxide (CO2) (Class B & C)",
            description:
                "Ideal for flammable liquids and electrical fires, CO2 extinguishers leave no residue, making them perfect for offices, labs, and areas with sensitive electronic equipment. They work by displacing oxygen and cooling the fire.",
        },
        {
            title: "5. Wet Chemical (Class K)",
            description:
                "Specifically designed for cooking oil and grease fires, wet chemical extinguishers cool the fire and prevent re-ignition. They are essential for commercial kitchens and food processing areas.",
        },
        {
            title: "6. Clean Agent Extinguishers",
            description:
                "These advanced extinguishers use environmentally friendly chemicals to suppress fires without leaving any residue. They are ideal for data centers, museums, and areas with delicate equipment as they protect without causing damage.",
        },
    ];

    return (
        <>
            <section>
                <div className="relative flex  h-[86vh] md:h-[60vh] w-full">
                  

                    <div className="box w-full h-full">
                               <img src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300835/fire_extinguisher_2_itdsfe.webp"
                  className=' hidden md:block  h-full w-full  object-center object-cover'
                  alt="  Addressable Fire Alarm System"
                  
                />

                <img
                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300891/2_df1czf.webp"
                  className=' md:hidden  h-full w-full object-center object-cover'
                       alt="  Addressable Fire Alarm System"
                 
                />
                       </div>

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-red-50 text-2xl text-center md:text-left md:text-5xl font-semibold flex flex-col justify-center items-center h-full my-auto">
                            Fire Extinguisher ISI Mark "Zedex"

                            <br />
                            <span className=" text-[12px] text-center md:text-[15px] pt-5 w-full md:text-start uppercase"> Home   /  Fire Extinguisher ISI Mark "Zedex"
                            </span>
                        </p>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col  justify-evenly  md:flex-row items-center gap-10">
                        {/* Left Image */}
                        <div className="lg:w-1/3 w-full">
                            <div className="relative h-full border-2 border-red-300 p-2 w-full rounded-lg overflow-hidden">
                                <img
                                    src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618669/abc-dry-powder-extinguisher_cbhshq.webp"
                                    alt="ABC Dry Powder Extinguisher Types of Fire Extinguishers & Their Benefits"
                                    className=' w-full h-full'
                                    
                                />
                            </div>

                        </div>

                        {/* Spacer */}
                        <div className="hidden lg:block w-[8.333%]" />

                        
                        <div className="lg:w-1/2 w-full">
                            <h1 className="text-3xl text-center md:text-left font-bold mb-4">Your First Line of Defense</h1>
                            <p className="text-gray-700 leading-relaxed text-justify md:text-left">
                                Fire extinguishers play a critical role in fire safety, helping to suppress
                                small fires before they spread. Understanding their different types and
                                proper usage ensures effective fire prevention and response in homes,
                                offices, and public spaces. Each extinguisher is tailored for specific fire
                                hazards and classified accordingly. Regular maintenance and correct
                                handling using the PASS method (Pull, Aim, Squeeze, Sweep) ensure they
                                function effectively when needed.
                            </p>
                        </div>
                    </div>

                    {/* Types of Extinguishers */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold mb-10 text-center">
                            Types of Fire Extinguishers & Their Benefits
                        </h2>
                        <div className="relative pb-3 h-full w-full rounded-lg overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618655/fire-extinguishers-type_vbvjzi.webp"
                                alt="Types of Fire Extinguishers & Their Benefits"
                                className=' w-full h-full'
                                
                            />
                        </div>
                        {extinguishers.map(({ title, description }, index) => (
                            <div key={index} className="mb-10 ">
                                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                <p className="text-gray-700 text-justify md:text-left">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
