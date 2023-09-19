import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import {API} from '../../util/API'
import {NavLink, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeCate } from '../../redux/CategorySlice'

const Categories = () => {
  let delBtn = useRef();
  let disp = useDispatch();
  let navigate = useNavigate();
  let [cate, setCate] = useState({});
  let [allCate, setAllCate] = useState([]);
  useEffect(()=>{
    axios.get(`${API}/category`).then(response=>{
      setAllCate(response.data);
      
    })
  }, [])


  let askDelete = (obj)=>{
     // console.log(obj); // { _id : sdfgsdfgsdg, name : "Helth"}
     setCate(obj);
  }

  let confDelete = ()=>{
    // console.log(delBtn.current)
    axios.delete(`${API}/category/${cate._id}`).then(response=>{
      
      delBtn.current.click();
      setAllCate(()=>allCate.filter(value => value != cate))
      disp(removeCate(cate));
    })
  }

  let update = (obj)=>{
    navigate(`/admin/categories/update/${obj._id}`);
  }

  return (
    <>
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <NavLink to="/admin/categories/add" className="btn btn-primary btn-sm">Add New Category</NavLink>
          <table className="table table-dark">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Category Name</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                allCate.map((value, index)=>{
                  return(
                    <tr key={value._id}>
                      <td>{index+1}</td>
                      <td>{value.name}</td>
                      <td><button onClick={()=>update(value)} className='btn btn-info btn-sm'>Update</button></td>
                      {/* <td><NavLink to={`/admin/categories/update/${value._id}`} className="btn btn-info">Update</NavLink></td> */}
                      <td><button onClick={()=>askDelete(value)} data-toggle="modal" data-target="#delModal" className='btn btn-danger btn-sm'>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>


          </table>
        </div>
      </div>
    </div>


    <div className='modal fade' id='delModal'>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Delete Category</h3>
          </div>
          <div className="modal-body">
            <p>Are you sure delete { cate ? <b>{cate.name}</b> : '' } category !</p>
          </div>
          <div className="modal-footer">
            <button className='btn btn-danger'  onClick={confDelete}>Delete</button>
            <button className='btn btn-info' ref={delBtn}  data-dismiss="modal">Cancle</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Categories


/*

  let demo = (a)=>{
    a.target.value
  }

  <input onKeyUp={demo}


  <input onKeyUp={()=>demo('xyz')}
  
  
  <input onKeyUp={(e)=>demo(e)}





*/