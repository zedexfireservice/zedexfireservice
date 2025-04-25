import Image from 'next/image'

export default function page() {

    const Section = ({ title, list }) => (
        <div>
            <h2 className="text-2xl text-center md:text-left font-bold mb-4">{title}</h2>
            <List list={list} />
        </div>
    );

    const List = ({ list }) => (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {list.map((item, idx) => (
                <li key={idx} className="text-justify md:text-left">
                    <span className="font-semibold">{item.title}</span> {item.description}
                </li>
            ))}
        </ul>

     

        
    );


    const hydrantTypes = [
        {
            title: "Wet Barrel Hydrants –",
            description: "Common in warmer climates, these hydrants store water in the barrel, allowing instant access when needed."
        },
        {
            title: "Dry Barrel Hydrants –",
            description: "Designed for colder regions, these hydrants have a valve at the base to prevent water from freezing inside the barrel."
        }
    ];

    const keyComponents = [
        { title: "Hydrant Body –", description: "A durable structure housing internal mechanisms." },
        { title: "Valve Mechanism –", description: "Controls water flow when activated." },
        { title: "Outlet Nozzles –", description: "Connect to firefighting hoses, available in various sizes." },
        { title: "Bonnet –", description: "The top section that protects operating parts and indicates flow capacity." },
        { title: "Drainage System –", description: "Prevents water from accumulating and freezing inside dry barrel hydrants." },
    ];

    const benefits = [
        { title: "Early Detection & Response -", description: "Reduces the risk of injuries and fatalities." },
        { title: "Property Protection -", description: "Minimizes damage by enabling quicker firefighting measures." },
        { title: "Regulatory Compliance -", description: "Ensures adherence to fire safety laws and insurance benefits." }
    ];

    const importance = [
        { title: "Immediate Water Access –", description: "Ensures firefighters can quickly respond to fire emergencies." },
        { title: "Enhanced Life & Property Safety –", description: "Helps control fires effectively, minimizing damage." },
        { title: "Community Preparedness –", description: "A well-maintained system strengthens overall fire readiness." },
        { title: "Insurance Benefits –", description: "Properties near hydrants may qualify for lower insurance premiums due to reduced fire risks." }
    ];

    const maintenance = [
        { title: "Routine Inspections –", description: "Checking for physical damage, rust, or obstructions." },
        { title: "Flow Testing –", description: "Assessing water pressure and supply efficiency." },
        { title: "Lubrication –", description: "Ensuring smooth operation of moving parts." },
        { title: "Winterization –", description: "Clearing drainage systems to prevent freezing in cold climates." }
    ];
    return (
        <>
            <section>
                <div className="relative flex  h-[86vh] md:h-[60vh] w-full">
                    <Image
                        src="/fire-hydrant01.jpg"
                        alt="interior l-shape category for design with oven and appliances"
                        fill

                        className="object-cover rounded-lg "
                        priority
                    />

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center md:text-left text-red-800 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
                        Fire Hydrant System


                            <br />
                            <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  Fire Hydrant System

                            </span>
                        </p>
                    </div>
                </div>
            </section>


            <section className="px-4 py-12 md:px-20 bg-white text-gray-800">
                <div className="flex flex-col justify-around lg:flex-row items-center gap-10">
                    <div className="lg:w-5/12">
                        <Image src="/Fire-Hydrants-2.png" alt="Fire Hydrant" width={500} height={400} className="rounded-xl" />
                    </div>
                    <div className="lg:w-6/12">
                        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Essential Fire Protection</h1>
                        <p className="text-gray-700  text-justify md:text-left">
                            A <span className="font-semibold">fire hydrant system</span> is a vital component of fire safety infrastructure, providing firefighters with <span className="font-semibold">immediate access to water</span> during emergencies. Designed to enhance public safety, these systems ensure a <span className="font-semibold">reliable water supply</span> for firefighting operations, helping to protect lives and property.
                        </p>
                    </div>
                </div>

                <div className="mt-12 space-y-10">
                    <Section title="Types of Fire Hydrants" list={hydrantTypes} />
                    <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
                        <div className="lg:w-6/12 space-y-10">
                            <Section title="Key Components of a Fire Hydrant System" list={keyComponents} />
                            <Section title="Benefits of Fire Alarm Systems" list={benefits} />
                        </div>
                        <div className="lg:w-6/12">
                            <Image src="/Fire-Hydrants-3.jpg" alt="Hydrant Diagram" width={600} height={400} className="rounded-xl" />
                        </div>
                    </div>
                    <Section title="Importance of Fire Hydrant Systems" list={importance} />
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Maintenance & Inspection</h2>
                        <p className="mb-4">Regular maintenance is crucial for hydrants to function correctly during emergencies. Key practices include:</p>
                        <List list={maintenance} />
                    </div>
                </div>
            </section>

        </>
    )
}
