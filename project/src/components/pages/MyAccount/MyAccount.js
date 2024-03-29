import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const MyAccount = () => {

  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("access-token"))
    {
        navigate("/login");
    }
  })

  return (
    <>
        <div className='container' style={{minHeight : "700px"}}>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>My Account Page</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default MyAccount