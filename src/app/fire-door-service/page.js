import Image from "next/image";


export default function page() {

    const keyfeature =
        [
            {
                title: 'Fire Door Installation',
                description: 'High-quality fire-rated doors tailored to your building’s safety requirements.',
            },

            {
                title: 'Inspection & Certification',
                description: 'Regular checks to ensure compliance with national fire safety regulations.',
            },


            {
                title: 'Hose Reels',
                description: 'Wall-mounted devices that store hoses in a ready-to-use manner, ensuring quick deployment during emergencies.',
            },


            {
                title: 'Repair & Maintenance',
                description: 'Fixing damaged fire doors to maintain their integrity and functionality.',
            },

            {
                title: 'Sealing & Smoke Control Solutions',
                description: 'Enhancing fire doors with proper sealing to prevent smoke infiltration',
            },

        ]

    const fireRating = [

        {
            title: 'Time Rating',
            description: 'Fire doors are designed to resist fire for a specified time period (e.g., 60, 90, or 120 minutes), maintaining structural integrity, thermal insulation, and preventing flame spread during that duration.',
        },
        {
            title: 'Testing Standards',
            description: 'Fire door performance is verified through strict testing procedures based on recognized standards such as IS 3614, BS 476 Part 20 & 22 (ISO 834-1), and evaluations by institutions like CBRI.',
        }
    ]



    const Materials = [
        {
            title: 'Steel Fire Doors',
            description: 'Constructed using galvanized steel sheets, these doors may feature double-skin designs with internal insulation like honeycomb cores or mineral wool for enhanced fire resistance.',
        },

        {


            title: 'Wooden Fire Doors',
            description: 'Crafted from durable hardwood, these doors often include calcium silicate boards and intumescent seals to improve fire protection performance.'

        },
        {


            title: 'Vision Panels',
            description: 'Fire-rated glass, such as borosilicate, can be integrated into doors to provide visibility while maintaining fire safety standards.'

        }
    ]

    const Construction = [
        {
            title: 'Frame',
            description: 'Made from galvanized steel, fire door frames usually feature a double rebate profile to ensure a secure and airtight fit.'
        },

        {
            title: 'Shutter/Leaf',
            description: 'The door leaf is typically a smooth, double-skin structure filled with insulating materials such as mineral wool or honeycomb for optimal fire protection'
        }
        ,
        {

            title: 'Intumescent Seals',
            description: 'These seals are installed along the edges of the door and frame, expanding under heat to close gaps and block smoke and flames during a fire',
        },

        {
            title: 'Hardware',
            description: 'Fire-rated hinges, locks, and door closers are included, pre-installed or prepared at the factory to simplify on-site assembly.',
        },
        {
            title: 'Insulation',
            description: 'Fire doors are internally insulated using fire-resistant materials like mineral wool or honeycomb to improve thermal and flame resistance.'
        },
        {

            title: 'Finish',
            description: 'The door and frame surfaces are finished with durable powder coating or wood stain and lacquer for both protection and aesthetics.',
        }


    ]

    const indianStandard = [
        {
            title: 'IS 3614',
            description: 'This Indian Standard outlines the requirements and specifications for fire-check doors, including both metal-clad and rolling shutter types',
        }
        ,
        {
            title: 'CBRI',
            description: 'The Central Building Research Institute (CBRI) is an accredited authority in India for testing and certifying fire doors to ensure they meet safety standards',
        },
        {
            title: 'Other Certifications',
            description: ' Fire doors can also carry certifications from reputed international bodies such as Warrington, TBW, and Underwriters Laboratories (UL), ensuring global compliance.',
        },

    ]

    const dimension = [
        {
            title: 'Shutter Thickness',
            description: 'Typical fire door shutters come in thicknesses ranging from 46mm to 63mm, depending on the fire rating and application.',
        }
        ,
        {
            title: 'Frame Dimensions',
            description: 'Standard frame profiles often measure around 143 x 57 mm, but may vary based on design specifications.',
        }
        ,
        {
            title: 'Vision Lite',
            description: 'Glass panels, also known as vision lites, can be added based on the manufacturer’s guidelines, typically using a secure clip-on arrangement.',

        },
        {
            title: 'Pair of Doors',
            description: 'For double door configurations, integrated astragals are included on the meeting stiles of both active and inactive leaves to ensure a proper seal.',
        },

        {
            title: 'Half Frames',
            description: 'Fire doors can be fitted with half (corner) frames, making them adaptable to walls of varying thicknesses.',

        }

    ]

    return (
        <>

            <section>

                <div className="relative flex  h-[86vh] md:h-[60vh] w-full">
                    <img
                        src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618667/Zedexfire7_f5p0fq.webp"
                        alt="Fire Door Service"
                        className="object-cover rounded-lg  w-full"
                    />

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-red-900 text-3xl md:text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
                            Fire Door Service

                            <br />
                            <span className=" text-[12px] text-center md:text-[15px] pt-5 w-full md:text-start uppercase"> Home   /  Fire Door Service

                            </span>
                        </p>
                    </div>
                </div>

            </section>


            <section>

                <div className=" py-4 md:py-16 bg-white">
                    <div className="container mx-auto px-4">


                        <div className="flex justify-around flex-col lg:flex-row items-center ">

                            <div className="lg:w-6/12 w-full">

                                <img

                                    src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618654/Fire-Door-Service1_rmxcde.webp"
                                    alt="Fire Door Service"
                                    className="rounded-xl w-full h-auto"

                                />

                            </div>

                            <div className="w-0 lg:w-1/12">

                            </div>

                            <div className="lg:w-6/12 w-full mt-8 lg:mt-0">
                                <h1 className="text-3xl text-center md:text-left font-bold mb-4">Ensuring Safety & Compliance with High-Quality Fire Doors
                                </h1>
                                <p className="text-gray-700 text-justify md:text-left">
                                    Fire doors are a critical component of any fire protection system, designed to slow the spread of fire and smoke, providing valuable time for safe evacuation. Our fire door solutions meet the highest safety standards, ensuring protection for commercial, industrial, and residential properties.

                                </p>
                            </div>

                        </div>


                        <div className="mt-20">
                            <div className="flex flex-col gap-6 lg:flex-row-reverse items-center">
                                <div className="lg:w-6/12 w-full">
                                    <img
                                        src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618653/fire_door_ifrr7x.webp"
                                        alt="Fire Door Service"
                                      
                                        className="rounded-xl w-full h-auto"
                                    />
                                </div>

                                <div className="lg:w-6/12 w-full mt-8 lg:mt-0">
                                    <h2 className="text-3xl text-center md:text-left font-bold mb-6">
                                        Key Features of Our Fire Door Service
                                    </h2>
                                    <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">


                                        {keyfeature.map((items, index) => (

                                            <li key={index}>
                                                <span className="font-semibold" > {items.title} –</span> {items.description}
                                            </li>


                                        ))}


                                    </ul>

                                    <h2 className="text-3xl font-bold mt-10 mb-6 text-center md:text-left"> Why Choose Our Fire Door Services? </h2>
                                    <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
                                        <li>
                                            Certified fire doors meeting national & international standards
                                        </li>

                                        <li>
                                            Expert technicians for installation & maintenance
                                        </li>
                                        <li>
                                            Enhanced fire safety & compliance for all properties
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20">
                            <h2 className="text-3xl font-bold mb-6 text-center  md:text-left">Fire Resistance Rating :</h2>

                            <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">

                                {fireRating.map((items, index) => (
                                    <li key={index} >
                                        <span className="font-semibold">{items.title} –</span> {items.description}
                                    </li>
                                ))}


                            </ul>
                        </div>


                        <div className="mt-20">

                            <h2 className="text-3xl font-bold mb-6 text-center  md:text-left">
                                Materials :
                            </h2>

                            <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">

                                {Materials.map((items, index) => (
                                    <li key={index} >
                                        <span className="font-semibold">{items.title} – </span> {items.description}
                                    </li>
                                ))}

                            </ul>

                        </div>


                        <div className="mt-20">
                            <h2 className=" text-3xl font-bold mb-6 text-center md:text-left">
                                Construction and Features :

                            </h2>

                            <ul className=" list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">

                                {Construction.map((items, index) => (
                                    <li key={index}>
                                        <span className=" font-semibold">
                                            {items.title} -
                                        </span>
                                        {items.description}
                                    </li>
                                ))}

                            </ul>
                        </div>


                        <div className="mt-20">

                            <h2 className=" text-3xl font-bold mb-6 text-center md:text-left">
                                Indian Standards and Certifications :


                            </h2>

                            <ul className=" list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
                                {indianStandard.map((items, index) => (
                                    <li key={index}>
                                        <span className=" font-bold">
                                            {items.title} -

                                        </span>{items.description}

                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-20">
                            <h2 className=' text-3xl font-bold mb-6 text-center md:text-left'>
                            Specific Dimensions and Types :
                            </h2>

                            <ul className=" list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
                            {dimension.map((items, index) => (
                                    <li key={index}>
                                        <span className=" font-bold"> {items.title} - </span>
                                        {items.description}
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
