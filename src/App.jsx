import { useState } from 'react'
import React from 'react'
import './App.css'
import AppointmentScheduler from './Components/AppointmentScheduler/AppointmentSchedular'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-7xl p-2 pt-4 m-auto h-full shadow-2xl shadow-blue-200 rounded-xl'>
    {/* <h1 >app</h1> */}
    <AppointmentScheduler />
     
    </main>
  )
}

export default App
