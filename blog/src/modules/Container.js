import React, {useEffect, useLayoutEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Container = () => {
    let navigate = useNavigate();
    useLayoutEffect(()=>{
        if(! localStorage.getItem("access-token")){
            navigate("/login");
        }
    },[])
  return (
    <>
        <div style={{minHeight : "650px"}}>
          <Outlet />
        </div>
    </>
  )
}

export default Container