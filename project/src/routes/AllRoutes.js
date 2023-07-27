import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import About from '../components/pages/About/About'
import Login from '../components/pages/Login/Login'
import Signup from '../components/pages/Signup/Signup'
import HotelsLogin from '../components/pages/Hotels/Login'
import Registration from '../components/pages/Hotels/Registration'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            
            <Route path='hotels/login' element={<HotelsLogin />} />
            <Route path='hotels/registration' element={<Registration />} />
         </Routes>
    </>
  )
}

export default AllRoutes