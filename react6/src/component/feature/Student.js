import React, {useState, useEffect} from 'react'
import {API} from '../../util/API'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Student = () => {

    let [allStu, setAllStu] = useState([]);
    useEffect(()=>{
      (async ()=>{
        let response = await axios.get(`${API}/student`);
        setAllStu(response.data);
      })();  
    })

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
                            </tr>

                        </thead>
                        <tbody>
                            {
                                allStu.map((value, index)=><tr key={value.id}>
                                    <td>{index+1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Student