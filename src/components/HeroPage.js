
'use client';


import Image from 'next/image';
import { lazy, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function HeroPage() {

  const [currentIndex, setCurrentIndex] = useState(0);



  const slides = [

    {
      id: 1,
      img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747213898/fire_extinguisher_gi0yfp.webp',
      img2: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747736205/FIRE_ALARM_SYSTEM_1_b3zj8c.webp',
     
      alt:"Addressable Fire Alarm System, Smart Detection , Faster Response , Safer Spaces."
    }
    ,

    {
      id: 2,
      img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747213898/fire_door_services_qvagrn.webp',
      img2: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747373103/mobile_view_638_x_870_px_fggarf.webp',
      alt:"Fire Sprinklers System , Your First Line of Defense Against Fire!"
     
    },
    {
      id: 3,
      img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747213898/fire_sprinkler_cqt9y8.webp',
      img2: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747373103/mobile_view_638_x_870_px_2_fxwruu.webp',
      alt:"Anti Rodent System"
    },
  
    {
      id: 6,
      img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747213899/fire_suprression_qoqajw.webp',
      img2: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747373103/mobile_view_638_x_870_px_1_eviplf.webp',
      alt:"Fire Extinguishers by Zedex Certified Protection You Can Trust — ISI Marked "
      },
    {
      id: 7,
      img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747213900/kitchen_fire_supression_oxisl2.webp',
      img2: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747736206/phone_view_coj6ny.webp',
      alt:"Kitchen Fire  Suppression System Engineered for Commercial Kitchens. Trusted by Professionals.."
       },
    {
      id: 8,
      img: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747213900/fire_hydrant_system_omh3gv.webp',
      img2: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1747736206/phone_view_1_bm2z4h.webp',
      alt:"Smart Safety Starts Here! Precision-designed hydrant systems installed by certified experts"
    
    },
     



  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const containerRef = useRef(null);


  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPos = e.clientX;
    const diff = startPos - currentPos;


    if (diff > 50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsDragging(false);
    }


    if (diff < -50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };




  const columnData = [
    [
      { label: 'Fire Extinguisher ISI Mark "Zedex"', href: '/fire-extinguishers' },
      { label: 'Addressable Fire Alarm System', href: '/addressable-fire-alarm-system-in-delhi-ncr' },
      { label: 'Fire Sprinkler System', href: '/fire-sprinkler-system' },
      { label: 'Fire Hydrant System', href: '/fire-hydrant-system' },
      { label: 'Fire Tubing System', href: '/fire-tubing-system' },
      { label: 'Fire Door Service', href: '/fire-door-service' },
    ],

    [
      { label: 'Fire Suppression System', href: '/fire-suppression-system' },
      { label: 'Anti Rodent System', href: '/anti-rodent-system' },
      { label: 'Water Leak Device (WLD)', href: '/water-leak-detection-device' },
      { label: 'Vesda System', href: '/fire-vesda-system' },
      { label: 'Kitchen Fire Suppression System', href: '/kitchen-fire-suppression-system' },
    ]
  ];


  const industries = [
    {
      href: "/fire-extinguishers",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618655/fire-extinguisher1_ogj1a9.webp",
      alt: "Fire Extinguishers for Home",
      title: "Fire Extinguisher ISI Mark 'Zedex'",
      items: "Fire extinguishers are vital for fire safety, suppressing small fires before they spread. Knowing their types and proper use ensures effective fire prevention in homes, offices, and public spaces.",
    },
    {
      href: "/addressable-fire-alarm-system-in-delhi-ncr",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618654/fire-alarm-system_tunw9g.webp",
      alt: "Addressable Fire Alarm System",
      title: "Addressable Fire Alarm System",
      items: "A fire alarm system detects smoke, heat, or fire, alerting occupants for timely evacuation. It enhances safety, minimizes damage, and ensures compliance with fire regulations.",
    },

    {
      href: "/fire-sprinkler-system",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618656/fire-sprinkler-system_xclv3j.webp",
      alt: "Fire Sprinkler System",
      title: "Fire Sprinkler System",
      items: "A fire sprinkler system is a crucial component of modern fire safety, designed to automatically detect and suppress fires in residential, commercial, and industrial spaces.",
    },

    {
      href: "/fire-hydrant-system",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618655/fire-hydrant-system_y6jt44.webp",
      alt: "Fire Hydrant System",
      title: "Fire Hydrant System",
      items: "A fire hydrant system is a vital component of fire safety infrastructure, providing firefighters with immediate access to water during emergencies.",
    },

    {
      href: "/fire-suppression-system",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618657/fire-suppression-system_dawyka.webp",
      alt: "Fire Suppression System",
      title: "Fire Suppression System",
      items: "A fire suppression system is an essential safety solution designed to control or extinguish fires in various environments, safeguarding lives, property, and assets.",
    },

    {
      href: "/anti-rodent-system",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618669/anti-rodent-system_kljufa.webp",
      alt: "Anti Rodent System",
      title: "Anti Rodent System",
      items: "Rodents threaten fire safety by damaging wires and insulation. An Anti-Rodent System prevents infestations, protecting buildings, industries, and infrastructure for safety and continuity.",
    },


    {
      href: "/water-leak-detection-device",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618664/Zedexfire2_cvaopn.webp",
      alt: "Water Leak Device (WLD)",
      title: "Water Leak Device (WLD)",
      items: "Water leaks threaten fire protection, electrical systems, and building safety. A Water Leak Detection Device (WLD) detects and prevents leaks early, minimizing damage and ensuring safety.",
    },


    {
      href: "/fire-VESDA-system",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618663/vesda-system_urtikc.webp",
      alt: "Vesda System",
      title: "Vesda System",
      items: "VESDA detects smoke early, ideal for high-risk areas like data centers and museums, providing continuous monitoring and rapid response for superior fire safety.",
    },

    {
      href: "/fire-tubing-system",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618663/tubling_ts7kec.webp",
      alt: "Fire Tubing System",
      title: "Fire Tubing System",
      items: "A fire tubing system is an essential element of fire protection engineering, designed to detect and suppress fires across various environments.",
    },

    {
      href: "/fire-door-service",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618654/Fire-Door-Service1_rmxcde.webp",
      alt: "Fire Door Service",
      title: "Fire Door Service",
      items: "Fire doors are a critical component of any fire protection system, designed to slow the spread of fire and smoke, providing valuable time for safe evacuation.",
    },

    {
      href: "/kitchen-fire-suppression-system",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618659/kitchenfire_biq0pf.webp",
      alt: "Kitchen Fire Suppression System",
      title: "Kitchen Fire Suppression System",
      items: "A commercial kitchen is a high-risk fire zone due to constant exposure to heat, grease, and flammable oils.",
    },





  ];

  const logos = [
    { src: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682207/1_n3dez9.webp', alt: 'logo of Cadila Pharmaceuticals', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682207/2_edxtax.webp', alt: 'logo of heinz compnay', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682208/4_l39gtm.webp', alt: 'logo of genesis luxury company', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682241/28_zseh41.webp', alt: 'logo of toyota', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682239/27_h8edfl.webp', alt: 'logo of silver streak', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682213/8_o1borr.webp', alt: 'logo of SAN', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682215/9_ht35t3.webp', alt: 'logo of sunbeam', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682223/15_r0hocj.webp', alt: 'logo of HG global company', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dgx5cntyb/image/upload/v1746682227/18_x6zb8e.webp', alt: 'logo of DLF', width: 176, height: 112 },

  ];



  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewBoxes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewBoxes.length - 1 : prevIndex - 1
    );
  };

  const slideData = [
    {
      name: "Rahul Verma",
      image: "AboutUs/avatar_ltfwos",
      position: "Mumbai",
      testimonial:
        "Zedex Fire Services provided and installed our entire fire safety system, and we couldn't be happier. Their team was highly knowledgeable, and the equipment installed was top-notch. It's reassuring to know our facility is in safe hands.",
    },
    {
      name: "Sonal Mehta",
      image: "AboutUs/woman_gphihr",
      position: "Delhi",
      testimonial:
        "We recently upgraded our office with fire extinguishers and alarms from Zedex Fire Services. The process was seamless and professional. They conducted a thorough risk assessment and delivered exactly what we needed. Highly reliable service!",
    },
    {
      name: "Deepak Sharma",
      image: "AboutUs/avatar_ltfwos",
      position: "Bangalore",
      testimonial:
        "Zedex Fire Services designed and implemented a custom fire suppression system for our manufacturing unit. The quality of equipment and installation was impressive. They also provided detailed training to our staff. Highly recommended!",
    },
    {
      name: "Nisha Roy",
      image: "AboutUs/woman_gphihr",
      position: "Kolkata",
      testimonial:
        "After a scare last year, we decided to overhaul our fire safety system. Zedex Fire Services delivered a complete package with fire extinguishers, hydrant systems, and emergency signage. Their attention to detail and customer support was exceptional.",
    },
    {
      name: "Ajay Thakur",
      image: "AboutUs/avatar_ltfwos",
      position: "Chandigarh",
      testimonial:
        "Our hotel recently partnered with Zedex Fire Services for an upgrade to our fire alarm and sprinkler systems. They used modern, certified equipment and ensured minimal disruption to our operations. Very professional and efficient team!",
    },
    {
      name: "Meera Joshi",
      image: "AboutUs/woman_gphihr",
      position: "Pune",
      testimonial:
        "Zedex Fire Services installed fire safety solutions in our residential complex. From consultation to installation, the experience was smooth. Their team answered every question with patience and ensured everything met the latest safety norms.",
    },
    {
      name: "Vikram Singh",
      image: "AboutUs/avatar_ltfwos",
      position: "Jaipur",
      testimonial:
        "We trust Zedex Fire Services for all our safety needs across our retail outlets. Their products are ISI-marked, durable, and easy to use. The team is always just a call away for maintenance or refills. Couldn’t ask for better service!",
    },
  ];


 
  
  
 

 
  return (
    <>


      <ToastContainer />

      <div className="row   h-auto w-full relative font-sans" >


        <div
          className="relative w-full h-screen overflow-hidden"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <div

                className="w-full h-full object-cover"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}

              >
                <img
                  src={slide.img}
                  className=' hidden md:block h-full w-full   object-center object-cover'
                  alt={slide.alt}
                  
                />

                <img
                  src={slide.img2}
                  className=' md:hidden  h-full w-full object-center object-cover'
                  alt={slide.alt}
                 
                />

              </div>


              <div className="  flex items-center h-screen bg-black bg-opacity-40">


              </div>


            </div>
          ))}


          <div className="absolute bottom-4 z-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-5 h-1 rounded-sm ${index === currentSlide ? 'bg-[#FC6C1E]' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : undefined}
              />
            ))}
          </div>


        </div>







        <section className="bg-white  md:px-11 py-16  bg-gradient-to-r from-[#efa54c] to-[#f77b56]">

          <div className=" gap-7 md:gap-16   items-center flex  flex-wrap pt-0 mt-0 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6">
            <div className="  flex justify-center w-full h-full    ">

               <img
                className="w-full h-full object-center   object-cover rounded-3xl"
                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746619560/about_thumb02_mhu7je.webp"
                alt="Zedex Complete Solutions for Fire & Safety"
               
              /> 





            </div>

            <div className="font-light text-gray-700 text-[15px]  md:text-[16px] text-center md:text-left">

              <div className="w-full   ">
                <div className="about_right">
                  <div className="about-content">
                    <div className="mb-6">

                      <h2 className="text-[#000000]  text-sm font-bold py-2 uppercase">About Us</h2>
                      <p className="text-3xl md:text-4xl font-bold text-[#212529]">Zedex Complete Solutions</p>
                      <p className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">for Fire &amp; Safety</p>
                      <p className="text-[#000000] leading-relaxed  text-justify ">
                        At Zedex, we are dedicated to providing comprehensive fire and safety solutions to safeguard lives and property. With a focus on quality, reliability, and expert installation services, we offer a wide range of fire protection systems that cater to various needs. Whether for residential, commercial, or industrial purposes, Zedex is your trusted partner in ensuring safety in case of fire emergencies.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {columnData.map((column, colIndex) => (
                        <ul key={colIndex} className="space-y-3">
                          {column.map((item, index) => (
                            <li key={index} className="flex gap-2 items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#000000] size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>




                              <Link href={item.href} className="hover:text-orange-600 text-[#000000]">
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/about-us"
                        className="  font-bold inline-flex items-center gap-2 px-6 py-3 bg-[#ED3237]  text-white rounded-lg shadow hover:bg-orange-600 transition"
                      >
                        Read More  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </section>






        <section>
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
            <p className=" font-semibold text-center mb-12">Zedex Complete Solutions for Fire & Safety</p>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  href={industry.href}
                  className="block bg-white shadow-md rounded overflow-hidden group hover:shadow-lg transition">

                  <div className="relative w-full ">

                    <img
                      src={industry.img}
                      alt={industry.alt}
                      className="transition-transform duration-300 group-hover:scale-100 object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition">
                      <div className="absolute bottom-3 right-3   bg-red-500 rounded-full" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>

                  </div>
                  <div className="p-4 h-full bg-[#f48b52] group-hover:bg-black text-white ">
                    <h3 className="text-lg font-semibold mb-2 text-center md:text-left">{industry.title}</h3>
                    <p className="text-sm   mb-2 text-justify md:text-left"> {industry.items}</p>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>



        <section>
          <div className="row  py-6">
            <div className="  inline-flex mb-4  items-center justify-center w-full mx-auto mt-3 ">

              <hr className="w-[90%] h-px my-8 bg-gray-300 border-0  " />

              <h2 className="absolute text-3xl px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  md:text-3xl text-1xl capitalize font-extrabold text-center font-sans" > OUR CLIENTS
              </h2>

            </div>
            <style jsx>{`
  @keyframes infinite-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-infinite-scroll {
    animation: infinite-scroll 15s linear infinite;
  }
`}</style>

            <div className="w-full py-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              {[...Array(2)].map((_, index) => (
                <ul
                  key={index}
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                  aria-hidden={index === 1 ? 'true' : 'false'}
                >
                  {logos.map((image, index) => (
                    <li key={index}>
                      <img loading='lazy' 
                      src={image.src}
                       className=' object-center  object-cover'
                        width={image.width}
                         height={image.height}
                         alt={image.alt} />
                    </li>
                  ))}
                </ul>
              ))}

            </div>


          </div>
        </section>


        <section>
          <div className="row h-full w-full px-5 md:py-5 bg-[#F3F4F6] ">

            <div className=" py-4 inline-flex items-center justify-center w-full mx-auto md:mt-0  md:my-7 md:mb-0">
              <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
              <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2 bg-[#F3F4F6] left-1/2  text-center text-[20px]  md:text-4xl text-1xl capitalize font-semibold ">                  Testimonials
              </h2>
            </div>
            <p className=" py-4 inline-flex items-center justify-center w-full mx-auto md:mt-0 text-center  md:my-7 md:mb-0">Rather than taking our word for it, explore what our clients have to say about the quality of our products and services.</p>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              autoplay={{
                delay: 3500,
                speed: 2800,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                888: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper z-0"
            >
              {slideData.map((slide, index) => (
                <SwiperSlide key={index} className="p-4 rounded-lg">
                  <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">

                      <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                          <h2 className="block text-white  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {slide.name}
                          </h2>

                          <div className="flex items-center gap-0 5 text-[#FBBF2C]">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-start text-white block  text-base antialiased font-light leading-relaxed text-blue-gray-900">
                          {slide.position}
                        </p>
                      </div>
                    </div>
                    <div className="p-0 mb-6">
                      <p className="block  text-white text-base text-justify antialiased font-light leading-relaxed ">
                        {slide.testimonial}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

      

      </div>

    </>
  )
}
