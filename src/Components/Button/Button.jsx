import React from 'react';

function Button({ text, icon }) {
  return (
    <button className="bg-blue-600 rounded-xl text-white font-bold flex items-center gap-2 sm:gap-4 px-3 py-2 sm:px-4 sm:py-2 min-w-fit max-w-xs">
      <img src={icon} alt="" className="h-6 w-6 sm:h-8 sm:w-8" />
      <span className="text-sm sm:text-base">{text}</span>
    </button>
  );
}

export default Button;
