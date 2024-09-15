import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-12 font-sora">

      <div className="max-w-screen-xl mx-auto px-4">
        {/* Call to Action Section */}
        <div className="flex flex-col items-start lg:items-center justify-center text-center lg:text-left mb-12">
          <h2 className="font-bold text-lg md:text-2xl lg:text-4xl opacity-60 mb-4">Excited?</h2>
          <div className="flex flex-row items-center justify-center space-x-3 hover:text-primary transition-colors duration-200">
            <Link to="/contact">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">Let’s Work Together!</h1>
            </Link>
            <PlusIcon />
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <img src={Logo} alt="Triveda Logo" className="w-40 h-40 lg:w-60 lg:h-60 mb-4" />
            <p className="text-gray-400 text-sm lg:text-base">
              We specialize in crafting exceptional websites and web applications. Let us help you achieve your digital goals!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-400 text-sm lg:text-base">
              <li><Link to="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors duration-200">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400 text-sm lg:text-base">
              Email: <a href="mailto:trivedaofficial@gmail.com" className="hover:text-white transition-colors duration-200">trivedaofficial@gmail.com</a>
            </p>
            <p className="text-gray-400 text-sm lg:text-base">
              Phone: <a href="tel:+919110326779" className="hover:text-white transition-colors duration-200">+919110326779</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Triveda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const PlusIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
};
