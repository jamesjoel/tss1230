import React, {useState} from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {API} from '../../util/API'
import { useNavigate } from 'react-router-dom'
const AddCategory = () => {
    let navigate = useNavigate();
    let { handleSubmit, handleChange } = useFormik({
        initialValues : {
            name : ""
        },
        onSubmit : (formData)=>{
            axios.post(`${API}/category`, formData).then(response=>{
                // console.log(response.data);
                navigate("/admin/categories");
            })
        }
    })
  return (
    <div className="container my-4">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className='form-group'>
                    <label>Category Name</label>
                    <input type='text' name='name' onChange={handleChange} className='form-control' />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>Add</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default AddCategory