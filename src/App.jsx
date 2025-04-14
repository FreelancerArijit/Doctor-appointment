import { useState } from 'react'
import React from 'react'
import './App.css'
import AppointmentScheduler from './Components/AppointmentScheduler/AppointmentSchedular'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-full max-w-7xl p-4 sm:p-6 pt-6 sm:pt-8 mx-auto h-full shadow-lg sm:shadow-2xl shadow-blue-100 sm:shadow-blue-200 rounded-lg sm:rounded-xl'>
    {/* <h1>app</h1> */}
    <AppointmentScheduler />
  </main>
  
  )
}

export default App
