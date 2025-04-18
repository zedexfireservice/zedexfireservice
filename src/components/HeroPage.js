
'use client';

import Head from 'next/head';

import Image from 'next/image';
import { lazy, useEffect, useRef, useState } from 'react';
import Link from 'next/link'; 
 

export default function HeroPage() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);  
    return () => clearInterval(interval);
  }, [currentIndex]);



  const images3 = [
    {
      original: "/awi/cooler.webp",
      thumbnail: "/awi/cooler.webp",
      originalAlt: "HVAC System Image",
      thumbnailAlt: "HVAC System Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },

    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/airwasher_n0a5gw.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/airwasher_n0a5gw.webp",
      originalAlt: "Cooling Equipment Image",
      thumbnailAlt: "Cooling Equipment Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/9_f9bq6x_onl4kf.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/9_f9bq6x_onl4kf.webp",
      originalAlt: "Cooling Equipment Image",
      thumbnailAlt: "Cooling Equipment Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/8_l2toyp_naoo5o.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/8_l2toyp_naoo5o.webp",
      originalAlt: "Air Handling Unit Image",
      thumbnailAlt: "Air Handling Unit Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/7_xjguld_hnctpy.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/7_xjguld_hnctpy.webp",
      originalAlt: "Industrial Air Cooling System Image",
      thumbnailAlt: "Industrial Air Cooling System Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/3_hlacmx_t3cosf.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/3_hlacmx_t3cosf.webp",
      originalAlt: "Ventilation Fans Image",
      thumbnailAlt: "Ventilation Fans Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/2_pxs9ab_tp70du.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/2_pxs9ab_tp70du.webp",
      originalAlt: "Panel Air Conditioners Image",
      thumbnailAlt: "Panel Air Conditioners Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/1_vmsg3f_aqwufc.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/1_vmsg3f_aqwufc.webp",
      originalAlt: "Chiller Oil Water Coolant Image",
      thumbnailAlt: "Chiller Oil Water Coolant Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
  ];



  const logos = [
    { src: '/projects/1.webp', alt: 'Asahi-India-Glass-Ltd', width: 176, height: 112 },
    { src: '/projects/2.webp', alt: 'Bajaj', width: 126, height: 100 },
    { src: '/projects/3.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/4.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/5.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/6.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/7.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/8.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/9.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/10.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/10.png', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/101.webp', alt: 'Bajaj', width: 176, height: 112 },
  ];



  const handleButtonClick = (buttonText) => {
    console.log('Button clicked:', buttonText);  
    if (buttonText === 'Request A Quote') {
      window.location.href = '/contact-Us';  
    }
    else {
      console.log('Please chordo');
      window.location.href = 'tel:08287885885';  
    }
  };

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
    }, 5000); // Auto-play every 5 seconds

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [slides.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPos = e.clientX;
    const diff = startPos - currentPos;

    // If the user drags left
    if (diff > 50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsDragging(false);
    }

    // If the user drags right
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

  const images4 = [

    {

      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743493133/india_qejhxm.webp',
      alt: 'India',
      label: 'India',


    }
    ,

    {
      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743498724/nepal_mp0pkh.webp',
      alt: 'Nepal',
      label: 'Nepal',

    },

    {
      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743494131/bangladesh_rtj40y.webp',
      alt: 'Bangladesh',
      label: 'Bangladesh',

    },
    {
      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743499150/uae_wtdhma.webp',
      alt: 'UAE',
      label: 'UAE',

    },
    {
      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743499081/saudi_ml8qgc.webp',
      alt: 'Saudi Arab',
      label: 'Saudi Arab',

    },
    {
      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743494762/iraq_x29kze.webp',
      alt: 'Iraq',
      label: 'Iraq',

    },

  ];

  const images6 = [
    { src: '/l1.webp', alt: 'pics', width: 120, height: 120 },
    { src: '/l2.webp', alt: 'pics', width: 150, height: 150 }, // Custom size
    { src: '/GEM.webp', alt: 'pics', width: 220, height: 220 },
    { src: '/RL.webp', alt: 'pics', width: 200, height: 100 }, // Custom size
    { src: '/l3.webp', alt: 'pics', width: 120, height: 120 },
    { src: '/NHWC.webp', alt: 'pics', width: 120, height: 120 },
    { src: '/NTIC2.webp', alt: 'pics', width: 120, height: 120 },

  ];

  const images7 = [
    { src: '/l1.webp', alt: 'pics', width: 50, height: 50 },
    { src: '/l2.webp', alt: 'pics', width: 50, height: 50 },
    { src: '/GEM.webp', alt: 'pics', width: 50, height: 50 },
    { src: '/RL.webp', alt: 'pics', width: 50, height: 50 },
    { src: '/l3.webp', alt: 'pics', width: 120, height: 50 },
    { src: '/NHWC.webp', alt: 'pics', width: 119, height: 119 },
    { src: '/NTIC2.webp', alt: 'pics', width: 120, height: 120 },

  ];


  const reviewBoxes = [
    {
      id: "indiamart",
      content: (
        <a
          className="rounded-xl"
          href="https://www.indiamart.com/adhunik-cooling-system-limited/"
          rel="nofollow"
        >
          <Image
            src="/indiamartreview.webp"
            width={500}
            height={500}
            loading="lazy"
            alt="4.5 out of 5 indiamart ratings of adhunik powertech"
          />
        </a>
      ),
      classes: "border-2 rounded-xl",
    },

    {
      id: "google-widget",
      content: (
        <a
          className="rounded-xl"
          href="https://www.indiamart.com/adhunik-cooling-system-limited/"
          rel="nofollow"
        >
          <Image
            src="/googlereview.webp"
            width={500}
            height={500}
            loading="lazy"
            alt="4.5 out of 5 indiamart ratings of adhunik powertech"
          />
        </a>
      ),
      classes: "border-2 rounded-xl",

    },

    {
      id: "ambitionbox",
      content: (
        <a href="https://www.ambitionbox.com/overview/adhunik-powertech-private-limited-overview?utm_source=employer-dashboard&utm_campaign=adhunik-powertech-private-limited&utm_medium=badges">
          <img
            src="https://employer.ambitionbox.com/api/badge/225936?badge-type=ratings"
            alt="AmbitionBox rating badge"
          />
        </a>
      ),
      classes: "border-2 rounded-xl",
    },
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


  const [imageSizes, setImageSizes] = useState({});

  const handleImageLoad = (index, event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageSizes((prev) => ({
      ...prev,
      [index]: { width: naturalWidth, height: naturalHeight },
    }));
  };







  useEffect(() => {

    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);


    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const paragraphs = [
    <>
      Adhunik Powertech Private Limited delivers high-quality, personalized HVAC services  across  <strong>Delhi, Gurugram, Noida, Faridabad, Ghaziabad, Sonipat, Greater Noida, Meerut, Rohtak, Muzaffarnagar, Jaipur, Chandigarh, and the entire NCR </strong> region, as well as executing turnkey HVAC projects pan-India. With over 19 years of industry expertise, we exceed client expectations by providing comprehensive solutions from expert HVAC consulting and design, encompassing Engineering and Procurement, to detailed engineering focusing on energy-efficient and cost-effective cooling systems with minimal maintenance for industrial, institutional, commercial, and residential projects. <br />


      Our commitment extends to meticulous HVAC project execution , adhering to  <strong>NBC, CPWD, NABH</strong> guidelines, and following  <strong>ISHRAE, ASHRAE, and ISO</strong> standards, ensuring safety, precise measurements, and stringent precautions throughout the project. We specialize in turnkey HVAC projects, offering tailored solutions that prioritize efficiency and client satisfaction, both regionally and nationally.
    </>
  ];

  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {

    setShowPopup(false);

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

              <div className="w-full  px-4">
      <div className="about_right">
        <div className="about-content">
          <div className="mb-6">
            <h4 className="text-orange-500 text-sm font-semibold uppercase">About Us</h4>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Zedex Complete Solutions</h1>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">for Fire &amp; Safety</h1>
            <p className="text-gray-600 leading-relaxed">
              At Zedex, we are dedicated to providing comprehensive fire and safety solutions to safeguard lives and property. With a focus on quality, reliability, and expert installation services, we offer a wide range of fire protection systems that cater to various needs. Whether for residential, commercial, or industrial purposes, Zedex is your trusted partner in ensuring safety in case of fire emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="bi bi-check-circle text-orange-500 mt-1 mr-2"></i>
                <Link href="/fire-extinguishers" className="hover:text-orange-600">
                  Fire Extinguisher ISI Mark "Zedex"
                </Link>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-orange-500 mt-1 mr-2"></i>
                <Link href="/fire-alarm-system" className="hover:text-orange-600">
                  Addressable Fire Alarm System
                </Link>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-orange-500 mt-1 mr-2"></i>
                <Link href="/fire-sprinkler-system" className="hover:text-orange-600">
                  Fire Sprinkler System
                </Link>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-orange-500 mt-1 mr-2"></i>
                <Link href="/fire-hydrant-system" className="hover:text-orange-600">
                  Fire Hydrant System
                </Link>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-orange-500 mt-1 mr-2"></i>
                <Link href="/fire-tubing-system" className="hover:text-orange-600">
                  Fire Tubing System
                </Link>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-orange-500 mt-1 mr-2"></i>
                <Link href="/fire-door-service" className="hover:text-orange-600">
                  Fire Door Service
                </Link>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="bi bi-check-circle text-orange-500 mt-1 mr-2"></i>
                <Link href="/fire-suppression-system" className="hover:text-orange-600">
                  Fire Suppression System
                </Link>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-orange-500 mt-1 mr-2"></i>
                <Link href="/anti-rodent-system" className="hover:text-orange-600">
                  Anti Rodent System
                </Link>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-orange-500 mt-1 mr-2"></i>
                <Link href="/water-leak-detection-device" className="hover:text-orange-600">
                  Water Leak Device (WLD)
                </Link>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-orange-500 mt-1 mr-2"></i>
                <Link href="/fire-vesda-system" className="hover:text-orange-600">
                  Vesda System
                </Link>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-orange-500 mt-1 mr-2"></i>
                <Link href="/kitchen-fire-suppression-system" className="hover:text-orange-600">
                  Kitchen Fire Suppression System
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
              Read More <span className="flaticon flaticon-right-arrow" />
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
