import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { addStu } from '../../redux/StudentSlice'
const Student = () => {
      let disp = useDispatch();

     let allStu = useSelector(state=>state.StudentSlice);
    // let allStu = [];

    let { handleSubmit, handleChange } = useFormik({
        initialValues : {
          name : "",
          age : ""
        },
        onSubmit : (formData, {resetForm})=>{
          disp(addStu(formData))
          // resetForm();
        }
    })
  return (
    <div className="container">
          <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className="col-md-6 offset-md-3">
              <div className='form-group'>
                <label>Name</label>
                <input name='name' onChange={handleChange} type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Age</label>
                <input name='age' onChange={handleChange}  type='text' className='form-control' />
              </div>
              <br />
              <button type='submit' className='btn btn-success'>Add</button>
          </div>

        </div>
          </form>
        <div className="row">
            <div className="col-md-12 my-4">
                <table className="table table-dark">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allStu.map((value, index)=><tr key={value._id}><td>{index+1}</td><td>{value.name}</td><td>{value.age}</td></tr>)
                      }
                    </tbody>
                </table>


            </div>
        </div>
    </div>
  )
}

export default Student