import React, {useEffect} from 'react'
import Header from '../admincomponentes/shared/Header'
import Footer from '../admincomponentes/shared/Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchStu } from '../redux/StudentSlice'
import { useNavigate } from 'react-router-dom'

const AdminContainer = () => {
  
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("lorem")){
      navigate("/");
    }
  }, [])

  let disp = useDispatch();
  disp(fetchStu())
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