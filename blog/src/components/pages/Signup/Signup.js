import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik';
import { API } from '../../../util/API';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    let [city, setCity] = useState([]);
    let [state, setState] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        
        axios.get(`${API}/city/state`).then(response=>{
            setState(response.data);
        })
    }, [])

    let { handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues : {
            fullname : "",
            username : "",
            password : "",
            address : "",
            city : "",
            contact : "",
            state : "",
            repassword : ""
        },
        onSubmit : (formData)=>{
            console.log(formData);
            return;
            axios.post(`${API}/user/signup`, formData).then(response=>{
                navigate("/login");
            })
        }

    })


    let getCity = (e)=>{
        let x = e.target.value;
        axios.get(`${API}/city/state/${x}`).then(response=>{
            setCity(response.data);
        })
    }
  return (
    <div className='container' style={{minHeight  : "700px"}}>
        <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h4>User Registartion</h4>
                    </div>

                    <div className='card-body'>
                        <label>Full Name</label>
                        <input type='text' onChange={handleChange} name='fullname' className='form-control' />
                    </div>
                    <div className='card-body'>
                        <label>Username/Email</label>
                        <input type='text' onChange={handleChange} name='username' className='form-control' />
                    </div>
                    <div className='card-body'>
                        <label>Password</label>
                        <input type='password' onChange={handleChange} name='password' className='form-control' />
                    </div>
                    <div className='card-body'>
                        <label>Re-Password</label>
                        <input type='password' onChange={handleChange} name='repassword' className='form-control' />
                    </div>
                    <div className='card-body'>
                        <label>Address</label>
                        <textarea className='form-control' onChange={handleChange} name='address'></textarea>
                    </div>

                    <div className='card-body'>
                        <label>State</label>
                        <select className='form-control' onChange={(e)=>{ handleChange(e); getCity(e) }} name='state'>
                            <option>Select</option>
                            {
                                state.map((value, index)=><option key={index}>{value}</option>)
                            }
                        </select>
                    </div>
                    <div className='card-body'>
                        <label>City</label>
                        <select className='form-control' onChange={handleChange} name='city'>
                            <option>Select State First</option>
                            {
                                city.map(value=><option key={value._id}>{value.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='card-body'>
                        <label>Contact</label>
                        <input type='text' onChange={handleChange} name='contact' className='form-control' />
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

export default Signup

/*

    



*/