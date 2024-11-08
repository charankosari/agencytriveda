import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-16 font-sora xl:px-12 ">
      <div className="max-w-screen mx-auto px-6  ">
        <div className="flex flex-col items-start lg:items-start  lg:text-left mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold opacity-80 mb-4">
            Excited?
          </h2>
          <Link
            to="/contact"
            className="block hover:text-red-600 transition-colors duration-200"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold w-full whitespace-nowrap">
              Let’s Work Together!
            </h1>
          </Link>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">
          {/* Company Info */}
          <div className="flex flex-col items-startlg:items-start  lg:text-left">
            <img
              src={Logo}
              alt="Triveda Logo"
              className="w-32 h-32 lg:w-48 lg:h-48 mb-4"
            />
            <p className="text-gray-400 text-base lg:text-lg">
              We specialize in crafting exceptional websites and web
              applications. Let us help you achieve your digital goals!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-startlg:items-start  lg:text-left">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-400 text-base lg:text-lg">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-white transition-colors duration-200"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-startlg:items-start  lg:text-left">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400 text-base lg:text-lg mb-2">
              Email:{" "}
              <a
                href="mailto:trivedaofficial@gmail.com"
                className="hover:text-white transition-colors duration-200"
              >
                trivedaofficial@gmail.com
              </a>
            </p>
            <p className="text-gray-400 text-base lg:text-lg">
              Phone:{" "}
              <a
                href="tel:+919110326779"
                className="hover:text-white transition-colors duration-200"
              >
                +919110326779
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6  text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Triveda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
