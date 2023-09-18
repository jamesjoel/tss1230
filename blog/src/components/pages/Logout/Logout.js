import React, {useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { doLogout } from '../../../redux/UserAuthSlice'


const Logout = () => {
  let disp = useDispatch();
    useEffect(()=>{
        localStorage.removeItem("access-token")
        localStorage.removeItem("name")
        disp(doLogout());
    },[])
  return (
    <Navigate to="/login" />
  )
}

export default Logout