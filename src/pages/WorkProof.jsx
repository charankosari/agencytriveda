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

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
        {services.map((service, index) => (
          <div key={index} className='bg-slate-900 shadow-md overflow-hidden'>
            <img src={service.img} alt={service.name} className='w-full h-80 object-cover' />
            <div className='p-4 flex flex-col items-center text-center'>
              <h2 className='font-bold text-lg font-sora'>{service.name}</h2>
              <p className='mt-2'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
