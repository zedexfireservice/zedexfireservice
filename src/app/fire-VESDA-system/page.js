import Image from 'next/legacy/image'
import React from 'react'

export default function page() {
  return (
    <>
    
       <section>
            <div className="relative flex  h-[86vh] md:h-[60vh] w-full">
              {/* <img
                src="/Zedexfire3.jpg"
                alt="interior l-shape category for design with oven and appliances"
                layout='fill'
    
                className="object-cover rounded-lg"

                priority
              /> */}
    
              <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                <p className="text-center md:text-left text-red-900 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
                  Fire VESDA System

    
    
                  <br />
                  <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  Fire VESDA System

    
                  </span>
                </p>
              </div>
            </div>
          </section>
    

          <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex justify-around flex-col lg:flex-row items-center">
          {/* Left Image */}
          <div className="lg:w-5/12 w-full">
            <div className="relative w-full h-80 lg:h-[400px] rounded overflow-hidden">
              {/* <img
                src="/Zedexfire4.jpg"
                alt="Fire VESDA System"
                layout='fill'
                  className="rounded-xl w-full h-auto"
              /> */}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-6/12 w-full">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-gray-800">Fire VESDA System</h1>
              <h4 className="text-lg font-medium text-gray-700">Advanced Early Fire Detection</h4>
              <p className="text-gray-700">
                The <span className="font-semibold">VESDA (Very Early Smoke Detection Apparatus)</span> is a state-of-the-art fire detection system designed to identify{" "}
                <span className="font-semibold">smoke at its earliest stages</span>. Ideal for high-risk environments such as{" "}
                <span className="font-semibold">data centers, museums, and industrial facilities</span>, VESDA provides{" "}
                <span className="font-semibold">continuous monitoring and rapid response</span>, ensuring superior fire safety where traditional detectors may fall short.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Text Content */}
            <div className="lg:w-6/12 w-full">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Key Features of VESDA Systems
              </h1>
              
              <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">

                <li>
                  <span className="font-semibold">Ultra-Early Detection –</span> Uses laser-based technology to detect microscopic smoke particles before visible signs appear.
                </li>
                <li>
                  <span className="font-semibold">Continuous Air Monitoring –</span> Constantly samples air quality, ensuring immediate detection of potential fire threats.
                </li>
                <li>
                  <span className="font-semibold">Customizable Sensitivity –</span> Can be adjusted for different environments, from clean rooms to high-traffic areas.
                </li>
                <li>
                  <span className="font-semibold">Remote Monitoring & Alerts –</span> Allows facility managers to access system status and receive real-time notifications.
                </li>
                <li>
                  <span className="font-semibold">Seamless Integration –</span> Easily connects with existing fire alarm systems, enhancing overall fire protection.
                </li>
              </ul>
            </div>

            {/* Feature Image */}
            <div className="lg:w-6/12 w-full">
              <div className="relative w-full h-80 lg:h-[400px] rounded overflow-hidden">
                {/* <img
                  src="/Zedexfire5.jpg"
                  alt="VESDA System Diagram"
                  layout='fill'
                  className="rounded-xl w-full h-auto"
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Benefits of VESDA Systems
          </h1>
          <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Minimized False Alarms –</span> Advanced filtration reduces false triggers from dust, steam, or pollutants.
            </li>
            <li>
              <span className="font-semibold">Enhanced Safety & Response Time –</span> Early smoke detection provides more time for evacuation and firefighting measures.
            </li>
            <li>
              <span className="font-semibold">Versatile Applications –</span> Ideal for server rooms, healthcare facilities, and heritage sites, where traditional smoke detectors may be inadequate.
            </li>
            <li>
              <span className="font-semibold">Data & Compliance Support –</span> Captures air quality data, helping with facility management and regulatory compliance.
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}
