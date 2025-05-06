import Image from 'next/image'
 

export default function page() {

const features = [

  {
    title:'Automatic Fire Detection & Suppression',
    description:'Quick response to grease & oil fires, reducing fire hazards.'

  }
  ,
  {
    title:'Gas Shut-Off Integration',
    description:'Automatically cuts off the gas supply to prevent further fire spread.',

  },
  {
    title:'Compliance with Fire Safety Standards',
    description:'Meets NFPA and local fire safety regulations.',
  }
]

  return (
    <>
    
    <section>

         <div className="relative flex  h-[86vh] md:h-[67vh] w-full">
                            {/* <img
                                src="/kitchen-banner1.png"
                                alt="interior l-shape category for design with oven and appliances"
                                fill
        
                                className="object-cover rounded-lg "
                                priority
                            /> */}
        
                            <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                                <p className="text-center md:text-left text-red-900 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
                                Kitchen Fire Suppression System

        
        
                                    <br />
                                    <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  Kitchen Fire Suppression System

        
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
      
                      {/* <img
                      
                          src="/kitchen-banner2.png"
                        alt="Fire Suppression System"
                        width={600}
                        height={500}
                        className="rounded-xl w-full h-auto"
      
                      /> */}
      
                    </div>
      
                    <div className="w-0 lg:w-1/12"></div>
      
                    <div className="lg:w-6/12 w-full mt-8 lg:mt-0">
                      <h1 className="text-3xl text-center md:text-left font-bold mb-4">Advanced Fire Protection for Commercial Kitchens
</h1>
                      <p className="text-gray-700 text-justify md:text-left">
                      A commercial kitchen is a high-risk fire zone due to constant exposure to heat, grease, and flammable oils. Our kitchen fire suppression system is designed to detect and extinguish fires instantly, minimizing damage and ensuring the safety of your staff and premises.


                      </p>
                    </div>
                  </div>
      
      
               
      
               
      
                </div>



                <div className=" py-4 md:py-16 bg-white">
      
      
      <div className="container mx-auto px-4">

      <h2 className=' text-3xl text-center md:text-left font-bold '>
                Key Features of Our Kitchen Fire System :
                </h2>


                <div className="mt-6">


<ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">

    {features.map((items, index) => (
        <li key={index} >
            <span className="font-semibold">{items.title} – </span> {items.description}
        </li>
    ))}

</ul>

</div>

<div className="mt-6">

  <h2 className=' text-3xl text-center md:text-left font-bold'>
Benefits:
  </h2>

  <p className='  pt-4 text-justify'>
  This simple and low-maintenance system is designed to effectively safeguard kitchens in hotels, restaurants, and public institutions where the risk of fire is high.
<br />
<br />
The system offers protection for ducts, hoods, and cooking appliances through a continuous cable setup connecting all kitchen equipment with strategically placed heat detectors. Each detector unit includes four components: the detector itself, a mounting bracket, two "S" links, and a fusible link.
<br />
<br />
When heat rises to a certain threshold, the fusible link melts, releasing the cable tension and automatically activating the system. It can be triggered either automatically or manually, depending on customer requirements. The detection temperature levels are adjustable based on the specific application. Heat detectors are positioned within the plenum and activate only during a fire, while the nozzles are placed to provide maximum extinguishing coverage for all cooking surfaces.
<br />
<br />
A manual pull station enables quick human response, supporting the automatic suppression system. Upon activation, the system releases an extinguishing agent over all protected areas and simultaneously cuts off gas and electrical supplies to prevent re-ignition.
<br />
<br />
The extinguishing agent, potassium hydroxide phosphate, reacts with cooking oil and grease to form a thick foam barrier that cools the surface and blocks oxygen, effectively putting out the fire. The system’s sleek and compact components are designed to complement kitchen aesthetics and ensure that workspace functionality remains unaffected.
<br />
<br />
After activation, the kitchen can be made operational again within minutes. The system is rechargeable and can be quickly restored to full working condition after discharge.
  </p>


</div>


</div>
</div>
              
              </div>
    </section>
    
    </>
  )
}
