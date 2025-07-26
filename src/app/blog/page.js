
// Example in app/blog/page.js
import Link from 'next/link'

export default function BlogHome() {
  const blogsCards = [
    
    {
      href: '/blog/top-fire-fighting-company-in-delhi',
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618767/topfire_jx2sgb.webp",
      alt: "Fire extinguishers image",
      title: "Zedex Fire Company: Your Trusted Partner for Comprehensive Fire Safety Solutions in Delhi NCR and India",
      para: "May 2025 by Zedex Fire Company",
      pub: "Fire Suppression",
      tag: "Fire Safety, Fire Fighting Company, Delhi NCR"
    },

    {
      href: '/blog/fire-extinguishers-guide',
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1748510430/WhatsApp_Image_2025-05-29_at_13.33.00_11zon_pyefty.webp",
      alt: "Fire extinguishers image",
      title: "The Ultimate Guide to Fire Extinguishers: Types, Uses, and Essential Safety for Every Indian Home & Business",
      para: "May 2025 by Zedex Fire Company",
      pub: "Fire Extinguishers",
      tag: "Fire fighting system, Fire Safety, Fire Extinguishers"
    },

    {
      href: '/blog/fire-alarm-system',
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1749032051/new_1_avqs6t.webp",
      alt: "Fire extinguishers image",
      title: "What is a Fire Alarm System? Your Complete Guide to Safety & Protection with Zedex Fire",
      para: "June 2025 by Zedex Fire Company",
      pub: "Fire Alarm System",
      tag: "Fire fighting system, Fire Safety, Fire Extinguishers"
    },


    {
      href: '/blog/fire-extinguisher-supplier-and-dealer-in-gurugram',
      img: "https://images.unsplash.com/photo-1715498486443-62e8a5d04d6a?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Fire extinguishers image",
      title: "Fire Extinguisher Supplier & Dealer in Gurugram | Zedexfire",
      para: "July 2025 by Zedex Fire Company",
      pub: "Fire Safety Equipment",
      tag: "Fire Extinguishers, Gurugram Fire Safety, ISI Certified, Haryana Fire Act Compliance"
    },



    {
      href: '/blog/fire-hydrant-system-in-gurugram',
      img: "https://plus.unsplash.com/premium_photo-1679826780007-6435a693bdff?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Fire hydrant system installation in Gurugram",
      title: "Fire Hydrant System Gurugram: Design, Installation & Maintenance | Zedexfire",
      para: "July 2025 by Zedex Fire Company",
      pub: "Fire Safety Systems",
      tag: "Fire Hydrants, Gurugram Fire Safety, ISI Certified, Haryana Fire Act 2022 Compliance"
    }


,
{
  href: '/blog/fire-sprinkler-system-in-gurugram',
  img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt: "Fire sprinkler system installation in Gurugram",
  title: "Fire Sprinkler System in Gurugram: Design, Installation & Maintenance | Zedexfire",
  para: "July 2025 by Zedex Fire Company",
  pub: "Fire Safety Systems", 
  tag: "Fire Sprinklers, Gurugram Fire Protection, ISI Certified, Haryana Fire Act 2022 Compliance"
}


  ];
  return (
    <>

      <section>
        <div className="relative flex h-[75vh] md:h-[60vh] w-full">
          <img
            src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747898961/zedex_Blog_banner_p2vgv0.webp"
            className="hidden md:block h-full w-full object-cover object-center"
            alt="Blog Banner"
          />
          <img
            src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1747899628/blog_phone_view_rylp3n.webp"
            className="md:hidden h-full w-full object-cover object-center"
            alt="Blog Banner Mobile"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
              <p className="text-sm mt-4 uppercase tracking-wide">Home / Blogs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="bg-gray-50 py-16 px-4 md:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogsCards.map((item, index) => (
            <Link key={index} href={item.href} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 group">
              <div className="overflow-hidden   md:w-full">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="  object-cover   object-center  transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-3">{item.para}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-block bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
                    {item.pub}
                  </span>
                </div>
                <div className="text-sm text-gray-700">
                  <strong className="block mb-1">Tagged under : </strong>
                  <div className="flex flex-wrap gap-2">
                    {item.tag?.split(',').map((tag, i) => (
                      <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">{tag.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>





    </>
  )
}


