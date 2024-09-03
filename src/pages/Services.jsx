import React from 'react';

export default function Services() {
  const services =[
    {name:"Web Development"},
    {name:"App Development"},
    {name:"Digitial Marketing"},
  ]
  return (
    <div className='flex flex-col items-center justify-center mt-16 px-4 md:px-8 text-white'>
      <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
        Services We Offer
      </h1>
 
         <div className='w-full flex  flex-wrap justify-between space-y-4 md:space-y-0 md:space-x-4 py-4'>
         {services && services.map(items =>
         <div className='w-full md:w-1/3 lg:w-1/4 md:h-[400px] bg-slate-900 shadow-md rounded-lg p-4 flex items-center justify-center text-center hover:bg-slate-800 cursor-pointer'>
           <h2  className='font-bold text-lg font-sora'>{items.name}</h2>
         </div>
   )}
    
       </div>
    
     
    </div>
  );
}
