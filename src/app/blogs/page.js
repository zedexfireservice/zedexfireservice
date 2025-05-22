 
import Link from 'next/link'
 

export default function page() {

const blogsCards  = [

  {
    href:'/top-fire-fighting-company-in-delhi',
    img:"https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618767/topfire_jx2sgb.webp",
    alt:"Fire extinguishers image ",
    title:"Zedex Fire Company : Your Trusted Partner for Comprehensive Fire Safety Solutions in Delhi NCR and India",
    para:" Friday, 02 May 2025 by Zedex Fire Company "

  }
]

  return (
    <>

  <section>
                <div className="relative flex  h-[86vh] md:h-[67vh] w-full">

                  


  <div className="box w-full h-full">
                               <img src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747898961/zedex_Blog_banner_p2vgv0.webp"
                  className=' hidden md:block  h-full w-full  object-center object-cover'
                  alt="  Addressable Fire Alarm System"
                  
                />

                <img
                src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747899628/blog_phone_view_rylp3n.webp"
                  className=' md:hidden  h-full w-full object-center object-cover'
                       alt="  Addressable Fire Alarm System"
                 
                />
                       </div>


                    <div className="absolute w-full h-full p-9 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center md:text-center mx-auto">
                        <p className="text-center md:text-left text-red-50 text-6xl font-bold flex flex-col justify-center items-center h-full my-auto">

                      Blogs

                            <br />
                            <span className="text-center  text-[15px] pt-5 w-full md:text-start uppercase">Home /  Blogs

                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <section >

            

<div className="row">
  <div className=" px-3 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:px-24 py-12 ">

{blogsCards.map((items,index)=>(

     <Link
                  key={index}
                  href={items.href}
                  className=" block bg-white shadow-md rounded overflow-hidden group hover:shadow-lg transition"
                >

                  <div className="relative w-full ">

                    <img src={items.img}  alt={items.alt}    className="transition-transform duration-300 group-hover:scale-100 object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition">
                      <div className="absolute bottom-3 right-3   bg-red-500 rounded-full" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>

                  </div>

                  <div className="p-4 h-full  text-gray-700">
                    <h1 className="text-lg font-semibold mb-2 text-center md:text-left">{items.title}</h1>
                    <p className="text-sm   mb-2 text-justify md:text-left"> {items.para}</p>

<p className="text-md text-justify md:text-left">
<strong> Published in</strong> in Fire Suppression
</p>

<p>
 <strong>Tagged under :</strong> Fire fighting system, fire fighting system in Delhi, Fire Safety, fire suppression system
</p>
                  </div>
                </Link>

))}

  </div>
</div>


            </section>

    </>
  )
}
