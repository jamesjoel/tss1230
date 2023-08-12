import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import OwnerLoginSchema from '../../../schemas/OwnerLoginSchema'
import {API} from '../../../constants/API'
import axios from 'axios'

const Login = () => {

    let navigate = useNavigate();
    let [msg, setMsg] = useState("");

    let { handleChange, handleSubmit, errors, touched } = useFormik({
        validationSchema : OwnerLoginSchema,
        initialValues : {
            username : "",
            password : ""
        },
        onSubmit : (formData)=>{
            axios.post(`${API}/owner/auth`, formData).then(response=>{
                if(response.data.success== true){
                    let token = response.data.token;
                    localStorage.setItem("hotelname", response.data.hotelname);
                    localStorage.setItem("access-token-owner", token);
                    navigate("/owner/dashboard");

                }else{
                    if(response.data.errType == 1){
                        setMsg("This Username and Password incorrect");
                    }
                    if(response.data.errType == 2){
                        
                        setMsg("This Password incorrect");

                    }
                }
            })
        }
    });

  return (
    <div className="container" style={{minHeight : "650px"}}>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3 border border-dark p-4 my-5">
                <h2 className='text-center'>Hotels Owner Login</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input type='text' name='username' onChange={handleChange} placeholder='Username' className={'form-control ' +(errors.username && touched.username ? 'is-invalid' : '')} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type='password' name='password' onChange={handleChange} placeholder='Password' className={'form-control ' +(errors.password && touched.password ? 'is-invalid' : '')} />
                </div>
                {
                    msg ? <div className='alert alert-danger'>{msg}</div> : ''
                }
                
                <br />
                <button type='submit' className='btn btn-primary'>Login</button>
                <br />
                <small>For New Owners <NavLink className='text-primary' to='/hotels/registration'>Registration Here</NavLink></small>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Login

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjYWM0NDFkODEwYjE2MjBkM2EyY2UiLCJpYXQiOjE2OTE0ODI5ODEsImV4cCI6MTY5MTUwMDk4MX0.lTPGMB4KDuhGzEVar3yk4Sqc_XWqpvRrGEf9NCISTa0"