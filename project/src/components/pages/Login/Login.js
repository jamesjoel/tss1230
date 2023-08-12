import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import userLoginSchema from '../../../schemas/UserLoginSchema'
import { useFormik } from 'formik'
import {  API } from '../../../constants/API'
import axios from 'axios'

const Login = () => {

    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");
    let { handleChange, handleSubmit, errors, touched } = useFormik({
        validationSchema : userLoginSchema,
        initialValues : {
            email : "",
            password : ""
        },
        
        onSubmit : (formData)=>{
            axios.post(`${API}/user/auth`, formData).then(response=>{
                
                if(response.data.success == true){
                    let token = response.data.token;
                    localStorage.setItem("access-token", token);
                    localStorage.setItem("name", response.data.name);
                    navigate("/myaccount");
                }
                else{
                    if(response.data.errType === 1){
                        setErrMsg("This Username/Email and Password is not found");
                    }
                    if(response.data.errType === 2){
                        setErrMsg("This Password is not correct");
                    }
                }
            })
        }
    })

  return (
    <div className="container" style={{minHeight : "650px"}}>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3 border border-dark p-4 my-5">
                {
                    errMsg ? <div className='alert alert-danger'>{errMsg} <button data-dismiss="alert" className='close'>x</button></div> : ''
                }
                

                <h2 className='text-center'>User Login</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input type='text' name='email' onChange={handleChange} placeholder='Username' className={'form-control ' + (errors.email && touched.email ? 'is-invalid' : '')} />
                    {
                        errors.email && touched.email ? <small className='text-danger'>{errors.email}</small> : ''
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type='password' name='password' onChange={handleChange} placeholder='Password' className={'form-control ' + (errors.password && touched.password ? 'is-invalid' : '')} />
                    {
                        errors.password && touched.password ? <small className='text-danger'>{errors.password}</small> : ''
                    }
                </div>
                <br />
                <input type='submit' className='btn btn-primary' value='Login'/>
                <br />
                <small>For New Customre <NavLink className='text-primary' to='/signup'>Registration Here</NavLink></small>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Login