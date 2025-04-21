
'use client';


import Image from 'next/image';
import { lazy, useEffect, useRef, useState } from 'react';
import Link from 'next/link';


export default function HeroPage() {

  const [currentIndex, setCurrentIndex] = useState(0);



  const slides = [

    {
      id: 1,
      img: 'https://www.kanexfire.com/images/slider/05-Suppression-System-Banner.jpg',
      title: 'Fire Alarm System',
      content: 'At Zedex, we are dedicated to providing comprehensive fire and safety solutions to safeguard lives and property. With a focus on quality, reliability, and expert installation services',
      buttonText: 'Request A Quote',
      descriptivetext: "At Zedex, we are dedicated to providing comprehensive fire and safety solutions to safeguard lives and property. With a focus on quality, reliability, and expert installation services"

    }
    ,

    {
      id: 2,
      img: 'https://www.kanexfire.com/images/slider/03-ABC-CO2-Banner.jpg',
      title: 'Air Cooling & Air Conditioning System',
      content: <>
        Installation, Service, Repair &amp; Maintenance
        <br />
        24x7 Service Available
      </>,
      buttonText: 'CALL US NOW',
      descriptivetext: "Air Cooling & Air Conditioning System"

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
      { label: 'Addressable Fire Alarm System', href: '/fire-alarm-system' },
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
      href: "/",
      img: "/fire-extinguisher1.jpg",
      alt: "Fire Extinguishers for Home",
      title: "Fire Extinguisher ISI Mark 'Zedex'",
      items: "Fire extinguishers are vital for fire safety, suppressing small fires before they spread. Knowing their types and proper use ensures effective fire prevention in homes, offices, and public spaces.",
    },
    {
      href: "/",
      img: "/fire-alarm-system.jpg",
      alt: "Fire extinguishers for Offices",
      title: "Addressable Fire Alarm System",
      items: "A fire alarm system detects smoke, heat, or fire, alerting occupants for timely evacuation. It enhances safety, minimizes damage, and ensures compliance with fire regulations.",
    },

    {
      href: "/",
      img: "/fire-sprinkler-system.jpg",
      alt: "Fire extinguishers for Offices",
      title: "Fire Sprinkler System",
      items: "A fire sprinkler system is a crucial component of modern fire safety, designed to automatically detect and suppress fires in residential, commercial, and industrial spaces.",
    },

    {
      href: "/",
      img: "/fire-hydrant-system.jpg",
      alt: "Fire extinguishers for Offices",
      title: "Fire Hydrant System",
      items: "A fire hydrant system is a vital component of fire safety infrastructure, providing firefighters with immediate access to water during emergencies.",
    },

    {
      href: "/",
      img: "/fire-suppression-system.jpg",
      alt: "Fire extinguishers for Offices",
      title: "Fire Suppression System",
      items: "A fire suppression system is an essential safety solution designed to control or extinguish fires in various environments, safeguarding lives, property, and assets.",
    },

    {
      href: "/",
      img: "/anti-rodent-system.jpg",
      alt: "Fire extinguishers for Offices",
      title: "Anti Rodent System",
      items: "Rodents threaten fire safety by damaging wires and insulation. An Anti-Rodent System prevents infestations, protecting buildings, industries, and infrastructure for safety and continuity.",
    },


    {
      href: "/",
      img: "/water-leak-device.jpg",
      alt: "Fire extinguishers for Offices",
      title: "Water Leak Device (WLD)",
      items: "Water leaks threaten fire protection, electrical systems, and building safety. A Water Leak Detection Device (WLD) detects and prevents leaks early, minimizing damage and ensuring safety.",
    },

    {
      href: "/",
      img: "/vesda-system.jpg",
      alt: "Fire extinguishers for Offices",
      title: "Vesda System",
      items: "VESDA detects smoke early, ideal for high-risk areas like data centers and museums, providing continuous monitoring and rapid response for superior fire safety.",
    },

    {
      href: "/",
      img: "/tubling.png",
      alt: "Fire extinguishers for Offices",
      title: "Fire Tubing System",
      items: "A fire tubing system is an essential element of fire protection engineering, designed to detect and suppress fires across various environments.",
    },

    {
      href: "/",
      img: "/firedoor.png",
      alt: "Fire extinguishers for Offices",
      title: "Fire Door Service",
      items: "Fire doors are a critical component of any fire protection system, designed to slow the spread of fire and smoke, providing valuable time for safe evacuation.",
    },

    {
      href: "/",
      img: "/kitchenfire.png",
      alt: "Fire extinguishers for Offices",
      title: "Kitchen Fire Suppression System",
      items: "A commercial kitchen is a high-risk fire zone due to constant exposure to heat, grease, and flammable oils.",
    },





  ];

  const logos = [
    { src: 'https://www.adhunikpowertech.com/_next/image?url=%2Fprojects%2F3.webp&w=384&q=75', alt: 'Asahi-India-Glass-Ltd', width: 176, height: 112 },
    
    { src: 'https://www.adhunikpowertech.com/_next/image?url=%2Fprojects%2F3.webp&w=384&q=75', alt: 'Asahi-India-Glass-Ltd', width: 176, height: 112 },
    
    { src: 'https://www.adhunikpowertech.com/_next/image?url=%2Fprojects%2F3.webp&w=384&q=75', alt: 'Asahi-India-Glass-Ltd', width: 176, height: 112 },
    
    { src: 'https://www.adhunikpowertech.com/_next/image?url=%2Fprojects%2F3.webp&w=384&q=75', alt: 'Asahi-India-Glass-Ltd', width: 176, height: 112 },
    
    { src: 'https://www.adhunikpowertech.com/_next/image?url=%2Fprojects%2F3.webp&w=384&q=75', alt: 'Asahi-India-Glass-Ltd', width: 176, height: 112 },
    
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
  return (
    <>






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
                <Image src={slide.img} className=' h-full w-full object-fill' alt='ss' width="500" height="500" />

                {/* {slide.descriptivetext} */}

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







        <section className="bg-white  px-11 py-16  bg-gradient-to-r from-[#efa54c] to-[#f77b56]">

          <div className=" gap-7 md:gap-16   items-center flex  flex-wrap-reverse pt-0 mt-0 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6">
            <div className="  flex justify-center w-full h-full   ">

              <Image
                className="w-full h-full object-center   object-cover rounded-3xl"
                src="https://websiteonlinedemo.com/zedex-new/assets/images/about_thumb02.webp"
                alt="Adhunik Powertech Private Limited has been honored with the India Business Award 2025 Presented by Actress Bipasha Basu"
                width="600"
                height="960"
              />

              <div className="relative top-1/2 right-1/2 w-[20px] h-[20px] mx-auto">
                <div className="absolute animate-[bounce_3s_infinite] drop-shadow-[0_0_12px_rgba(255,124,0,0.7)]">
                  <Image
                    src="/fire-extinguisher1.jpg"
                    alt="About Shape"
                    width={200}
                    height={200}
                  />
                </div>
              </div>



            </div>
            <div className="font-light text-gray-700 text-[15px]  md:text-[16px] text-center md:text-left">

              <div className="w-full   ">
                <div className="about_right">
                  <div className="about-content">
                    <div className="mb-6">

                      <h2 className="text-[#000000]  text-sm font-bold py-2 uppercase">About Us</h2>
                      <p className="text-3xl md:text-4xl font-bold text-[#212529]">Zedex Complete Solutions</p>
                      <p className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">for Fire &amp; Safety</p>
                      <p className="text-[#000000] leading-relaxed ">
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
                <a
                  key={index}
                  href={industry.href}
                  className="block bg-white shadow-md rounded overflow-hidden group hover:shadow-lg transition"
                >

                  <div className="relative w-full h-48">
                    <Image
                      src={industry.img}
                      alt={industry.alt}
                      layout="fill"
                      objectFit="cover"
                      objectPosition='center'
                      className="transition-transform duration-300 group-hover:scale-100"
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
                    <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                    <p className="text-sm   mb-2"> {industry.items}</p>

                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>



<section>
<div className="row  py-6">
          <div className="  inline-flex mb-4  items-center justify-center w-full mx-auto mt-3 ">

            <hr className="w-[90%] h-px my-8 bg-gray-300 border-0  " />

            <h2 className="absolute text-3xl px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  md:text-3xl text-1xl capitalize font-extrabold text-center font-sans" > Proudly We Serve
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
    animation: infinite-scroll 5s linear infinite;
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
                    <Image loading='lazy' src={image.src} width={image.width} height={image.height} alt={image.alt} />
                  </li>
                ))}
              </ul>
            ))}

          </div>

      







       



      



        </div>
</section>




      </div>

    </>
  )
}
