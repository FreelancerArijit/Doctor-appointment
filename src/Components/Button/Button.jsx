import React from 'react'

function Button({text, icon}) {
  return (
    <>
    <button className="btn bg-blue-600 rounded-xl w-35  h-10 text-white font-bold flex flex-row items-center gap-4 p-2 ">
        <img src={icon} alt="" className="src h-8 w-8 " />
        {text}</button>
    
    </>
   
  );
}

export default Button
