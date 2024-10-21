import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 || Page not found</h1>
      <hr />
      <button className='bg-white text-black px-3 py-3 rounded-full' onClick={()=>navigate('/')}>Back Home </button>
    </div>
  )
}

export default NotFound
