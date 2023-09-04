import React, {useEffect, useState} from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {API} from '../../util/API'
import { useNavigate, useParams } from 'react-router-dom'
const AddCategory = () => {
    let param = useParams();
    let navigate = useNavigate();

    

    let { handleSubmit, handleChange, values, setFieldValue } = useFormik({
        enableReinitialize : true,
        initialValues : {
            name : ""
        },
        onSubmit : (formData)=>{
            if(param.a){
                axios.put(`${API}/category/${param.a}`, formData).then(response=>{
                    // console.log(response.data);
                    navigate("/admin/categories");
                })
            }else{

                axios.post(`${API}/category`, formData).then(response=>{
                    // console.log(response.data);
                    navigate("/admin/categories");
                })
            }
        }
    })

    useEffect(()=>{
        if(param.a){
            axios.get(`${API}/category/${param.a}`).then(response=>{
                setFieldValue("name", response.data.name)
            })
        }
    }, [])

  return (
    <div className="container my-4">
        
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className='form-group'>
                    <label>{ param.a ? 'Update' : 'Add New' } Category Name</label>
                    <input value={values.name} type='text' name='name' onChange={handleChange} className='form-control' />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>{param.a ? 'Update' : 'Add'}</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default AddCategory