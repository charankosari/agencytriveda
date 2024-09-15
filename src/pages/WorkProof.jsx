import React from 'react';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';

export default function WorkProof() {
  const services = [
    { name: "Shop rags", description: "Custom websites and web applications.", img: p1 },
    { name: "Atharva", description: "Mobile apps for iOS and Android.", img: p2 },
    { name: "Porfolio", description: "Strategies to boost your online presence.", img: p3 },
  ];

  return (
    <div className='flex flex-col items-center justify-center mt-16 px-4 md:px-8 text-white'>
      <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
        Explore What We Do.
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4'>
        {services.map((service, index) => (
          <div key={index} className='relative group overflow-hidden rounded-lg shadow-md'>
            {/* Image */}
            <img 
              src={service.img} 
              alt={service.name} 
              className='w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110'
            />

            {/* Overlay for text and button */}
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-20 items-left opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <h2 className='font-bold text-2xl font-sora'>{service.name}</h2>
              <p className='mt-2 text-sm'>{service.description}</p>

              {/* Glass effect button */}
              <button className='mt-4 px-4 py-2 bg-rose-600 rounded-full bg-opacity-20 backdrop-blur-sm  text-white font-semibold hover:bg-opacity-30 transition'>
               Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
