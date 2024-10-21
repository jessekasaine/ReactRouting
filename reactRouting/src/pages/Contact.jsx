import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigation = useNavigate()
  return (
    <div>
      <h1>Contact page</h1>
      <div>
        <button onClick={()=>navigation('login')} className='bg-white text-black px-3 py-3 rounded-full'>Register</button>
        <button onClick={()=>navigation('register')} className='bg-white text-black px-3 py-3 rounded-full'>Login</button>
      </div>
    </div>
  )
}

export default Contact
