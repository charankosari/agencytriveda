import React from 'react';
import Button from '../components/Button';
import Sidepic from '../assets/images/sidepic.jpg'


export default function Home() {
  return (
    <div className='px-customPaddingMobile md:px-customPadding '>
      <div className='flex flex-col space-y-10  md:flex-row  '>
        <div>
          <div className='flex flex-col space-y-2 mt-12 md:mt-28 px-customPaddingMobile items-start justify-center'>
            <h1 className='font-sora text-rose-500 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-topToBottom'>
              Triveda
            </h1>
            <h1 className='font-inter text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-topToBottom'>
              Crafting Custom Solutions from Vision to Victory
            </h1>
            <p className='text-gray-800  text-sm sm:text-lg md:text-xl lg:text-xl animate-topToBottom '>
              Triveda turns your vision into reality with custom solutions. From concept to launch, we have the expertise to deliver tailored digital experiences that stand out.
            </p>
          </div>
          <div className='flex flex-row mt-6  '>
            <div className=' animate-topToBottom ' >
              <Button label="See our Work" />
            </div>
            <div className='animate-topToBottom ' >
              <Button label="Contact us" />
            </div>
          </div>
        </div>
        <div className='flex items-end justify-center'>
          <img src={Sidepic} width={800} height={800}></img>
        </div>
      </div>

    </div>

  );
}
