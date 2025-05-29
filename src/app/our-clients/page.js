import Image from 'next/image'
import React from 'react'

export default function page() {

    const ourclients = [

        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682207/1_n3dez9.webp',
            title: 'cadila pharmaceuticals ltd',
        },

      
        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682207/2_edxtax.webp',
            title: 'Heinz company',
        },

        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682208/4_l39gtm.webp',
            title: 'genesis luxury comapny',
        },

        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682209/5_ujf9zp.webp',
            title: 'genesis colors comapny',
        },

      
        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682211/6_m0sg7n.webp',
            title: 'uno minda',
        },

        
        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682212/7_zvhuhl.webp',
            title: ' minda company',
        },



      
        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682213/8_o1borr.webp',
            title: ' SAN company',
        },



      
        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682215/9_ht35t3.webp',
            title: ' Sunbeam company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682216/10_oo4fz0.webp',
            title: ' max neeman company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682217/11_hfryde.webp',
            title: ' bambino company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682219/12_foo76k.webp',
            title: ' bajaj motors company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682220/13_ycwur6.webp',
            title: ' maruichi kuma company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682222/14_ymwcyi.webp',
            title: ' vodafon idea company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682223/15_r0hocj.webp',
            title: 'hg hosley global company',
        },



        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682224/16_kezd2j.webp',
            title: 'kohinoor company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682225/17_ucyytr.webp',
            title: 'shanti estate management services',
        },

        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682227/18_x6zb8e.webp',
            title: 'dlf company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682228/19_al1bpb.webp',
            title: 'Nikon Corporation',
        },



        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682230/20_dwkjoy.webp',
            title: 'bambino company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682231/21_ggbndq.webp',
            title: 'saas company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682232/22_gfiais.webp',
            title: 'lps alphine company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682234/23_oh4qm7.webp',
            title: 'compass group company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682235/24_ckmxbz.webp',
            title: 'hg hindustan gum',
        },



        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682237/25_byjund.webp',
            title: 'theeta company',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682238/26_j3heoj.webp',
            title: 'manav  rachna',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682239/27_h8edfl.webp',
            title: 'silver streak hospitals',
        },

        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682241/28_zseh41.webp',
            title: 'toyota ',
        },


        {
            img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682242/29_l7pwv4.webp',
            title: 'godrej company',
        },



      
    ]

    return (
        <>

            <section>

                <div className="relative flex  h-[86vh] md:h-[67vh] w-full">

                 <div className="box w-full h-full">
                 
                          <img
          src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1748498240/our_clients_qdlfyu.webp"
          className="hidden md:block h-full w-full object-cover object-center"
          alt="Fire Extinguisher Solutions"
        />
        <img
          src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1748498635/Our_clients_Phone_view_w4ntxa.webp"
          className="md:hidden h-full w-full object-cover object-center"
          alt="Fire Extinguisher Solutions"
        />
                       </div>

                 

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center md:text-left text-red-50 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
                            OUR CLIENTS



                            <br />
                            <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  OUR CLIENTS


                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid">


                    <div className="row flex justify-center items-center  py-4">
                        <div className="grid md:gap-7 gap-2  px-2  md:grid-cols-3 lg:grid-cols-4 grid-cols-2 ">
                            {ourclients.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl  border-[1px] border-[#ee1e257b] p-6 flex flex-col items-center text-center"
                                >
                                    <div className="mb-4 ">

                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="mx-auto w-full h-[14vh]"
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
