import React, {useRef} from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {API} from '../../util/API'
import {useNavigate} from 'react-router-dom'

const Image = () => {
    let navigate = useNavigate();
    let file = useRef();
    let { handleChange, handleSubmit } = useFormik({
        initialValues : {
            name : "",
            image : ""
        },
        onSubmit:(formData)=>{
            // console.log(formData)
            // console.log(file.current.files[0]);
            let myfile = file.current.files[0];

            let frm = new FormData();
            frm.append("abc", formData.name);
            frm.append("photo", myfile);
            axios.post(`${API}/image`, frm).then(response=>{
                
                navigate("/admin/dashboard");
            })
        }
    })
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 my-4">
                <form onSubmit={handleSubmit}>
                    Image Name <input name='name' onChange={handleChange} type='text' />
                    <br />
                    <br />
                    Select Image <input ref={file} name='image' onChange={handleChange} type='file' />
                    <br />
                    <br />
                    <button type='submit' className='btn btn-primary' >Upload</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Image