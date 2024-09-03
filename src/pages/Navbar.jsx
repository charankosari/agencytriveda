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
      <nav className="px-customPaddingMobile bg-gray-950 text-white md:px-customPadding py-2">
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
          <div className="flex cursor-pointer md:hidden" onClick={toggleSidebar}>
            <MenuIcon />
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
        className={`fixed top-0 right-0 h-full bg-gray-950 text-white w-full transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white">
          <RemoveIcon/>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navbarItems &&
            navbarItems.map((items, index) => (
              <Link
                key={index}
                to={`/${items.item.toLowerCase()}`}
                className="hover:bg-rose-600 hover:ml-2 p-2 font-semibold font-sora rounded"
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


const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-8 h-8 text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
      />
    </svg>
  );
};


const RemoveIcon = () => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
 className="w-8 h-8 text-gray-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
  );
};

