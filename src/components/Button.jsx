import React from 'react';

function Button({ label}) {
  return (
    <button
 
     className="bg-gray-950 px-3 py-2 ml-4 text-[12px] md:text-[16px] md:px-4 md:py-2 rounded-full font-inter text-white"
    >
      {label}
    </button>
  );
}

export default Button;
