import Logo from '../assets/images/logo.png';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-700 py-8 font-sora">
      <div className="max-w-screen-xl mx-auto px-4">
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
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: <a href="mailto:contact@triveda.com" className="hover:text-white">contact@triveda.com</a></p>
            <p className="text-gray-400">Phone: <a href="tel:+1234567890" className="hover:text-white">67847697843789</a></p>
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
