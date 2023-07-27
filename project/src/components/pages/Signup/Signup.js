import React from 'react'
import { NavLink } from 'react-router-dom'
const Signup = () => {
  return (
    <div className="container" style={{minHeight : "650px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3 border border-dark p-4 my-5">
                <h2 className='text-center'>User Registration</h2>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type='text' placeholder='Full Name' className='form-control' />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type='text' placeholder='Username' className='form-control' />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type='password' placeholder='Password' className='form-control' />
                </div>
                <div className="form-group">
                    <label>Re-Password</label>
                    <input type='password' placeholder='Re-Password' className='form-control' />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <br />
                    Male <input type='radio' />
                    Female <input type='radio' />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea placeholder='Address' className='form-control' ></textarea>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <select className='form-control' >
                        <option>Select</option>
                        <option>Indore</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type='text' placeholder='Contact' className='form-control' />
                </div>
                <br />
                <input type='submit' className='btn btn-primary' value='Signup'/>
                <br />
                <small>Already a Customre <NavLink className='text-primary' to='/login'>Login Here</NavLink></small>
            </div>
        </div>
    </div>
  )
}

export default Signup