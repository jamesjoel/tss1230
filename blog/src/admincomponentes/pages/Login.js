import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import axios from "axios"
import {API} from '../../util/API'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adminLogin } from '../../redux/AdminAuthSlice'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
const Login = () => {

    let navigate = useNavigate();
    let disp = useDispatch();

    useEffect(()=>{
        if(localStorage.getItem("lorem")){
            navigate("/admin/dashboard");
        }
    }, [])

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
                    disp(adminLogin());
                    navigate("/admin/dashboard");
                }
            })
        }
    })

  return (
    <>
        <Header />
        <div className='container my-4' style={{minHeight : "650px"}}>
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
        <Footer />
    </>
  )
}

export default Login