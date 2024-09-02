import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const navbarItems = [
    { item: "About" },
    { item: "Jobs" },
    { item: "Services" },
    { item: "Contact" },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="px-customPaddingMobile md:px-customPadding py-2 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="w-[70px] h-[70px] md:w-[90px] md:h-[90px]"
              />
            </Link>
          </div>
          {/* Mobile Menu Icon */}
          <div className="flex cursor-pointer md:hidden " onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {/* Navbar Links for Desktop */}
          <div className="hidden md:flex items-center space-x-8 font-inter cursor-pointer">
            {navbarItems &&
              navbarItems.map((items, index) => (
                <Link key={index} to={`/${items.item.toLowerCase()}`}>
                  {items.item}
                </Link>
              ))}
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile (Sliding from Right) */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 text-white w-64 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navbarItems &&
            navbarItems.map((items, index) => (
              <Link
                key={index}
                to={`/${items.item.toLowerCase()}`}
                className="hover:bg-gray-700 p-2 rounded"
                onClick={toggleSidebar}
              >
                {items.item}
              </Link>
            ))}
        </nav>
      </div>
    </>
  );
}
