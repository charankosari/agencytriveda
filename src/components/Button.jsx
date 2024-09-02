import React from 'react';

function Button({ label}) {
  return (
    <button
 
     className="bg-rose-400 px-3 py-2 ml-4 text-sm md:text-lg rounded-md font-inter text-white"
    >
      {label}
    </button>
  );
}

export default Button;
