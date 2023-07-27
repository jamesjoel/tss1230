import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container" style={{minHeight : "650px"}}>
        <div className="row">
            <div className="col-md-6 offset-md-3 border border-dark p-4 my-5">
                <h2 className='text-center'>User Login</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input type='text' placeholder='Username' className='form-control' />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type='password' placeholder='Password' className='form-control' />
                </div>
                <br />
                <input type='submit' className='btn btn-primary' value='Login'/>
                <br />
                <small>For New Customre <NavLink className='text-primary' to='/signup'>Registration Here</NavLink></small>
            </div>
        </div>
    </div>
  )
}

export default Login