import React, {useState, useEffect, useRef} from 'react'
import {API} from '../../util/API'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Student = () => {

    let closeBtn = useRef();
    let navigate = useNavigate();
    let [allStu, setAllStu] = useState([]);
    let [stu, setStu] = useState();
    useEffect(()=>{
      (async ()=>{
        let response = await axios.get(`${API}/student`);
        setAllStu(response.data);
      })();  
    },[])

    let askDelete = (obj)=>{
        setStu(obj);
    }
    let askEdit = (obj)=>{
        navigate(`/student/edit/${obj.id}`);
    }
    let confDelete = async ()=>{
        await axios.delete(`${API}/student/${stu.id}`);
        setAllStu(()=>{
            return allStu.filter(value=>value.id != stu.id);
        })
        closeBtn.current.click();
    }

  return (
    <>
        <div className="container my-4">
            <div className="row">
                <div className="col-md-12">
                <NavLink to="/student/add" className="btn btn-info">Add</NavLink>
                    <table className='table table-dark my-4'>
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
                                allStu.map((value, index)=><tr key={value.id}>
                                    <td>{index+1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td><button data-bs-toggle="modal" data-bs-target="#delModal" onClick={()=>askDelete(value)} className='btn btn-sm btn-danger'>Delete</button></td>
                                    <td><button onClick={()=>askEdit(value)} className='btn btn-sm btn-info'>Update</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className='modal fade' id='delModal'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h3>Delete Student !!!</h3>
                    </div>
                    <div className='modal-body'>
                        <p>Are you sure want to delete { stu ? <b>{stu.name}</b> : '' }</p>
                    </div>
                    <div className='modal-footer'>
                        <button className='btn btn-danger' onClick={confDelete}>Delete</button>
                        <button className='btn btn-info' ref={closeBtn} data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Student