'use client';
import Image from "next/legacy/image";
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BiEnvelope } from 'react-icons/bi';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

import { TbBrandX } from 'react-icons/tb';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
        <div className="    flex justify-start items-center mb-5 md:justify-center">
  <img
    src="https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618668/zedexLOGO2_gi6vfd.webp"
    alt="Zedex Logo"
    className="  h-14 object-center object-contain"
  />
</div>

          <p className="text-sm mb-4 text-center  ">
            At Zedex, we are dedicated to providing comprehensive fire and safety solutions to safeguard lives and property.
          </p>
          <div className="flex space-x-4 justify-center  py-4">
            <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500"><TbBrandX /></a>
            <a href="#" className="hover:text-orange-500"><FaLinkedinIn /></a>
          </div>
        </div>


        <div className=" text-center">
          <h4 className="text-lg font-semibold mb-4 text-center ">Quick Links</h4>
          <ul className="space-y-2 text-sm  text-center ">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/about-Us" className="hover:text-orange-500">About Us</Link></li>
            <li><Link href="/our-clients" className="hover:text-orange-500">Clients</Link></li>
            <li><Link href="/contact-Us" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4 text-center ">Our Services</h4>
          <ul className="space-y-2 text-sm text-center ">
            {[
              'fire-extinguishers',
              'fire-alarm-system',
              'fire-sprinkler-system',
              'fire-hydrant-system',
              'fire-suppression-system',
              'anti-rodent-system',
              'water-leak-detection-device',
              'fire-vesda-system',
              'fire-tubing-system',
              'fire-door-service',
              'kitchen-fire-suppression-system',


            ].map((slug) => (
              <li key={slug}>
                <Link href={`/${slug}`} className="hover:text-[#F89A1B] capitalize">
                  {slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4 text-center">Contact Us</h4>
          <ul className="space-y-3 text-sm flex md:justify-center   items-center flex-col">
            <li className="flex text-center  gap-2">
              <BiEnvelope className="mt-1" />
              <a href="mailto:info@zedexfire.com" className=" w-54">info@zedexfire.com</a>
            </li>
            <li className="flex text-center gap-2">
              <BsFillTelephoneFill className="mt-1 " />
              <a href="tel:9999883999" className=" w-54">9999-883-999</a>
            </li>
            <li className="flex text-center gap-2">
              <IoLocationSharp className="mt-1 " />
              <a className=" w-54">
                239/20, Rajiv Chowk Flyover, Shanti Nagar, Shivaji Nagar, Sector 11, Gurugram, Haryana 122001
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        © 2025 ZedEx. All rights reserved.
      </div>
    </footer>
  );
}
