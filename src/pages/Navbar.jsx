import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="px-customPaddingMobile bg-black text-white md:px-customPadding py-2">
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
          <div className="hidden md:flex items-center space-x-9 font-inter cursor-pointer">
            {navbarItems &&
              navbarItems.map((item, index) => (
                <Link key={index} to={`/${item.item.toLowerCase()}`}>
                  <div className='flex justify-center items-center space-x-2  text-gray-400 hover:text-gray-100 '>
                    <div>
                      <item.icon />
                    </div> <div>
                      {item.item}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile (Sliding from Right) */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white w-full transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
     
          <button onClick={toggleSidebar} className="text-white">
            <RemoveIcon />
          </button>
        </div>
        <nav className="flex flex-col p-10 space-y-4">
          {navbarItems &&
            navbarItems.map((item, index) => (
              <Link key={index} to={item.rp}>
              <div className='flex justify-start items-start p-4 space-x-4 rounded-md  text-gray-400 hover:text-gray-100 '  onClick={toggleSidebar}>
                <div>
                  <item.icon />
                </div> <div >
                  {item.item}
                </div>
              </div>
            </Link>
            ))}
        </nav>
      </div>
    </>
  );
};

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

const JobsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      />
    </svg>
  );
};

const contactIcon = ()=>{
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

  )
}

const homeIcon = ()=>{
  return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
  )
}
const navbarItems = [

  { icon: JobsIcon, item: 'Jobs',rp:"/jobs"  },
  { icon: contactIcon, item: 'Contact',rp:"/contact"  },
];

export default Navbar;
