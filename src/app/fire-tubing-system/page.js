import Image from "next/image";


export default function page() {

    const keycpmponents = [
        {

            title: 'Glow Signage',
            desc: 'Illuminated signs utilizing photoluminescent materials or integrated lighting to enhance visibility, especially in low-light or emergency situations',

        },

        {

            title: 'Fire Hosese',
            desc: 'Durable hoses capable of withstanding high pressure and resistant to abrasion and chemicals, available in various lengths and diameters to meet specific facility needs.',


        },

        {

            title: 'Hose Reels',
            desc: 'Wall-mounted devices that store hoses in a ready-to-use manner, ensuring quick deployment during emergencies.',

        },

        {

            title: 'Water Supply',
            desc: 'Components essential for controlling water flow, connecting hoses, and ensuring safe and efficient system operation.',

        },

        {

            title: 'Nozzles',
            desc: 'Attachments at the end of hoses that control the spray pattern and flow rate of water, allowing for targeted fire suppression.',

        },


        {

            title: 'Control Panels',
            desc: 'Advanced systems that monitor pressure, flow rates, and system integrity, providing real-time data and alerts.',

        },



    ]


    const advantages = [

        {
            title: 'Immediate Fire Response',
            desc: 'Enables quick access to firefighting resources, allowing personnel to address small fires before they escalate.',
        },

        {
            title: 'Accessibility',
            desc: 'Strategically placed hose reels and access points ensure swift reach to firefighting equipment, reducing response times',
        },

        {
            title: 'Cost Efficiency',
            desc: 'Investing in a fire tubing system can mitigate the financial impact of fire damage by controlling flames early and effectively.',
        },

        {
            title: 'Regulatory Compliance',
            desc: 'Many jurisdictions mandate fire protection systems in buildings, making fire tubing systems not only a safety measure but also a legal requirement.',
        },


    ]

    return (
        <>

            <section>

                <div className="relative flex  h-[86vh] md:h-[60vh] w-full">

                    {/* <img
                        src="/Zedexfire6.jpg"
                        alt="interior l-shape category for design with oven and appliances"
                        layout="fill"
                        className="object-cover rounded-lg"
                        priority
                    /> */}

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center md:text-left text-red-900 text-3xl md:text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
                            Fire Tubing System

                            <br />
                            <span className="text-center text-[12px]  md:text-[15px] pt-5 w-full md:text-start uppercase">Home /  Fire Tubing System

                            </span>
                        </p>
                    </div>
                </div>


            </section>


            <section className=" py-4 md:py-12 bg-white ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row justify-around ">
                        <div className="lg:w-5/12 w-full">
                            <div className="rounded overflow-hidden shadow-md">
                                {/* <img
                                    src="/Fire-Tubing-System1.jpg"
                                    alt="Fire Tubing System"
                                    width={600}
                                    height={400}
                                    className=" object-contain rounded-lg"
                                /> */}
                            </div>
                        </div>
                        <div className="lg:w-5/12 w-full py-4">
                            
                                <h1 className="text-3xl text-center md:text-left font-bold mb-4">Fire Tubing System</h1>

                                <p className="text-gray-700 text-justify md:text-left">
                                    A fire tubing system is an essential element of fire protection engineering, designed to detect and suppress fires across various environments. These systems employ specialized tubing filled with water or other extinguishing agents that activate upon exposure to heat, effectively controlling and extinguishing fires at their source. Commonly installed in commercial, industrial, and residential settings, fire tubing systems provide a dependable method to suppress flames and prevent fire spread.
                                </p>
                            
                        </div>
                    </div>

                    <div className="mt-12 w-full">

                        <h2 className="text-2xl font-bold mb-6 md:text-left  text-center"> Key Components of a Fire Tubing System </h2>

                        <ul className="space-y-4 text-justify md:text-left  pl-4 list-disc list-inside text-gray-700">

                            {keycpmponents.map((item, index) => (
                                <li key={index} className=" list-outside">
                                    <span className="font-semibold"> {item.title} : </span>
                                    {item.desc}
                                </li>
                            )
                            )
                            }

                        </ul>

                    </div>

                    <div className="mt-12 w-full">
                        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Advantages of Fire Tubing Systems :</h2>

                        <ul className="list-disc pl-4 list-inside space-y-4 text-gray-700">
                            {advantages.map((item, index) => (
                                <li key={index} className=" list-outside">
                                    <span className=" font-bold">{item.title} : </span>
                                    {item.desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
