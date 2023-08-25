import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { API } from '../../../util/API'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
    let [cate, setCate] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/category`).then(response=>{
            setCate(response.data);
        })
    }, [])

    let { handleSubmit, handleChange} = useFormik({
        initialValues : {
            title : "",
            category : "",
            detail : ""
        },
        onSubmit : (formData)=>{
            axios.post(`${API}/blogs`, formData, {
                headers : {'Authorization' : localStorage.getItem("access-token")}
            }).then(response=>{
                navigate("/blogger/my-blogs");
            })
        }
    })
  return (
    <div className="container my-5">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h4>Add New Blog</h4>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='text' onChange={handleChange} name='title' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Category</label>
                    <select className='form-control' onChange={handleChange} name='category'>
                        <option>Select</option>
                        { cate.map((value, index)=> <option key={value._id}>{value.name}</option>) }
                    </select>
                </div>
                <div className='form-group'>
                    <label>Blog Detail</label>
                    <textarea className='form-control' onChange={handleChange} name='detail'></textarea>
                </div>
                <br />
                <input type='submit' className='btn btn-primary' value="Post"/>
            </div>
        </div>
        </form>
    </div>
  )
}

export default AddBlog