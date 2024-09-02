import React from 'react';

export default function Home() {
  return (
    <div className='px-customPaddingMobile md:px-customPadding'>
      <div className='flex flex-col space-y-4 mt-24 md:mt-28 px-customPaddingMobile items-start justify-center'>
        <h1 className='font-sora text-gray-900 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-topToBottom'>
          Triveda
        </h1>
        <h1 className='font-inter text-purple-950 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-topToBottom'>
          Your idea, our craft.
        </h1>
      </div>
    </div>
  );
}
