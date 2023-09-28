import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Comments = () => {

    let [recPerPage, setRecPerPage] = useState(70);
    let [totalRec, setTotalRec] = useState(0);
    let [totalPages, setTotalPages] = useState(0);
    let [allComment, setAllComment] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/api/comments").then(response=>{
            setAllComment(response.data);
        })
        

    },[])

    useEffect(()=>{
        axios.get("http://localhost:8080/api/comments/total").then(response=>{
            setTotalRec(response.data.total);
            let a = Math.ceil(response.data.total/recPerPage);
            setTotalPages(a);
        })
    },[])

  return (
    <div className='container my-4'>
        <div className='row'>
            <div className="col-md-12">
                <ul className='pagination'>
                    {
                        Array.from({length : totalPages}).map((value, index)=><li className='page-item'>
                                <NavLink className='page-link' to="/">{index+1}</NavLink>
                        </li>)
                    }
                    
                    
                </ul>
                <table className='table table-dark mt-4'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allComment.map((value, index)=><tr key={value._id}>
                                <td>{index+1}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Comments