"use client"

import { useCallback, useEffect, useRef, useState } from 'react';

import Fuse from "fuse.js";
import { useRouter } from "next/navigation";

import { Dropdown, DropdownItem } from "flowbite-react";

import Link from 'next/link';

import Image from 'next/image';

import { usePathname } from 'next/navigation';



function Header() {



  const [openDropdown, setOpenDropdown] = useState(null);



  const toggleDropdown = (dropdownIndex) => {
    setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
  };


  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const links = [

    { href: '/', text: 'Home' },

    {
      to: '#',
      text: 'ABOUT US',
      dropdownItems: [
        { href: '/our-Company', label: 'Our Company' },
        { href: '/vision-&-mission', label: 'Vision & Mission' },
        { href: '/certificate-&-accreditation', label: 'Certificate & Accreditation' },
        { href: '/awards-and-recognitions', label: 'Awards and Recognitions' },
      ],
    },


    {
      to: '#',
      text: 'PRODUCTS',
      dropdownItems: [
        { href: '/product-overview', label: 'Overview' },
        { href: '/our-product-clients', label: 'Our Clients' },
        { href: '/air-washer', label: 'Air Washer' },
        { href: '/ducted-air-cooler', label: 'Ducted Air Coolers' },
        { href: '/ventilation-fans', label: 'Ventilation Exhaust Fan' },
        { href: '/panel-air-conditioners', label: 'Panel Air Conditioner' },
        { href: '/chiller-oil-water-coolant', label: 'Oil/Coolant Chiller' },
        { href: '/air-handling-unit', label: 'Air Handling Unit' },
        { href: '/air-shower', label: 'Air Shower & Pass Box' },
      ],
    },

    {
      text: 'HVAC',
      dropdownItems: [
        { label: 'Overview', href: '/hvac' },
        { label: 'Our Quality Service', href: '/our-quality-service' },
        { label: 'Our Projects ', href: '/our-projects' },
        { label: 'Our Clients ', href: '/our-client' },
      ],
    },

    {
      to: '#',
      text: ' FIRE & SAFETY ',
      dropdownItems: [
        { label: 'Overview', href: '/fire&safety' },
        { label: " Fire Extinguishers ", href: "/fire-extinguishers " },
        { label: " Fire Hydrant System ", href: "/fire-hydrant-system " },
        { label: " Fire Sprinkler System ", href: "/fire-sprinkler-system" },
        { label: " Fire suppression system ", href: "/fire-suppression-system" },
        { label: " Fire Alarm System ", href: "/fire-alarm-system " },
        { label: " Fire tubing system ", href: "/fire-tubing-system " },
        { label: " Fire VESDA System ", href: "/fire-VESDA-system " },
        { label: " Glow Signage & Emergency Lights ", href: "/glow-signage-&-emergency-lights" },
      ],
    },

    {
      to: '#',
      text: 'MANUFACTURING AND R&D',
      dropdownItems: [
        { label: 'Overview', href: '/manufacturing-and-r-&-d' },

      ],
    },

    {
      to: '#',
      text: 'MAINTENANCE',
      dropdownItems: [
        { label: 'Annual Maintenance Contract (AMC)', href: '/annual-maintenance-contract' },

      ],
    },

    { text: 'BLOG', href: '/blog' },
    { text: 'CONTACT US', href: '/contact-Us' },
  ];



  const [nestedDropdown, setNestedDropdown] = useState(null);



  const toggleNestedDropdown = (index) => {
    setNestedDropdown(nestedDropdown === index ? null : index);
  };


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);


  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const pathname = usePathname();
  const [logoSrc, setLogoSrc] = useState('/zedexLOGO.png');
  const [logoSize, setLogoSize] = useState({ width: '150', height: '60' });

  useEffect(() => {
    if (pathname) {
      if (pathname === '/fire&safety' || pathname === '/fire-extinguishers' || pathname === '/fire-hydrant-system' || pathname === '/fire-sprinkler-system' || pathname === '/fire-suppression-system' || pathname === '/glow-signage-&-emergency-lights' || pathname === '/fire-tubing-system' || pathname === '/fire-VESDA-system' || pathname === '/fire-alarm-system') {
        setLogoSrc('/zedexLOGO.png');
        setLogoSize({ width: '180', height: '44' });

      } else {
        setLogoSrc('/zedexLOGO.png');
        setLogoSize({ width: '150', height: '60' });
      }

    }
  }, [pathname]);

  
  const menuItems = [
    {
      label: "About Us",

    },

    {
      label: "Service",
    
    },

    {
      label: "Clients",

    },

    
    { label: "Contact Us", href: "/contact-Us" },
  ];



  const handleLinkClick = (href) => {
    closeMobileMenu();  
    router.push(href);   
  };




  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);  

   
  useEffect(() => {

    audioRef.current = new Audio("/audio/1.mp3");

    
    return () => {

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleAudioToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
       
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
       
      audioRef.current.play();
      setIsPlaying(true);

       
      audioRef.current.onended = () => setIsPlaying(false);
    }
  };


  const searchBarRef = useRef(null);  

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);  
  const router = useRouter();

  const items = [
    { id: "1", name: "Air Washer", link: "/air-washer" },
    { id: "2", name: "Ducted Air Coolers", link: "/ducted-air-cooler" },
    { id: "3", name: "Ventilation Exhaust Fan", link: "/ventilation-fans" },
    { id: "4", name: "Panel Air Conditioner", link: "/panel-air-conditioners" },
    { id: "5", name: "Oil/Coolant Chiller", link: "/chiller-oil-water-coolant" },
    { id: "6", name: "Air Handling Unit", link: "/air-handling-unit" },
    { id: "7", name: " Air Shower & Pass Box ", link: "/air-shower" },
    { id: "8", name: " Fire Extinguishers", link: "/fire-extinguishers" },
    { id: "9", name: " Fire Hydrant System", link: "/fire-hydrant-system" },
    { id: "10", name: " Fire Sprinkler System", link: "/fire-sprinkler-system" },
    { id: "11", name: " Fire suppression system", link: "/fire-suppression-system" },
    { id: "12", name: " Glow Signage & Emergency Lights", link: "/glow-signage-&-emergency-lights" },
    { id: "13", name: " Fire tubing system", link: "/fire-tubing-system" },
    { id: "14", name: " Fire VESDA System", link: "/fire-VESDA-system" },
  ];

  const fuse = new Fuse(items, {
    keys: ["name"],
    threshold: 0.3,
  });

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === "") {
      setResults([]);
    } else {
      const searchResults = fuse.search(input).map((result) => result.item);
      setResults(searchResults);
    }
  };

  const handleSelect = (link) => {
    router.push(link);
    setShowSearch(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowSearch(false);  
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (

    <nav className={` fixed    h-[7.5rem]  z-20 w-full top-0 transition-all duration-300 ${isScrolled ? " bg-gray-100 text-black shadow-md" : "  text-white"
      }`}
    >
      <div className=" md:mx-2 md:px-4">

        <div className="flex lg:flex-row items-center xl:flex-row justify-between p-4" >

          <div className="flex space-x-4">
            <div className="row flex  md:flex-col lg:flex-row ">

              <Link href='/'>

                {pathname && (<Image
                  src={logoSrc}
                  width={logoSize.width}
                  height={logoSize.height}
                  alt="Picture"
                  className="md:h-[60px] md:w-auto my-3"
                  style={{ width: `${logoSize.width}px`, height: `${logoSize.height}px` }}  

                />
                )}




              </Link>

            </div>


          </div>


          <div className="row flex-col  lg:flex lg:px-4  ">


            <div className="col">


              <div className="row text-right flex flex-row justify-end items-center">

                <div className="row flex flex-col md:flex-row justify-center items-center">


               
                  <div className="col pb-2 md:pb-0">
                  
                    <svg onClick={() => window.location.href = "mailto:info@zedexfire.com"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>

                  </div>

                  <div
                    className="col text-left text-[12px] ps-3 hidden md:block"
                    onClick={() => window.location.href = "mailto:info@zedexfire.com"}
                    style={{ cursor: 'pointer' }}  
                  >
                    <p className="font-sans font-thin">Drop Us An Email</p>
                    <p>info@zedexfire.com</p>
                  </div>


                  <hr className='rotate-90 w-10  relative hidden md:block'/>

                  <div className="col pb-2 md:pb-0 ">
                    <svg onClick={() => window.location.href = "tel:9999883999"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>


                  </div>

                  <div
                    className="col text-left text-[12px] ps-2 hidden md:block"
                    onClick={() => window.location.href = "tel:9999883999"}
                    style={{ cursor: 'pointer' }} // Optional styling for pointer and color
                  >
                    <p className="font-sans font-thin">Toll-Free Number</p>
                    <p>+91 9999883999</p>
                  </div>


                


                 

                </div>
                <div className="row flex flex-col  md:flex-row">
                  <div className="col flex justify-center items-center">     <i className="px-2 fa-solid fa-magnifying-glass" onClick={() => setShowSearch(!showSearch)}></i>
                  </div>

                  <div className="col">
                    <div
                      onClick={handleAudioToggle}
                      className="cursor-pointer flex items-center justify-center  rounded-full md:p-3  transition"
                      style={{ width: "50px", height: "40px" }}
                    >
                      {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                      ) : (
                        <i className=" md:px-2 fa-solid fa-headphones"></i>
                      )}
                    </div>
                  </div>
                </div>


              </div>

              <div className=" flex w-full  py-3 items-center rounded-full">
                <div className="flex-1 border-b border-gray-300"></div>
              </div>


            </div>


            <div className="col">
              <div className="hidden xl:flex items-center space-x-1">

                <ul className="flex md:text-[11px] lg:text-[15px] flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                  {menuItems.map((item, index) => (
                    <li className=" after:content-[''] after:block after:w-full after:h-[3px] after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 after:scale-x-0 after:origin-left after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 " key={index}>
                      {item.dropdown ? (
                        <Dropdown label={item.label} inline>
                          {item.dropdown.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              {subItem.dropdown ? (
                                <Dropdown className='w-44' placement="right" label={subItem.label} inline>
                                  {subItem.dropdown.map((nestedItem, nestedIndex) => (
                                    <Link key={nestedIndex} href={nestedItem.href || "#"}>
                                      <Dropdown.Item onClick={() => handleLinkClick(nestedItem.href)}>{nestedItem.label}</Dropdown.Item>
                                    </Link>
                                  ))}
                                </Dropdown>
                              ) : (
                                <Link href={subItem.href || "#"}>
                                  <Dropdown.Item onClick={() => handleLinkClick(subItem.href)}>{subItem.label}</Dropdown.Item>
                                </Link>
                              )}
                            </div>
                          ))}
                        </Dropdown>
                      ) : (
                        <Link href={item.href || "#"} onClick={() => handleLinkClick(item.href)}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

              </div>

            </div>

          </div>


          
          <div className="xl:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>


        </div>
      </div>

       







      <div className={`mobile-menu xl:hidden  ${isMobileMenuOpen ? 'mobile-menu-open bg-gray-100 text-black' : 'mobile-menu-closed'}`}>
        {isMobileMenuOpen && links.map((link, index) => (
          <div key={index} className="mx-7 mb-2 border-b-2">
            {link.dropdownItems ? (
              <div>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <Link
                    href={link.to || '/'} // Use a fallback if link.to is undefined
                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                  // Call handleLinkClick
                  >
                    {link.text}
                  </Link>
                  <div className="transition-transform duration-300 transform">
                    <svg
                      className={`w-4 h-4 ml-2 ${openDropdown === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {openDropdown === index && (
                  <div className="ml-2">
                    {link.dropdownItems.map((dropdownItem, i) => (
                      <div key={i}>
                        {dropdownItem.dropdownItems ? (
                          <div>
                            <div
                              className="flex items-center justify-between cursor-pointer"
                              onClick={() => toggleNestedDropdown(i)}
                            >
                              <Link
                                href={dropdownItem.href || '/'} // Use a fallback if dropdownItem.href is undefined
                                className="block py-2 px-4 text-sm hover:bg-gray-200"
                              // Call handleLinkClick
                              >
                                {dropdownItem.label}
                              </Link>
                              <div className="transition-transform duration-300 transform">
                                <svg
                                  className={`w-4 h-4 ml-2 ${nestedDropdown === i ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >

                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                            </div>

                            {nestedDropdown === i && (
                              <div className="ml-4">
                                {dropdownItem.dropdownItems.map((subItem, j) => (
                                  <Link
                                    key={j}
                                    href={subItem.href || '/'} // Use a fallback if subItem.href is undefined
                                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                                    onClick={() => handleLinkClick(subItem.href)} // Call handleLinkClick
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={dropdownItem.href || '/'} // Use a fallback if dropdownItem.href is undefined
                            className="block py-2 px-4 text-sm hover:bg-gray-200"
                            onClick={() => handleLinkClick(dropdownItem.href)} // Call handleLinkClick
                          >
                            {dropdownItem.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href || '/'} // Use a fallback if link.to is undefined
                className="block py-2 px-4 text-sm hover:bg-gray-200"
                onClick={() => handleLinkClick(link.href)} // Call handleLinkClick
              >
                {link.text}
              </Link>
            )}
          </div>
        ))}


      </div>

      <div className="search-bar-container">
        {/* Logo Section */}

        <div className="logo-section">

        </div>

        {/* Input Section */}

        {showSearch && (
          <div className="search-bar p-5" ref={searchBarRef}>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search products..."


              className={`search-input ${isScrolled
                ? " text-black hover:text-black border-black "
                : " text-black hover:text-black "
                }`}
            />
            {results.length > 0 && (
              <ul
                className={`search-results ${isScrolled
                  ? " text-black hover:text-black border-black "
                  : " text-black hover:text-black "
                  }`}

              >
                {results.map((item) => (
                  <li
                    key={item.id}
                    className="search-item"
                    onClick={() => handleSelect(item.link)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}



      </div>


    </nav>



  );
}

export default Header;


