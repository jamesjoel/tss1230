import React, {useRef, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { addStu, delStu, updateStu } from '../../redux/StudentSlice'
const Student = () => {
      let closeBtn = useRef();
      let disp = useDispatch();
      let [stu, setStu] = useState({});
      let [newStu, setNewStu] = useState({});

     let allStu = useSelector(state=>state.StudentSlice);
    // let allStu = [];

    let { handleSubmit, handleChange, resetForm, values, setFieldValue } = useFormik({
        enableReinitialize : true,
        initialValues : {
          _id : "",
          name : "",
          age : ""
        },
        onSubmit : (formData)=>{
          if(stu._id){
            disp(updateStu(formData));
            setNewStu({ _id : "", name : "", age : ""})
          }else{

            disp(addStu(formData))
          }
          
          
          
          resetForm();
        }
    })

    let askDelete= (obj)=>{
        setStu(obj);
    }

    let confDelete = ()=>{
      disp(delStu(stu));
      closeBtn.current.click();
    }

    let update = (obj)=>{
      //console.log(obj)
      setNewStu(obj);
      setFieldValue("name", obj.name);
      setFieldValue("age", obj.age);
      setFieldValue("_id", obj._id);
    }

   let resetData = ()=>{
    resetForm();
    setNewStu({ _id : "", name : "", age : ""})
   }

  return (
    <>
    <div className="container">
          <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className="col-md-6 offset-md-3">
              <div className='form-group'>
                <label>Name</label>
                <input name='name' value={values.name} onChange={handleChange} type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Age</label>
                <input name='age' value={values.age} onChange={handleChange}  type='text' className='form-control' />
              </div>
              <br />
              <button type='submit' className='btn btn-success'>{ newStu._id ? 'Update' : 'Add' }</button>
              {
                newStu._id ? <button type='button' onClick={()=>resetData()} className='btn btn-primary'>Cancel</button> : ''
              }
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
                        <th>Delete</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allStu.map((value, index)=>{
                          return (
                            <tr key={value._id}>
                                <td>{index+1}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td><button data-toggle="modal" data-target="#delModel" onClick={()=>askDelete(value)} className='btn btn-sm btn-danger'>Del</button></td>
                                <td><button className='btn btn-sm btn-info' onClick={()=>update(value)}>Edit</button></td>
                              </tr>
                          )}
                          )
                      }
                    </tbody>
                </table>


            </div>
        </div>
    </div>

    <div className='modal fade' id='delModel'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Delete Student !</h4>
            </div>
            <div className="modal-body">
              <p>Are you sure want to delete { stu ? <b>{stu.name}</b> : '' }</p>
            </div>
            <div className="modal-footer">
              <button className='btn btn-danger' onClick={confDelete}>Delete</button>
              <button className='btn btn-info' data-dismiss="modal" ref={closeBtn}>Close</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Student