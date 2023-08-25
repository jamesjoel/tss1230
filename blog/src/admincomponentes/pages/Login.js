import React, {useState} from 'react'
import {useFormik} from 'formik'
import axios from "axios"
import {API} from '../../util/API'
import {useNavigate} from 'react-router-dom'
const Login = () => {

    let navigate = useNavigate();

    let { handleSubmit, handleChange } = useFormik({
        initialValues : {
            username : "",
            password : ""
        },
        onSubmit : (formData) =>{
            axios.post(`${API}/admin/auth`, formData).then(response=>{
                console.log(response.data);
                if(response.data.success==true){
                    localStorage.setItem("lorem", response.data.admintoken)
                    navigate("/admin/dashboard");
                }
            })
        }
    })

  return (
    <>
        <div className='container my-4'>
            <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <h3 className='text-center'>Administrator Login</h3>
                    <div className='form-group'>
                        <label>Username</label>
                        <input name='username' onChange={handleChange} type='text' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input name='password' onChange={handleChange} type='password' className='form-control' />
                    </div>
                    <br />
                    <button type='submit' className='btn btn-primary btn-block'>Login</button>
                </div>
            </div>
            </form>
        </div>
    </>
  )
}

export default Login