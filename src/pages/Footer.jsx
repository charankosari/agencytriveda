// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-200 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Company Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl font-semibold mb-2">Triveda</h1>
            <p className="text-gray-600 text-center lg:text-left">
              We specialize in crafting exceptional websites and web applications. Let us help you achieve your digital goals!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">Email: <a href="mailto:contact@triveda.com" className="hover:underline">contact@triveda.com</a></p>
            <p className="text-gray-700">Phone: <a href="tel:+1234567890" className="hover:underline">67847697843789</a></p>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Triveda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
