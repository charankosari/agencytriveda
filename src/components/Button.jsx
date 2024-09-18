import React from 'react';

function Button({ label }) {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, #6C0A0A, #D33D3D)', 
    color: 'white',
    textAlign: 'center',
  };

  return (
    <button
      type="button"
      style={gradientStyle}
      className={`py-2.5 px-5 me-2 mb-2 
        text-sm md:text-base lg:text-lg font-medium text-white
        focus:outline-none rounded-full 
        transform transition-transform duration-300 ease-in-out hover:scale-105 
        md:py-3 md:px-6 lg:py-3.5 lg:px-7
      `}
    >
      {label}
    </button>
  );
}

export default Button;
