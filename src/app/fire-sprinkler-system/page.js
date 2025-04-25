import Image from 'next/image'

export default function page() {

    const sprinklerComponents = [
        {
            title: "Sprinkler Heads -",
            description: "Activate individually when exposed to heat, releasing water directly onto the fire.",
        },
        {
            title: "Piping Network -",
            description: "Transports water from the supply source to the sprinkler heads.",
        },
        {
            title: "Control Valves -",
            description: "Regulate water flow and allow for maintenance and emergency control.",
        },
        {
            title: "Water Supply -",
            description: "Can be sourced from municipal water, a dedicated tank, or a pump system.",
        },
        {
            title: "Alarm System & Flow Switches -",
            description: "Alert occupants and emergency services when the system is activated.",
        },
    ];


    const sprinklerBenefits = [
        {
            title: "Life Safety –",
            description: "Rapid fire suppression allows occupants more time to evacuate safely.",
        },
        {
            title: "Property Protection –",
            description: "Controls fires before they cause severe structural damage.",
        },
        {
            title: "Reduced Insurance Premiums –",
            description: "Many insurers offer discounts for buildings equipped with sprinkler systems.",
        },
        {
            title: "Lower Emergency Response Costs –",
            description: "Minimizes the need for extensive firefighting efforts.",
        },
    ];

    const maintenanceItems = [
        {
            title: "Annual Inspections –",
            description: "Checking for leaks, corrosion, and proper system operation.",
        },
        {
            title: "Alarm & Flow Testing –",
            description: "Ensuring alarm systems and water pressure are functioning correctly.",
        },
        {
            title: "Sprinkler Head Maintenance –",
            description: "Keeping heads free from obstructions to ensure proper activation.",
        },
    ];
    return (
        <>
            <section>
                <div className="relative flex  h-[86vh] md:h-[60vh] w-full">
                    <Image
                        src="/fire-sprinkler01.jpg"
                        alt="interior l-shape category for design with oven and appliances"
                        fill

                        className="object-cover rounded-lg "
                        priority
                    />

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center md:text-left text-red-50 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
                            Fire Sprinkler System


                            <br />
                            <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  Fire Sprinkler System

                            </span>
                        </p>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-around flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-5/12 w-full">
                            <Image
                                src="/fire-sprinkler-system-2.jpg"
                                alt="Fire Sprinkler System"
                                width={600}
                                height={400}
                                className="rounded-xl w-full h-auto"
                            />
                        </div>
                        <div className="lg:w-6/12 w-full">
                            <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Automatic Fire Protection</h1>
                            <p className="text-gray-700  text-justify md:text-left">
                                A <span className="font-semibold">fire sprinkler system</span> is a crucial component of modern fire safety, designed to <span className="font-semibold">automatically detect and suppress fires</span> in residential, commercial, and industrial spaces. The system consists of a <span className="font-semibold">network of pipes, sprinkler heads, and a reliable water supply</span>, ensuring quick activation when heat from a fire is detected. By releasing water directly onto the flames, it helps control or extinguish fires before they spread, protecting both lives and property.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20">
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                            <div className="lg:w-6/12 w-full">
                                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Key Components of a Fire Sprinkler System</h2>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    {sprinklerComponents.map((item, index) => (
                                        <li key={index} className='text-justify md:text-left'>
                                            <span className="font-semibold  ">{item.title}</span> {item.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:w-6/12 w-full">
                                <Image
                                    src="/fire-sprinkler-system-3.jpg"
                                    alt="Sprinkler Components"
                                    width={600}
                                    height={400}
                                    className="rounded-xl w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Benefits of Fire Sprinkler Systems</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {sprinklerBenefits.map((item, index) => (
                                    <li key={index} className='text-justify md:text-left'>
                                        <span className="font-semibold ">{item.title}</span> {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Maintenance & Inspection</h2>
                            <p className="text-gray-700 mb-4 text-center md:text-left">Regular maintenance ensures optimal functionality:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {maintenanceItems.map((item, index) => (
                                    <li key={index} className='text-justify md:text-left'>
                                        <span className="font-semibold">{item.title}</span> {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
