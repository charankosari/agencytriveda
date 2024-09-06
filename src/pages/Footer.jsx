import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-700 py-8 font-sora">

      <div className="max-w-screen-xl mx-auto px-4">
      <div className='flex flex-col items-start justify-center'>
            <h2 className='font-bold text-xl md:text-2xl lg:text-4xl opacity-50 '> Excited?</h2>
            <div className='hover:text-textPrimary flex flex-row space-x-3 items-center justify-center'><Link to='/contact'><h1 className='font-bold text-2xl md:text-4xl lg:text-6xl'>Let’s Work Together!</h1></Link>
              <PlusIcon /></div>
          </div>
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Company Info */}
         
          <div className="flex flex-col items-start text-left lg:text-left">
            <img src={Logo} alt="Triveda Logo" className="w-40 h-40 lg:w-60 lg:h-60 mb-2" />

            <p className="text-gray-400">
              We specialize in crafting exceptional websites and web applications. Let us help you achieve your digital goals!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/portfolio" className="hover:text-white">Our Work</a></li>
              {/* <li><a href="/services" className="hover:text-white">Services</a></li> */}
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: <a href="mailto:trivedaofficial@gmail.com" className="hover:text-white">trivedaofficial@gmail.com</a></p>
            <p className="text-gray-400">Phone: <a href="tel:+919110326779" className="hover:text-white">+919110326779</a></p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Triveda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


const PlusIcon = () => {
  return (


    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  
  );

};