"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-[#D96846] text-white py-8 mt-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="text-2xl font-bold">
            FictionFlux
          </Link>
          <p className="mt-2 text-sm">
            FictionFlux is your go-to online store for all things fiction. Explore our collection of books and discover new worlds.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="hover:underline">About Us</li>
              <li className="hover:underline">Categories</li>
              <li className="hover:underline">Contact</li>
              <li className="hover:underline">Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Customer Service</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="hover:underline" >FAQ</li>
              <li className="hover:underline">Returns</li>
              <li className="hover:underline">Shipping Info</li>
              <li className="hover:underline">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
  
      {/* Social Media & Contact Section */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          
            <FaFacebookF className="w-6 h-6 text-white hover:text-gray-300" />
  
            <FaTwitter className="w-6 h-6 text-white hover:text-gray-300" />
          
      
            <FaInstagram className="w-6 h-6 text-white hover:text-gray-300" />
   
            <FaLinkedinIn className="w-6 h-6 text-white hover:text-gray-300" />
      
        </div>
  
        {/* Contact Info */}
        <p className="text-sm text-center md:text-right">© 2024 FictionFlux. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
