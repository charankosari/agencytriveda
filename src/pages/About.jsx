import React from 'react';
import Three from '../assets/images/three.jpg';

export default function About() {
  return (
    <div className='flex flex-col items-center justify-between mt-16 px-4 md:px-8 lg:px-0 lg:w-full'>
      <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
        Discover Who We Are
      </h1>
      <div className='flex flex-col md:flex-row w-[99%] lg:w-[98%] space-y-8 md:space-y-0 md:space-x-8'>
        <div className='flex flex-col items-center md:items-start space-y-5 justify-center md:w-1/2 text-gray-300 font-sora'>
          <p className='text-center md:text-left leading-relaxed'>
            Triveda is more than an agency; it represents the inception of a grand vision. Founded by Vallabhaneni Lakshmi Suresh Chandra, Kosari Shiva Charan, and Miriyala Rakesh Krishna, we are dedicated to delivering exceptional services in web development, app development, design, and marketing. Our journey commenced with a shared passion for innovation and an unwavering commitment to excellence.
          </p>
          <p className='text-center md:text-left leading-relaxed'>
            At Triveda, we believe in transforming ideas into reality and empowering businesses to thrive in the digital world. Our team is propelled by creativity, expertise, and a customer-centric approach, ensuring that each project we undertake becomes a success story. We invite you to join us on this exciting journey as we reshape the digital landscape together.
          </p>
        </div>
        <div className='flex justify-center md:justify-end md:w-1/2 shadow-md'>
          <img className='rounded-md w-full h-auto max-w-[500px]' src={Three} alt="Triveda Team" />
        </div>
      </div>
    </div>
  );
}
