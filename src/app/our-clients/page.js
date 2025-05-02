import Image from 'next/image'
import React from 'react'

export default function page() {

    const ourclients = [
        {
            img: '/clients/1.png',
            title: 'cadila pharmaceuticals ltd',
        },

    ]

    return (
        <>

            <section>

                <div className="relative flex  h-[86vh] md:h-[67vh] w-full">
                    <Image
                        src="/kitchen-banner1.png"
                        alt="interior l-shape category for design with oven and appliances"
                        fill

                        className="object-cover rounded-lg "
                        priority
                    />

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center md:text-left text-red-900 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
                            OUR CLIENTS



                            <br />
                            <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  OUR CLIENTS


                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">


                    <div className="row">
                        <div className="grid  grid-cols-3">
                            {ourclients.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl  border-[1px] border-[#FFAE00] p-6 flex flex-col items-center text-center"
                                >
                                    <div className="mb-4 ">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            width={500}
                                            height={500}
                                            className="mx-auto w-full h-[14vh] "
                                        />
                                    </div>
                                   
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
