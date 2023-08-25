import React from 'react'
import Header from '../admincomponentes/shared/Header'
import Footer from '../admincomponentes/shared/Footer'
import { Outlet } from 'react-router-dom'
const AdminContainer = () => {
  return (
    <>
        <Header />
        <div className='container-fluid' style={{minHeight : "650px"}}>

            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default AdminContainer