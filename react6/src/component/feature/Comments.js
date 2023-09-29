import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'

const Comments = () => {
    let param = useParams();

    let [recPerPage, setRecPerPage] = useState(50);
    let [totalRec, setTotalRec] = useState(0);
    let [totalPages, setTotalPages] = useState(0);
    let [allComment, setAllComment] = useState([]);
    let [pagenum, setPagenum] = useState(1);
    let [counter, setCounter] = useState(0);
    useEffect(()=>{
        if(param.pageno){
            let x = recPerPage*(param.pageno-1);
            setCounter(x);
            setPagenum(param.pageno);
            axios.get(`http://localhost:8080/api/comments/${pagenum}/${recPerPage}`).then(response=>{
                setAllComment(response.data);
            })
        }else{

            axios.get(`http://localhost:8080/api/comments/${pagenum}/${recPerPage}`).then(response=>{
                setAllComment(response.data);
            })
        }
        
    },[param])

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
                    <li className='page-item'>
                        <NavLink className={'page-link '+(pagenum==1 ? 'disabled' : '')} to={`/comment/${pagenum-1}`}>Prev</NavLink>
                    </li>
                    {
                        Array.from({length : totalPages}).map((value, index)=><li className='page-item'>
                            {
                                    ! param.pageno && index+1==1 
                                    ? 
                                    <NavLink className='page-link active' to={`/comment/${index+1}`}>{index+1}</NavLink> 
                                    : 
                                    <NavLink className='page-link' to={`/comment/${index+1}`}>{index+1}</NavLink>
                            }
                        </li>)
                    }
                    <li className='page-item'>
                        <NavLink className={'page-link '+(pagenum==totalPages ? 'disabled' : '')} to={"/comment/"+(parseInt(pagenum)+1)}>Next</NavLink>
                    </li>
                    
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
                                <td>{counter+index+1}</td>
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

