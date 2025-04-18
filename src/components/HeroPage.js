
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
                <Image src={slide.img}  className=' h-full w-full object-fill' alt='ss' width="500" height="500" />

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



       

     

          <section className="bg-white  px-11 py-16 ">

            <div className=" gap-7 md:gap-16   items-center flex  flex-wrap-reverse pt-0 mt-0 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6">
            <div className="  flex justify-center w-full h-full   ">

<Image
  className="w-full h-full object-center   object-cover rounded-3xl"
  src="https://websiteonlinedemo.com/zedex-new/assets/images/about_thumb02.webp"
  alt="Adhunik Powertech Private Limited has been honored with the India Business Award 2025 Presented by Actress Bipasha Basu"
  width="600"
  height="960"
/>

</div>
              <div className="font-light text-gray-700 text-[15px]  md:text-[16px] text-center md:text-left">

              <div className="w-full   ">
      <div className="about_right">
        <div className="about-content">
          <div className="mb-6">
            <h4 className="text-[#ED3237]  text-sm font-bold py-2 uppercase">About Us</h4>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Zedex Complete Solutions</h1>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">for Fire &amp; Safety</h1>
            <p className="text-gray-600 leading-relaxed">
              At Zedex, we are dedicated to providing comprehensive fire and safety solutions to safeguard lives and property. With a focus on quality, reliability, and expert installation services, we offer a wide range of fire protection systems that cater to various needs. Whether for residential, commercial, or industrial purposes, Zedex is your trusted partner in ensuring safety in case of fire emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {columnData.map((column, colIndex) => (
        <ul key={colIndex} className="space-y-3">
          {column.map((item, index) => (
            <li key={index} className="flex gap-2 items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

              <Link href={item.href} className="hover:text-orange-600">
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

      


      








   

      </div>

    </>
  )
}
