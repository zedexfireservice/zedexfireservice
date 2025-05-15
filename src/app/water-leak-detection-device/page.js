import Image from "next/image";

 
export default function page() {
  return (
    <>
          <section>
            <div className="relative flex  h-[86vh] md:h-[60vh] w-full">
              <img
                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300836/WLD_2_gvdijy.webp"
                alt="Water Leak Detection Device (WLD)"  
                className="object-cover rounded-lg  w-full"
                 
              />
    
              <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                <p className="text-center md:text-left text-red-50 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
                  Water Leak Detection Device (WLD)
    
                  <br />
                  
                  <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  Water Leak Detection Device (WLD)

    
                  </span>
                </p>
              </div>
            </div>
          </section>
    
          <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex justify-around flex-col lg:flex-row items-center">
          {/* Left Image */}
          <div className="lg:w-5/12 w-full">
            <div className="relative w-full h-80 lg:h-[400px] rounded overflow-hidden">
              <img
                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618664/Zedexfire2_cvaopn.webp"
                alt="Water Leak Detection Device (WLD)"
                 className="rounded-xl w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-6/12 w-full">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">
                Automatic Fire Protection
              </h1>
              <p className="text-gray-700">
                Water leaks pose a serious risk to fire protection systems,
                electrical infrastructure, and building safety. A{" "}
                <span className="font-semibold">Water Leak Detection Device (WLD)</span> is a smart solution designed to identify and prevent leaks before they cause significant damage. These devices play a vital role in safeguarding{" "}
                <span className="font-semibold">fire suppression systems, electrical rooms, data centers, and critical infrastructure</span> by ensuring water integrity and preventing fire hazards due to electrical malfunctions.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            How the Water Leak Detection Device Works
          </h1>
          <p className="text-gray-700 mb-4">
            The system continuously monitors and detects water leaks in high-risk areas through:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Advanced Sensor Technology –</span> Highly sensitive probes that detect even the smallest leaks in real time.
            </li>
            <li>
              <span className="font-semibold">Automated Alerts –</span> Immediate notifications via SMS, email, or alarm systems upon detecting a leak.
            </li>
            <li>
              <span className="font-semibold">Integration with Fire Systems –</span> Ensures fire protection systems remain operational by preventing water damage.
            </li>
            <li>
              <span className="font-semibold">Remote Monitoring & Control –</span> Cloud-based or centralized monitoring for quick response and maintenance.
            </li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Benefits of a Water Leak Detection Device (WLD)
          </h1>
          <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Prevents Fire Hazards –</span> Protects electrical systems and fire control equipment from water damage.
            </li>
            <li>
              <span className="font-semibold">Reduces Property Damage –</span> Early detection minimizes costly repairs and downtime.
            </li>
            <li>
              <span className="font-semibold">Enhances Safety & Compliance –</span> Helps meet safety regulations and prevents system failures.
            </li>
            <li>
              <span className="font-semibold">Energy & Cost Efficiency –</span> Stops water wastage and reduces maintenance expenses.
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Our WLD Solutions?
          </h1>
          <p className="text-gray-700">
            Our <span className="font-semibold">Water Leak Detection Systems</span> are tailored for{" "}
            <span className="font-semibold">commercial buildings, warehouses, industrial plants, and high-risk environments</span>, ensuring{" "}
            <span className="font-semibold">24/7 monitoring and instant response capabilities</span>. Protect your assets and enhance fire safety with our{" "}
            <span className="font-semibold">state-of-the-art WLD solutions</span>.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
