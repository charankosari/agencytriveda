import React from 'react';

function Button({ label, bgColor }) {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, #6C0A0A, #D33D3D)', 
   
    textAlign: 'center',
    color: 'white'
  };

  return (
    <button
      type="button"
      style={gradientStyle}
      className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white   focus:outline-none rounded-full border-[1px] border-borderColor border-opacity-20 hover:bg-gray-100 hover:text-textPrimary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 ${bgColor}`}
    >
      {label}
    </button>
  );
}

export default Button;
