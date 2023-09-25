import React, {useState, useEffect, useRef} from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { API } from '../../../util/API'
import { useNavigate } from 'react-router-dom'
import * as YUP from 'yup'

const addBlogSchema = YUP.object({
    title : YUP.string().required("Insert Blog Title"),
    category : YUP.string().required("Select Blog Category"),
    detail : YUP.string().required("Insert Blog Detail"),
    image : YUP.mixed().required("Insert Blog Image").test('valid-type', "This File Type Not Allword", (value)=>{
        //console.log(value);
        // value="c://fakepath/hello.10.logo.jpg"
        let arr = value.name.split(".")
        let ext = arr[arr.length-1];
        if(ext=="jpg" || ext=="png" || ext=="bmp" || ext=="jpeg" || ext=="gif" || ext == "mp4" || ext == "avi" || ext == "mpeg")
        {
            return true;
        }else{
            return false;
        }
        
    }).test('valid-size', 'Maxmimum size should not be more then 20 MB', (value)=>{
        if(value.size > (1024*1024*20)) // 2048
        {
            return false;
        }else{
            return true;
        }
    })
})

const AddBlog = () => {
    let myfile = useRef();
    let [cate, setCate] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/category`).then(response=>{
            setCate(response.data);
        })
    }, [])

    let { handleSubmit, handleChange, errors, touched, setFieldValue} = useFormik({
        validationSchema : addBlogSchema,
        initialValues : {
            title : "",
            category : "",
            detail : "",
            image : null
        },
        onSubmit : (formData)=>{
            // console.log(myfile.current.files[0])
            let frm = new FormData();
            frm.append("image", myfile.current.files[0]);
            frm.append("formdata", JSON.stringify(formData));
            
            axios.post(`${API}/blogs`, frm, {
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
                    <input type='text' onChange={handleChange} name='title' className={'form-control '+ (errors.title && touched.title ? 'is-invalid' : ''  )} />
                </div>
                <div className='form-group'>
                    <label>Category</label>
                    <select className={'form-control '+ (errors.category && touched.category ? 'is-invalid' : ''  )}  onChange={handleChange} name='category'>
                        <option>Select</option>
                        { cate.map((value, index)=> <option key={value._id}>{value.name}</option>) }
                    </select>
                </div>
                <div className='form-group'>
                    <label>Select Your Realeted Image</label>
                    <input ref={myfile} type='file' name='image' onChange={(event)=>setFieldValue("image", event.target.files[0])}   />
                    {
                        errors.image && touched.image ? <small className='text-danger'>{errors.image}</small> : ''  
                    }
                </div>
                <div className='form-group'>
                    <label>Blog Detail</label>
                    <textarea className={'form-control '+ (errors.detail && touched.detail ? 'is-invalid' : ''  )}  onChange={handleChange} name='detail'></textarea>
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