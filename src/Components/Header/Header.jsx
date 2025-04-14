import React from 'react'
import Button from './../Button/Button'

function Header() {
  return (
    <header className='h-20 w-7xl p-2 m-auto  flex flex-row items-center justify-between'>
      <div className="logo flex flex-row items-center gap-5">
      <img src="./images/logo-main.png" alt="" className="h-16 w-16" />
        <h1 className='text-2xl font-bold'>
            Doctor <span className='text-blue-600'> Appointment </span></h1>
      </div>

      <div className="action-butto"><Button icon='./images/call.png' text="Call Us"  /></div>
      
      
    </header>
  )
}

export default Header
