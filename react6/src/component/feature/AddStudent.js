import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API } from '../../util/API'

const AddStudent = () => {
    let navigate = useNavigate();
    let addFrm = useFormik({
        initialValues : {
            name : "",
            age : "",
            gender : "",
            city : "",
            fee : ""
        },
        onSubmit : async (formData)=>{
            await axios.post(`${API}/student`, formData);
            navigate("/student")
        }
    })
  return (
    <>
    <div className="container my-4">
            <div className="row">
                <form onSubmit={addFrm.handleSubmit}>
                <div className="col-md-6 offset-md-3">
                    <div>
                        <label>Name</label>
                        <input type='text' className='form-control' name='name' onChange={addFrm.handleChange} />
                        
                    </div>
                    <div>
                        <label>Age</label>
                        <input type='text' className='form-control' name='age' onChange={addFrm.handleChange} />

                    </div>
                    <div>
                        <label>Fee</label>
                        <input type='text' className='form-control' name='fee' onChange={addFrm.handleChange} />

                    </div>
                    <div>
                        <label>City</label>
                        <select className='form-control' name='city' onChange={addFrm.handleChange} >
                            <option>Select</option>
                            <option>Indore</option>
                            <option>Mumbai</option>
                            <option>Pune</option>
                        </select>

                    </div>
                    <div className='mt-4'>
                        <label>Gender</label>
                        <br />
                        Male <input type='radio' name='gender' value="male" onChange={addFrm.handleChange} />
                        Female <input type='radio' name='gender' value="female" onChange={addFrm.handleChange} />

                    </div>
                    <br />

                    <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>Save</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddStudent