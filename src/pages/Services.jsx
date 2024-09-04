import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { name: "Web Development" },
    { name: "App Development" },

  ];

  return (
    <div className='flex flex-col items-center justify-center mt-16 px-4 md:px-8 text-white'>
      <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
        Services We Offer
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-4 w-full'>
        {services && services.map((item, index) => (
          <div key={index} className='bg-slate-900 shadow-md rounded-lg p-4 flex items-center justify-center text-center h-24 lg:h-[400px] hover:bg-slate-800 cursor-pointer'>
            <h2 className='font-bold text-lg font-sora'>{item.name}</h2>
          </div>
        ))}

      </div>
      <div className='flex items-center justify-between  w-full font-sora mt-4'>
        <h4 className='font-semibold w-40 md:w-full'>Have an idea? Let’s make it happen!</h4>
        <Link to='/contact'>
          <Button label="Contact us" />
        </Link>
       
      </div>


    </div>
  );
}
