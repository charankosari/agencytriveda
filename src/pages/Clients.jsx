// src/components/Clients.jsx
import React from 'react';

const Clients = () => {
  const clients = [
    "Google", "Tesla", "Nvidia", "Apple", "Microsoft", "Amazon", "Facebook", "IBM", "Intel", "Adobe"
  ];

  return (
    <div className="relative overflow-hidden bg-gray-950 py-4 mt-10">
         <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
                Our Clients
            </h1>
      <div className="flex items-center  space-x-8 animate-scroll">
        {clients.concat(clients).map((client, index) => (
          <div key={index} className="text-rose-400 font-sora font-semibold text-lg">
            {client}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
