import React from 'react';
import Three from '../assets/images/three.jpg';

export default function About() {
  return (
    <div className='flex flex-col items-center justify-between  px-4 md:px-8 lg:px-0 lg:w-full'>
      <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-6 md:mb-12'>
        Discover Who We Are
      </h1>
      <div className='flex flex-col md:flex-row w-full md:space-x-8 space-y-8 md:space-y-0'>
        <div className='flex flex-col text-md md:text-md lg:text-lg items-center md:items-start text-gray-300 font-sora md:w-1/2'>
          <p className='text-center md:text-left leading-relaxed mb-4'>
          Triveda is more than an agency; it represents the inception of a grand vision. Founded by Vallabhaneni Lakshmi Suresh Chandra and Kosari Shiva Charan, we are dedicated to delivering exceptional services in web development and app development. Our journey commenced with a shared passion for innovation and an unwavering commitment to excellence
          </p>
          <p className='text-center md:text-left leading-relaxed'>
            At Triveda, we believe in transforming ideas into reality and empowering businesses to thrive in the digital world. Our team is propelled by creativity, expertise, and a customer-centric approach, ensuring that each project we undertake becomes a success story. We invite you to join us on this exciting journey as we reshape the digital landscape together.
          </p>
        </div>
        <div className='flex justify-center md:justify-end md:w-1/2'>
          <img className='rounded-md w-full h-auto max-w-full max-h-[400px] object-cover shadow-md' src={Three} alt="Triveda Team" />
        </div>
      </div>
    </div>
  );
}
