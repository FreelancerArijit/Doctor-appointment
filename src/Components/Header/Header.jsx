import React from 'react';
import Button from './../Button/Button';

function Header() {
  return (
    <header className='w-full max-w-7xl p-4 sm:p-2 mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0'>
      
      <div className="logo flex flex-row items-center gap-4 sm:gap-5">
        <img src="./images/logo-main.png" alt="Logo" className="h-14 w-14 sm:h-16 sm:w-16" />
        <h1 className='text-xl sm:text-2xl font-bold text-center sm:text-left'>
          Doctor <span className='text-blue-600'>Appointment</span>
        </h1>
      </div>

      <div className="action-button self-end sm:self-auto">
        <Button icon='./images/call.png' text="Call Us" />
      </div>
    </header>
  );
}

export default Header;
