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
          <div className="mb-6 flex justify-center md:justify-start">
            <Image
              src="/zedexLOGO2.png"
              alt="Zedex Logo"
              width={200}
              height={80}
            />
          </div>
          <p className="text-sm mb-4 text-center md:text-left">
            At Zedex, we are dedicated to providing comprehensive fire and safety solutions to safeguard lives and property.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start py-4">
            <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500"><TbBrandX /></a>
            <a href="#" className="hover:text-orange-500"><FaLinkedinIn /></a>
          </div>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4 text-center md:text-left">Quick Links</h4>
          <ul className="space-y-2 text-sm  text-center md:text-left">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-orange-500">About Us</Link></li>
            <li><Link href="/clients" className="hover:text-orange-500">Clients</Link></li>
            <li><Link href="/contact-us" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4 text-center md:text-left">Our Services</h4>
          <ul className="space-y-2 text-sm text-center md:text-left">
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
          <h4 className="text-lg font-semibold mb-4 text-center md:text-left">Contact Us</h4>
          <ul className="space-y-3 text-sm flex md:justify-center md:items-start items-center flex-col">
            <li className="flex  items-start gap-2">
              <BiEnvelope className="mt-1" />
              <a href="mailto:info@zedexfire.com">info@zedexfire.com</a>
            </li>
            <li className="flex items-start gap-2">
              <BsFillTelephoneFill className="mt-1 " />
              <a href="tel:+919999883999">+91 9999883999</a>
            </li>
            <li className="flex items-start gap-2">
              <IoLocationSharp className="mt-1  h-full  w-14" />
              <span>
                239/20, Rajiv Chowk Flyover, Shanti Nagar, Shivaji Nagar, Sector 11, Gurugram, Haryana 122001
              </span>
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
