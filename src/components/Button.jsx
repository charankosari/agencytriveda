import React from 'react';

function Button({ label}) {
  return (
    <button
 
     className="bg-violet-500 px-3 py-2 ml-4  rounded-full font-inter text-white"
    
    >
      {label}
    </button>
  );
}

export default Button;
