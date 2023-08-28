import React, {useEffect, useState} from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {API} from '../../util/API'
import { useNavigate, useParams } from 'react-router-dom'
const AddCategory = () => {
    let param = useParams();
    let navigate = useNavigate();

    

    let { handleSubmit, handleChange, values } = useFormik({
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

    useEffect(()=>{
        if(param.id){
            axios.get(`${API}/category/${param.id}`, {
                headers : {'Authorization' : localStorage.getItem("lorem")}
            }).then(response=>{
                console.log(response.data);
            })
        }
    }, [])

  return (
    <div className="container my-4">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className='form-group'>
                    <label>New Category Name</label>
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