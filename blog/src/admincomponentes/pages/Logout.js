import React, {useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adminLogout } from '../../redux/AdminAuthSlice'

const Logout = () => {
  let disp = useDispatch();

    useEffect(()=>{
      localStorage.removeItem("lorem");
      disp(adminLogout());
    }, [])
  return (
    <Navigate to="/" />
  )
}

export default Logout