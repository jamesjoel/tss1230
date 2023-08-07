import React, {useState, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { API } from '../../../constants/API';
import { useFormik } from 'formik';
import userSchema from '../../../schemas/UserSchema';



const Signup = () => {

    let navigate = useNavigate();
   
    let { handleSubmit, handleChange, errors, touched, values } = useFormik({
        validationSchema : userSchema,
        initialValues : {
            fullname : "",
            username : "",
            password : "",
            gender : "",
            address : "",
            city : "",
            contact : "",
            repassword : ""
        },
        onSubmit : (formData)=>{
            axios.post(`${API}/user`, formData).then((response)=>{
                navigate("/login");
            })
        }
    })

    // console.log(values)

    let [cityData, setCityData] = useState([]);
    //http://localhost:8080/api/city
    useEffect(()=>{
        axios.get(`${API}/city`).then((response)=>{
            
            setCityData(response.data);
        })
    }, [])

    // let save = ()=>{
    //     axios.post(`${API}/user`, user).then((response)=>{
    //         console.log(response.data);
    //     })
    // }

  return (
    
    <div className="container" style={{minHeight : "650px"}}>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3 border border-dark p-4 my-5">
                <h2 className='text-center'>User Registration</h2>

                
                <div className="form-group">
                    <label>Full Name</label>

                    <input type='text' name='fullname' onChange={handleChange}  placeholder='Full Name' className={'form-control '+ (errors.fullname && touched.fullname ? 'is-invalid' : '')} />
                    {
                        errors.fullname && touched.fullname ? <small className='text-danger'>{errors.fullname}</small> : ''
                    }
                    

                    
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input  type='text' name='username' onChange={handleChange} placeholder='Username' className={'form-control '+ (errors.username && touched.username ? 'is-invalid' : '')} />
                    {
                        errors.username && touched.username ? <small className='text-danger'>{errors.username}</small> : ''
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type='text' name='password' onChange={handleChange} placeholder='Password' className={'form-control '+ (errors.password && touched.password ? 'is-invalid' : '')} />
                    {
                        errors.password && touched.password ? <small className='text-danger'>{errors.password}</small> : ''
                    }
                </div>
                <div className="form-group">
                    <label>Re-Password</label>
                    <input type='password' name='repassword' onChange={handleChange}  placeholder='Re-Password' className={'form-control '+ (errors.repassword && touched.repassword ? 'is-invalid' : '')} />
                    {
                        errors.repassword && touched.repassword ? <small className='text-danger'>{errors.repassword}</small> : ''
                    }
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <br />
                    Male <input type='radio' value="male" name='gender' onChange={handleChange}/>
                    Female <input type='radio' value="female" name='gender' onChange={handleChange}/>
                    <br />
                    {
                        errors.gender && touched.gender ? <small className='text-danger'>{errors.gender}</small> : ''
                    }
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea placeholder='Address' name='address' onChange={handleChange} className={'form-control '+ (errors.address && touched.address ? 'is-invalid' : '')} ></textarea>
                    {
                        errors.address && touched.address ? <small className='text-danger'>{errors.address}</small> : ''
                    }
                </div>
                <div className="form-group">
                    <label>City</label>
                    <select name='city' onChange={handleChange} className={'form-control '+ (errors.city && touched.city ? 'is-invalid' : '')}>
                        <option value=''>Select</option>
                        {
                            cityData.map(c => <option value={c.name} key={c._id}>{c.name}</option>)
                        }
                    </select>
                    {
                        errors.city && touched.city ? <small className='text-danger'>{errors.city}</small> : ''
                    }
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input  type='text' placeholder='Contact' name='contact' onChange={handleChange} className={'form-control '+ (errors.contact && touched.contact ? 'is-invalid' : '')} />
                    {
                        errors.contact && touched.contact ? <small className='text-danger'>{errors.contact}</small> : ''
                    }
                </div>
                <br />
                <input type='submit' className='btn btn-primary' value='Signup'/>
                <br />
                <small>Already a Customre <NavLink className='text-primary' to='/login'>Login Here</NavLink></small>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Signup