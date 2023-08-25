import React, {useEffect} from 'react'
import {Navigate} from 'react-router-dom'


const Logout = () => {
    useEffect(()=>{
        localStorage.removeItem("access-token")
        localStorage.removeItem("name")
    },[])
  return (
    <Navigate to="/login" />
  )
}

export default Logout