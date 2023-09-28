import React, {useEffect} from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { API } from '../../util/API'

const AddStudent = () => {
    let navigate = useNavigate();
    let param = useParams();
    let addFrm = useFormik({
        enableReinitialize : true,
        initialValues : {
            name : "",
            age : "",
            gender : "",
            city : "",
            fee : ""
        },
        onSubmit : async (formData)=>{
            if(param.id){
                await axios.put(`${API}/student/${param.id}`, formData);
                navigate("/student")
            }else{

                await axios.post(`${API}/student`, formData);
                navigate("/student")
            }
        }
    })

    useEffect(()=>{
        if(param.id){
            axios.get(`${API}/student/${param.id}`).then(response=>{
                addFrm.setFieldValue("name", response.data.name);
                addFrm.setFieldValue("city", response.data.city);
                addFrm.setFieldValue("gender", response.data.gender);
                addFrm.setFieldValue("fee", response.data.fee);
                addFrm.setFieldValue("age", response.data.age);
            })
        }
    }, [])

  return (
    <>
    <div className="container my-4">
            <div className="row">
                <form onSubmit={addFrm.handleSubmit}>
                <div className="col-md-6 offset-md-3">
                    <div>
                        <label>Name</label>
                        <input type='text' value={addFrm.values.name} className='form-control' name='name' onChange={addFrm.handleChange} />
                        
                    </div>
                    <div>
                        <label>Age</label>
                        <input type='text' value={addFrm.values.age} className='form-control' name='age' onChange={addFrm.handleChange} />

                    </div>
                    <div>
                        <label>Fee</label>
                        <input type='text' value={addFrm.values.fee} className='form-control' name='fee' onChange={addFrm.handleChange} />

                    </div>
                    <div>
                        <label>City</label>
                        <select className='form-control' name='city' onChange={addFrm.handleChange} >
                            <option>Select</option>
                            <option selected={addFrm.values.city=="Indore"}>Indore</option>
                            <option selected={addFrm.values.city=="Mumbai"}>Mumbai</option>
                            <option selected={addFrm.values.city=="Pune"}>Pune</option>
                        </select>

                    </div>
                    <div className='mt-4'>
                        <label>Gender</label>
                        <br />
                        Male <input type='radio' checked={addFrm.values.gender=='male'} name='gender' value="male" onChange={addFrm.handleChange} />
                        Female <input type='radio' checked={addFrm.values.gender=='female'} name='gender' value="female" onChange={addFrm.handleChange} />

                    </div>
                    <br />

                    <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>{param.id ? 'Update' : 'Add'}</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddStudent