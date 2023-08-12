import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import {API} from '../../../constants/API'

const AddHotel = () => {
    let navigate = useNavigate();

    useEffect(()=>{
        if(! localStorage.getItem("access-token-owner")){
            navigate("/hotels/login")
        }
    }, [])

    let { handleSubmit, handleChange } = useFormik({
        initialValues : {
            hotelname : "",
            address : "",
            classtype : "",
            facilities : [],
            normalroom : "",
            deluxroom : "",
            luxaryroom : ""
        },
        onSubmit : (formData)=>{
            axios.post(`${API}/hotels`, formData, {
                headers : { 'Authorization' : localStorage.getItem('access-token-owner') }
            }).then(response=>{
                console.log(response.data);
            })
        }
    })
  return (
    <div className="container my-4" style={{minHeight : "650px"}}>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-12">
                    <h4>Add Your Hotel Information</h4>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <div className='form-group'>
                                <label className='font-weight-bold'>Hotel Name</label>
                                <input type='text' name='hotelname' onChange={handleChange} className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label className='font-weight-bold'>Complete Address</label>
                                <textarea type='text' name='address' onChange={handleChange} className='form-control' ></textarea>
                            </div>
                            <div className='form-group'>
                                <label className='font-weight-bold'>Class Type</label>
                                <select name='classtype' onChange={handleChange} className='form-control'>
                                    <option>Select</option>
                                    <option>1 Star</option>
                                    <option>2 Star</option>
                                    <option>3 Star</option>
                                    <option>4 Star</option>
                                    <option>5 Star</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label className='font-weight-bold'>Facilities List</label>
                                <br />
                                <input type='checkbox' name='facilities' value="Swiming Pool" onChange={handleChange}/> Swimming Pool
                                <br />
                                <input type='checkbox' name='facilities' value="Wifi" onChange={handleChange}/> Wifi
                                <br />
                                <input type='checkbox' name='facilities' value="Jacuzzi" onChange={handleChange}/> Jacuzzi
                                <br />
                                <input type='checkbox' name='facilities' value="Restorant" onChange={handleChange}/> Restorent
                                <br />
                                <input type='checkbox' name='facilities' value="Pick & Drop" onChange={handleChange}/> Pick & Drop
                                <br />
                                <input type='checkbox' name='facilities' value="Party Hall" onChange={handleChange}/> Party Hall
                                
                                
                            </div>
                            <div className='form-group'>
                                <label className='font-weight-bold'>Normal Room</label>
                                <input name='normalroom' onChange={handleChange} type='text' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label className='font-weight-bold'>Delux Room</label>
                                <input name='deluxroom' onChange={handleChange} type='text' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label className='font-weight-bold'>Luxary Room</label>
                                <input name='luxaryroom' onChange={handleChange} type='text' className='form-control' />
                            </div>
                            <br />
                            <input type='submit' className='btn btn-success' value="Add Your Hotel" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
  )
}

export default AddHotel