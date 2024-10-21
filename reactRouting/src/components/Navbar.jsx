import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between'>
          <NavLink to={'/'}><img className='w-20 cursor-pointer' src={logo}alt="" /></NavLink>
      <ul className='flex space-x-20 rounded-full shadow-sm shadow-white px-6 py-4'>
        
        <NavLink to={'/'}><li className='hover:text-sky-300 cursor-pointer transition duration-300 ease-in-out'>Home</li></NavLink>
        <NavLink to={'/products'}><li className='hover:text-sky-300 cursor-pointer transition duration-300 ease-in-out'>Products</li></NavLink>
        <NavLink to={'/about'}><li className='hover:text-sky-300 cursor-pointer transition duration-300 ease-in-out'>About</li></NavLink>
        <NavLink to={'/contact'}><li className='hover:text-sky-300 cursor-pointer transition duration-300 ease-in-out'>Contact</li></NavLink>
      </ul>
          <button onClick={()=>navigate('/contact')} className='bg-white text-black px-3 py-3 rounded-full'>Get Started</button>
    </div>
  )
}

export default Navbar
