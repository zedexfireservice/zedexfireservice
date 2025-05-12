import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>

      <section>
        <div className="relative flex  h-[86vh] md:h-[60vh] w-full">

          <img
            src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618658/inner-bg_ixhn9v.webp"
            alt="Fire suppression system"
            className="object-cover rounded-lg w-full"
          />

          <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
            <p className="text-center md:text-left text-red-50 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
              Fire suppression system


              <br />
              <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  Fire suppression system

              </span>
            </p>
          </div>
        </div>
      </section>



      <section>

        <div className=" py-4 md:py-16 bg-white">
          <div className="container mx-auto px-4">


            <div className="flex justify-around flex-col lg:flex-row items-center ">
              <div className="lg:w-5/12 w-full">

                <img

                  src="/fire-suppression-system-1.webp"
                  alt="Fire suppression system"

                  className="rounded-xl w-full h-auto"

                />

              </div>

              <div className="w-0 lg:w-1/12"></div>

              <div className="lg:w-6/12 w-full mt-8 lg:mt-0">
                <h1 className="text-3xl text-center md:text-left font-bold mb-4">Advanced Fire Suppression Systems in Delhi NCR: Your End-to-End Solution by Zedex Fire - An ISO 9001:2008 Certified Company
</h1>
                <p className="text-gray-700 text-justify md:text-left">
                 Fires pose a significant threat to businesses and properties in the bustling Delhi NCR region. At Zedex Fire, we understand the critical importance of having reliable and effective fire suppression systems in place to safeguard your valuable assets and ensure the safety of occupants. As a leading  <strong>manufacturer, supplier, dealer, and installer of fire suppression systems in Delhi NCR</strong>, Zedex Fire offers a complete suite of advanced fire protection solutions, providing unparalleled protection against fire hazards in Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad. We are proud to be an <strong>ISO 9001:2008 certified company</strong>, demonstrating our commitment to quality management and customer satisfaction.

                </p>
              </div>
            </div>


            <div className="mt-20">
              <div className="flex flex-col gap-6 lg:flex-row-reverse items-center">
                <div className="lg:w-6/12 w-full">
                  <img
                    src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618768/fire-suppression-system-2_wgxcfe.jpg"
                    alt="Key Components of a Fire Suppression System"

                    className="rounded-xl w-full h-auto"
                  />
                </div>

                <div className="lg:w-6/12 w-full mt-8 lg:mt-0">
                  <h2 className="text-3xl text-center md:text-left font-bold mb-6">Key Components of a Fire Suppression System</h2>
                  <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
                    <li>
                      <span className="font-semibold">Suppression Agent –</span> Fire-extinguishing materials such as water, foam, dry chemicals, CO₂, or clean agents like FM-200 or Inergen.
                    </li>
                    <li>
                      <span className="font-semibold">Delivery System –</span> A network of pipes, nozzles, or hoses that distributes the suppression agent, activated manually or automatically.
                    </li>
                    <li>
                      <span className="font-semibold">Control Panel –</span> Monitors and manages the system, integrating with alarms and other fire safety devices.
                    </li>
                    <li>
                      <span className="font-semibold">Detection System –</span> Smoke detectors, heat sensors, or flame detectors that trigger the system when fire is detected.
                    </li>
                    <li>
                      <span className="font-semibold">Nozzles & Discharge Devices –</span> Ensure efficient dispersion of suppression agents over the fire area.
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold mt-10 mb-6 text-center md:text-left">Benefits of Fire Suppression Systems</h2>
                  <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
                    <li>
                      <span className="font-semibold">Life Safety –</span> Rapid fire control improves evacuation time and enhances occupant safety.
                    </li>
                    <li>
                      <span className="font-semibold">Property Protection –</span> Reduces damage to buildings, equipment, and critical assets.
                    </li>
                    <li>
                      <span className="font-semibold">Insurance Benefits –</span> Many insurers offer lower premiums for properties with suppression systems.
                    </li>
                    <li>
                      <span className="font-semibold">Regulatory Compliance –</span> Meets fire safety standards for commercial and industrial buildings.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-6 text-center  md:text-left">Maintenance & Inspection</h2>
              <p className="text-gray-700 mb-4 text-center md:text-left">Regular maintenance ensures the system’s reliability -</p>
              <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold">Routine Inspections –</span> Annual or bi-annual checks to confirm all components are functioning properly.
                </li>
                <li>
                  <span className="font-semibold">Detection Device Testing –</span> Regular assessment of smoke and heat detectors for accurate system activation.
                </li>
                <li>
                  <span className="font-semibold">Agent Replacement –</span> Replenishing suppression agents as per manufacturer guidelines.
                </li>
                <li>
                  <span className="font-semibold">System Drills & Training –</span> Familiarizing staff with operation procedures through fire safety drills.
                </li>
              </ul>
            </div>

          </div>
        </div>

      </section>

    </>
  )
}
