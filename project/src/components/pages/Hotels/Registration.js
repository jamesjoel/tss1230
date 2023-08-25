import React, {useState, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {API} from '../../../constants/API';
import { useFormik } from 'formik'
import owerSchema from '../../../schemas/OwerSchema'




const Registration = () => {

    let navigate = useNavigate();
    let [city, setCity] = useState([]);
    let [state, setState] = useState([]);
    let [selectedState, setSelectedState] = useState("");

    let { handleSubmit, handleChange, errors, touched } = useFormik({
        validationSchema : owerSchema,
        initialValues : {
            ownername : "",
            email : "",
            username : "",
            hotelname : "",
            password : "",
            address : "",
            contact : "",
            city : "",
            state : "",
            repass : ""
        },
        onSubmit : (formData)=>{
            axios.post(`${API}/owner`, formData).then(response=>{
                navigate("/hotels/login")
            })
        }
    });

    useEffect(()=>{
        axios.get(`${API}/city/state`).then(response=>{
            setState(response.data);
        })
    }, [])
   
    
   
    
  return (
    <div className="container" style={{minHeight : "650px"}}>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3 border border-dark p-4 my-5">
                <h2 className='text-center'>Hotels Owner Registration</h2>
                <div className="form-group">
                    <label>Owner Name</label>
                    <input name='ownername' onChange={handleChange} type='text' placeholder='Full Name' className={'form-control ' + (errors.ownername && touched.ownername ? 'is-invalid' : '')} />
                    {
                        errors.ownername && touched.ownername ? <small className='text-danger'>{errors.ownername}</small> : ''
                    }
                </div>
                <div className="form-group">
                    <label>Your Hotel/Property Name</label>
                    <input name='hotelname' onChange={handleChange} type='text' placeholder='Hotel/Propery Name' className={'form-control ' + (errors.hotelname && touched.hotelname ? 'is-invalid' : '')} />
                    {
                        errors.hotelname && touched.hotelname ? <small className='text-danger'>{errors.hotelname}</small> : ''
                    }
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type='text' name='email' onChange={handleChange} placeholder='Email' className={'form-control ' + (errors.email && touched.email ? 'is-invalid' : '')} />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type='text' name='username' onChange={handleChange} placeholder='Username' className={'form-control ' + (errors.username && touched.username ? 'is-invalid' : '')} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type='password' name='password' onChange={handleChange} placeholder='Password' className={'form-control ' + (errors.password && touched.password ? 'is-invalid' : '')} />
                </div>
                <div className="form-group">
                    <label>Re-Password</label>
                    <input type='password' name="repass" onChange={handleChange} placeholder='Re-Password' className={'form-control ' + (errors.repass && touched.repass ? 'is-invalid' : '')} />
                </div>
                
                <div className="form-group">
                    <label>Full Address</label>
                    <textarea name='address' onChange={handleChange} placeholder='Address' className={'form-control ' + (errors.address && touched.address ? 'is-invalid' : '')} ></textarea>
                </div>
                
                <div className="form-group">
                    <label>State</label>
                    <select className={'form-control ' + (errors.state && touched.state ? 'is-invalid' : '')} name='state' onChange={handleChange}>
                        <option>Select</option>
                        {
                            state.map((s, n)=><option key={n}>{s}</option>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <select className={'form-control ' + (errors.city && touched.city ? 'is-invalid' : '')} name='city' onChange={handleChange}>
                        <option>Select</option>
                        
                    </select>
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type='text' name='contact' onChange={handleChange} placeholder='Contact' className={'form-control ' + (errors.contact && touched.contact ? 'is-invalid' : '')} />
                </div>
                <br />
                <input type='submit' className='btn btn-primary' value='Signup'/>
                <br />
                <small>Already a Registrad <NavLink className='text-primary' to='/hotels/login'>Login Here</NavLink></small>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Registration
