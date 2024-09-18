import React from 'react';
import { Link } from 'react-router-dom';

export default function Hook() {
    const gradientStyle = {
        backgroundImage: 'linear-gradient(to right, #6C0A0A, #D33D3D)', 
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'white'
      };
    
    
  return (
    <div  style={gradientStyle} className=" p-16 text-center text-white">
      <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
        Ready to Transform Your Vision Into Reality?
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Don't wait for tomorrow—let's start building your future today. Your ideas deserve to shine, and we’re here to make it happen.
      </p>

      <Link to="/contact">
        <button className="px-8 py-3 bg-white bg-opacity-90 text-red-800 rounded-full shadow-sm hover:shadow-xl text-lg font-semibold transition duration-300 ease-in-out">
          Let’s Get Started
        </button>
      </Link>
    </div>
  );
}
