import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { API } from '../../../util/API'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { doLogin } from '../../../redux/UserAuthSlice'

const Login = () => {
    let navigate = useNavigate();
    let disp = useDispatch();
    let { handleChange, handleSubmit, errors, touched } = useFormik({
        
        initialValues : {
            email : "",
            password : ""
        },
        
        onSubmit : (formData)=>{
            // console.log(formData)
            axios.post(`${API}/user/auth`, formData).then(response=>{
                if(response.data.success == true){
                    localStorage.setItem('access-token', response.data.token);
                    localStorage.setItem('name', response.data.name);
                    disp(doLogin());
                    navigate("/blogger/my-account");
                }
            })
        }
    })
  return (
    <div className='container' style={{minHeight  : "700px"}}>
        <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h4>User Login</h4>
                    </div>
                    <div className='card-body'>
                        <label>Username</label>
                        <input type='text' name='email' onChange={handleChange} className='form-control' />
                    </div>
                    <div className='card-body'>
                        <label>Password</label>
                        <input type='password' name='password' onChange={handleChange} className='form-control' />
                    </div>

                </div>
                <div className='card-footer'>
                    <input type='submit' className='btn btn-dark' />
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Login