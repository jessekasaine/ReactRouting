import React from 'react'
import Contact from '../pages/Contact'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div>
          <Contact />
          <Outlet/>
    </div>
  )
}

export default UserLayout
