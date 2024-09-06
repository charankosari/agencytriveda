
import React from 'react';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';

export default function Porfolio() {
  const services = [
    { name: "Shop rags", description: "Custom websites and web applications.", img: p1,type:"Website" },
    { name: "Atharva", description: "Mobile apps for iOS and Android.", img: p2 ,type:"App"},
    { name: "Portfolio", description: "Strategies to boost your online presence.", img: p3,type:"Website" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white font-sora ">
      <div className="container mx-auto px-6 py-12">
        <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl mb-4 text-textPrimary animate-fadeIn">
          Porfolio
        </h1>
        <p className='text-center mb-8 animate-fadeIn'>At Triveda, we are committed to crafting digital excellence, where our work truly speaks for itself."</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer text-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img src={service.img} alt={service.name} className="w-full h-64 object-cover" />
        <div className='flex'> 
        <div className="p-6 text-center">
                <h2 className=" text-left font-bold text-2xl mb-2">{service.name}</h2>
                <p className="text-left text-gray-700">{service.description}</p>
              </div>
              <div className="p-6 text-center">
                <button className=" rounded-full bg-rose-300 px-2 py-1 text-right font-normal text-sm mb-2">{service.type}</button >
              
              </div>
          </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
