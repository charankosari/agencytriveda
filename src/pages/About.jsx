import React from 'react';
import Three from '../assets/images/three.jpg';

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center mt-16 px-4 md:px-8 lg:px-16'>
      <h1 className='font-bold text-center font-sora text-xl md:text-2xl lg:text-3xl mb-8'>
        Discover Who We Are
      </h1>
      <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-screen-lg mx-auto fadeIn'>
        <div className='w-full md:w-1/2 lg:pr-8 mb-8 md:mb-0'>
          <p className='mb-4 text-center md:text-left'>
            At Triveda, we are more than just an agency; we are the embodiment of a grand vision. Established by Vallabhaneni Lakshmi Suresh Chandra, Kosari Shiva Charan, and Miriyala Rakesh Krishna, our mission is to deliver unparalleled excellence in web development, app development, design, and marketing. Our journey began with a shared passion for innovation and a commitment to exceptional quality.
          </p>
          <p className='text-center md:text-left'>
            We are dedicated to transforming ideas into reality and empowering businesses to excel in the digital realm. Our team thrives on creativity, expertise, and a client-centric approach, ensuring that every project we undertake is a success. Join us as we embark on this exciting journey to redefine the digital landscape together.
          </p>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <img 
            src={Three} 
            alt='Triveda Team' 
            className='w-full max-w-md rounded-lg shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}
