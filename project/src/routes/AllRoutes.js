import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import About from '../components/pages/About/About'
import Login from '../components/pages/Login/Login'
import Signup from '../components/pages/Signup/Signup'
import HotelsLogin from '../components/pages/Hotels/Login'
import Registration from '../components/pages/Hotels/Registration'
import MyAccount from '../components/pages/MyAccount/MyAccount'
import Logout from '../components/pages/Logout/Logout'
import Dashboard from '../components/pages/HotelOwers/Dashboard'
import OwnerLogout from '../components/pages/HotelOwers/Logout'
import MyHotels from '../components/pages/HotelOwers/MyHotels'
import AddHotel from '../components/pages/HotelOwers/AddHotel'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='myaccount' element={<MyAccount />} />
            <Route path='logout' element={<Logout />} />

            <Route path='owner/dashboard' element={<Dashboard />} />
            <Route path='owner/logout' element={<OwnerLogout />} />
            <Route path='owner/myhotels' element={<MyHotels />} />
            <Route path='owner/add-hotel' element={<AddHotel />} />

            <Route path='hotels/login' element={<HotelsLogin />} />
            <Route path='hotels/registration' element={<Registration />} />
         </Routes>
    </>
  )
}

export default AllRoutes