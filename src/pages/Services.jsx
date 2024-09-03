import React from 'react';

export default function Services() {
  return (
    <div className='flex flex-col items-center justify-center mt-16 px-4 md:px-8 lg:px-16'>
      <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
        Services We Offer
      </h1>
      
      <div className='w-full overflow-x-auto flex space-x-4 py-4'>
        {/* Service Card 1 */}
        <div className='min-w-[200px] bg-white shadow-md rounded-lg p-4'>
          <h2 className='font-bold text-lg'>Web Development</h2>
          <p className='mt-2'>Custom websites tailored to your needs.</p>
        </div>

        {/* Service Card 2 */}
        <div className='min-w-[200px] bg-white shadow-md rounded-lg p-4'>
          <h2 className='font-bold text-lg'>App Development</h2>
          <p className='mt-2'>Mobile apps for iOS and Android platforms.</p>
        </div>

        {/* Service Card 3 */}
        <div className='min-w-[200px] bg-white shadow-md rounded-lg p-4'>
          <h2 className='font-bold text-lg'>SEO Services</h2>
          <p className='mt-2'>Improve your site's visibility on search engines.</p>
        </div>

        {/* Add more service cards as needed */}
      </div>
    </div>
  );
}
