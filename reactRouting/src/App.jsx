import React from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import { Route, createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Register from './components/Register'
import RootLayout from './layout/RootLayout'
import UserLayout from './layout/UserLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products/>} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<UserLayout />} >
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register/>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
  return (
    <div className='container mx-auto'>
      <RouterProvider router={ router} />
        {/* <Route path='/contact' element={<Contact />}>
          <Route path='/login' element={ <Login/>} />
          <Route path='/login' element={<Register />} />
        <Route /> */}
    </div>
  )
}

export default App
