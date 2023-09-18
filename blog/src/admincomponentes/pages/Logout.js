import React from 'react'
import {Navigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adminLogout } from '../../redux/AdminAuthSlice'

const Logout = () => {
  let disp = useDispatch();

    localStorage.removeItem("lorem");
    disp(adminLogout());
  return (
    <Navigate to="/" />
  )
}

export default Logout