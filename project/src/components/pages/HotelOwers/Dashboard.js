import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate = useNavigate();

    useEffect(()=>{
        if(! localStorage.getItem("access-token-owner")){
            navigate("/hotels/login")
        }
    }, [])
  return (
    <>
    <div className="container" style={{minHeight : "650px"}}>
        <h3>Hotel Owners Dashborard</h3>
    </div>
    </>
  )
}

export default Dashboard