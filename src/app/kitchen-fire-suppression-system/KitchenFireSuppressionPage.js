
export default function KitchenFireSuppressionPage() {

     const features = [

    {
      title: 'Uncompromising Safety',
      description: 'Our primary focus is on protecting lives and preventing injuries. Our Kitchen Fire Suppression Systems are designed for quick and effective fire suppression, giving you peace of mind .'

    }
    ,
    {
      title: 'Minimize Business Disruption',
      description: ' A kitchen fire can lead to significant downtime and financial losses. Our systems are designed to contain fires rapidly, minimizing damage and allowing for a quicker return to normal operations . ',

    },
    {
      title: 'Compliance with Regulations',
      description: ' We ensure that our Kitchen Fire Suppression Systems comply with all relevant Indian safety standards and regulations applicable in Delhi NCR, helping you meet insurance requirements and legal obligations .',
    }
    ,
    {
      title: "Tailored Solutions for Delhi NCR Kitchens",
      description: "We understand that every kitchen is unique. Our expert team works closely with you to design and install a Kitchen Fire Suppression System that perfectly suits your specific layout, cooking equipment, and fire hazards in the Delhi NCR region."
    }

    , {
      title: "Advanced Technology",
      description: "Our systems utilize the latest fire detection and suppression technologies, including efficient extinguishing agents specifically formulated for kitchen fires."
    },

    {
      title: "Expert Installation and Maintenance in Delhi NCR",
      description: "Our certified technicians provide professional installation services across Delhi, Noida, Gurgaon, Faridabad, and other areas within the NCR. We also offer comprehensive maintenance and inspection services to ensure your system remains in optimal working condition."
    },
    {
      title: "Trusted Expertise",
      description: "With years of experience in fire safety, Zedex Fire, an ISO 9001:2008 Certified company, is a trusted provider of Kitchen Fire Suppression Systems for numerous businesses throughout Delhi NCR, demonstrating our commitment to quality and customer satisfaction. "
    }



  ]

  const How = [

    {
      title: 'Detection',
      description: 'Heat sensors or fusible links strategically placed above cooking appliances quickly detect a fire.'

    }
    ,
    {
      title: 'Actuation',
      description: 'Upon detection, the system automatically releases the extinguishing agent. A manual release lever also allows for immediate intervention. ',

    },
    {
      title: 'Suppression',
      description: 'The extinguishing agent, typically a wet chemical specifically designed for grease fires, is discharged through strategically positioned nozzles, effectively suppressing the flames and cooling the affected area .',
    }
    ,
    {
      title: "Containment",
      description: "The rapid suppression helps to contain the fire, preventing it from spreading to other areas of your kitchen and building."
    }



  ]


  const Applications = [

    {

      description: 'Restaurants (Fine Dining, Casual, QSR)'

    }
    ,
    {

      description: 'Hotels and Resorts',

    },
    {

      description: ' Hospitals and Healthcare Facilities',
    }
    ,
    {

      description: " School and University Cafeterias"
    }
    ,
    {

      description: " Food Courts and Malls"
    }

    ,
    {

      description: " Catering Companies"
    }
    ,
    {

      description: " Industrial Kitchens"
    }
    ,
    {

      description: " Cloud Kitchens"
    }



  ]

  
  return (
    <>
         <section>

        <div className="relative flex  h-[86vh] md:h-[67vh] w-full">


          <div className="box w-full h-full">
            <img src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1748498085/kitchen_supression_bzvbhu.webp"
              className=' hidden md:block  h-full w-full  object-center object-cover'
              alt="  Kitchen Fire Suppression System"

            />

            <img
              src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747300892/5_kghh1c.webp"
              className=' md:hidden  h-full w-full object-center object-cover'
              alt="Kitchen Fire Suppression System"

            />
          </div>

          <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
            <p className="text-center md:text-left text-red-50 text-3xl md:text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">
              Kitchen Fire Suppression System



              <br />
              <span className="text-center  text-[10px]  md:text-[15px] pt-5 w-full md:text-start uppercase">Home /  Kitchen Fire Suppression System


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

                  src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618659/kitchenfire_biq0pf.webp"
                  alt="Advanced Fire Protection for Commercial Kitchens"

                  className="rounded-xl w-full h-auto"

                />

              </div>

              <div className="w-0 lg:w-1/12"></div>

              <div className="lg:w-6/12 w-full mt-8 lg:mt-0 p-6">
                <h1 className=" text-2xl md:text-3xl text-center md:text-left font-bold mb-4">Zedex Fire: Superior Kitchen Fire Suppression Systems in Delhi NCR
                </h1>
                <p className=' py-2 text-sm font-bold text-center md:text-left'>Protect Your Commercial Kitchen with the Most Reliable Kitchen Fire Suppression System in Delhi NCR
                </p>
                <p className="text-gray-700 text-md text-justify ">
                  Fires in commercial kitchens pose a significant threat to lives, property, and business continuity. The unique hazards of grease, high temperatures, and flammable liquids demand specialized fire protection. At Zedex Fire, an ISO 9001:2008 Certified company, we understand these risks and offer cutting-edge Kitchen Fire Suppression Systems specifically designed for the demanding environments of kitchens across Delhi NCR.  <br /> <br />
                  Our advanced Kitchen Fire Suppression Systems are engineered to provide rapid detection and swift suppression of kitchen fires, minimizing damage and ensuring the safety of your staff and premises. As an ISO 9001:2008 Certified provider, we are committed to delivering tailored solutions that meet the specific needs of your kitchen, whether it's a bustling restaurant in Connaught Place, a large industrial kitchen in Gurgaon, or a catering facility in Noida.


                </p>
              </div>
            </div>






          </div>



          <div className=" py-4 md:py-16 bg-white">


            <div className="container mx-auto px-4">

              <h2 className=' text-2xl md:text-3xl py-2 text-center md:text-left font-bold '>
                Why Choose Zedex Fire for Your Kitchen Fire Suppression System in Delhi NCR ?

              </h2>


              <div className="">


                <ul className="list-disc py-4 text-justify md:text-left pl-5 space-y-4 text-gray-700">

                  {features.map((items, index) => (
                    <li key={index} className=" py-2">
                      <span className="font-semibold">{items.title} – </span> {items.description}
                    </li>
                  ))}

                </ul>

              </div>

              <div className="mt-6">

                <h2 className=' text-2xl md:text-3xl text-center md:text-left font-bold'>
                  How Our Kitchen Fire Suppression Systems Work :
                </h2>

                <p className='  pt-4 text-justify py-4'>
                  Our Kitchen Fire Suppression Systems are designed for automatic and manual activation. In the event of a fire :
                </p>

                <ul className=" list-decimal text-justify md:text-left pl-5 space-y-3 text-gray-700">

                  {How.map((items, index) => (
                    <li key={index} >
                      <span className="font-semibold">{items.title} – </span> {items.description}
                    </li>
                  ))}

                </ul>


                <h2 className=' text-2xl md:text-3xl text-center md:text-left font-bold py-4'>
                  Applications for Our Kitchen Fire Suppression Systems in Delhi NCR :
                </h2>

                <p className='  pt-4 text-justify'>
                  Our Kitchen Fire Suppression Systems are ideal for a wide range of commercial kitchens in Delhi NCR, including :
                </p>

                <ul className="list-disc text-justify md:text-left pl-5  text-gray-700">

                  {Applications.map((items, index) => (
                    <li key={index} className=" py-2" >
                      {items.description}
                    </li>
                  ))}

                </ul>

                <h2 className=' md:text-2xl text-center py-3  font-semibold'>
                  Protect Your Investment and Ensure Safety with Zedex Fire's ISO 9001:2008 Certified Kitchen Fire Suppression Systems in Delhi NCR.

                </h2>

                <p className='  pt-4 text-justify md:text-center '>
                  Don't wait for a fire to put your business at risk. Invest in a reliable Kitchen Fire Suppression System from Zedex Fire and gain the peace of mind that comes with knowing your kitchen in Delhi NCR is protected by a quality-focused and certified provider.
                </p>

                <div className="w-full md:p-7 rounded-xl">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-full flex flex-col justify-start lg:items-start items-center gap-3">

                      {/* Divider with Heading */}
                      <div className="relative inline-flex py-2 items-center justify-center w-full mx-auto my-7 md:mb-0">
                        <hr className="w-[90%] h-px my-8 bg-gray-300 border-0" />
                        <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[15px] md:text-2xl capitalize font-semibold font-sans">
                          Get Expert Advice for Your Fire Safety Solution Needs
                        </h2>
                      </div>

                      {/* Paragraphs */}
                      <p className="font-sans text-justify md:text-center py-3  w-full">
                        Zedex Fire - Your Trusted ISO 9001:2008 Certified Partner for Kitchen Fire Safety in Delhi NCR.
                        Contact us today for a free consultation and quote for your Kitchen Fire Suppression System in Delhi NCR.


                      </p>


                      {/* Button */}
                      <div className="w-full flex justify-center">
                        <a
                          href="tel:9999883999"
                          className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white"
                        >
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                          <span className="relative">Contact Zedex Fire Expert</span>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>

              </div>


            </div>
          </div>

        </div>
      </section>

    
    </>
  )
}
