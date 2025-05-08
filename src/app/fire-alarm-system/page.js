import Image from 'next/image'

export default function page() {
    const fireAlarmDetails = [
        {
          title: 'Key Components of a Fire Alarm System',
          items: [
            { label: 'Control Panel -', desc: 'The central unit that monitors and activates the alarm.' },
            { label: 'Detectors -', desc: 'Smoke, heat, and multi-sensor detectors for accurate fire detection.' },
            { label: 'Alarm Notification Devices -', desc: 'Sirens, strobe lights, and pull stations.' },
            { label: 'Control Modules -', desc: 'Facilitate communication with sprinklers and emergency lights.' },
          ],
        },
        {
          title: 'Benefits of Fire Alarm Systems',
          items: [
            { label: 'Early Detection & Response -', desc: 'Reduces the risk of injuries and fatalities.' },
            { label: 'Property Protection -', desc: 'Minimizes damage by enabling quicker firefighting measures.' },
            { label: 'Regulatory Compliance -', desc: 'Ensures adherence to fire safety laws and insurance benefits.' },
          ],
        },
      ];

    return (
        <>
            <section>
                <div className="relative flex  h-[86vh] md:h-[67vh] w-full">
                    <img
                        src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618658/inner-bg2_sbmqgm.webp"
                        alt="interior l-shape category for design with oven and appliances"
                        

                        className="object-cover rounded-lg object-center w-full h-full "
                         
                    />

                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center md:text-left text-red-900 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
                        Addressable Fire Alarm System


                            <br />
                            <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  Addressable Fire Alarm System

                            </span>
                        </p>
                    </div>
                </div>
            </section>


            <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center  justify-around gap-8">
          <div className="lg:w-5/12 w-full">
            <div className="rounded overflow-hidden">
              <img
                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618655/fire-alarm-system_02_uzvg1k.webp"
                alt="Fire Alarm System"
               
                className="rounded-2xl border-2 border-red-300"
              />
            </div>
          </div>
          <div className="lg:w-6/12 w-full">
            <div className="mb-6">
            
              <h1 className="text-3xl font-bold text-center md:text-left mb-4">
              ZedEx Addressable Fire Alarm Systems : Intelligent Fire Protection for Delhi NCR
</h1>
              <p className="text-gray-700 text-justify md:text-left">
             In the critical moments of a fire emergency, every second counts. ZedEx Fire offers state-of-the-art addressable fire alarm systems engineered for rapid and precise detection. These systems give you the vital time needed for safe evacuation and minimize potential damage. Unlike conventional systems, our addressable technology pinpoints the exact location of a fire, enabling swift and targeted responses. Discover how ZedEx's intelligent fire protection can safeguard your property and personnel in Delhi NCR.

              </p>
            </div>
          </div>
        </div>

        {/* Types of Fire Alarm Systems */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Types of Fire Alarm Systems</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className='text-justify md:text-left'><span className="font-semibold">Conventional Systems -</span> Divide the building into zones, identifying the affected area when an alarm is triggered. Ideal for smaller buildings.</li>
            <li className='text-justify md:text-left'><span className="font-semibold">Addressable Systems -</span> Assign a unique address to each detector, allowing precise identification of the unit that activated the alarm for a faster response.</li>
          </ul>
        </div>

        {/* Key Components & Benefits */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mt-16">
        <div className="lg:w-6/12 w-full space-y-10">
    {fireAlarmDetails.map((section, index) => (
      <div key={index}>
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">{section.title}</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {section.items.map((item, idx) => (
            <li key={idx}>
              <span className="font-semibold">{item.label}</span> {item.desc}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
          <div className="lg:w-6/12">
            <img
              src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618654/Fire-Alarm_qlh32m.webp"
              alt="Fire Alarm Components"
             
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Maintenance Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Maintenance & Inspection</h2>
          <p className="text-gray-700 text-justify md:text-left">
            Regular maintenance is essential for reliability. Routine inspections, detector testing, battery replacements, and record-keeping help maintain system effectiveness and compliance with safety standards.
          </p>
        </div>
      </div>
    </section>
        </>
    )
}
