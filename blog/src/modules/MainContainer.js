import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/shared/Header/Header'
import Footer from '../components/shared/Footer/Footer'
import Slider from '../components/shared/Slider/Slider'
const MainContainer = () => {
  return (
    <>
        <Header />
        <Slider />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainContainer