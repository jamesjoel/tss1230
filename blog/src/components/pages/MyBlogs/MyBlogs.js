import React, {useState, useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {API} from '../../../util/API'
const MyBlogs = () => {
  let delBtn = useRef();
  let [allBlogs, setAllBlogs] = useState([]);
  let [blog, setBlog] = useState({});
  useEffect(()=>{
    axios.get(`${API}/blogs/user`, {
      headers : {'Authorization' : localStorage.getItem("access-token")}
    }).then(response=>{
      setAllBlogs(response.data);
    })
  }, [])

  let askDelete = (obj)=>{
      setBlog(obj);
  }
  let confDelete = ()=>{
      axios.delete(`${API}/blogs/user/${blog._id}`, {
        headers  : {'Authorization' : localStorage.getItem("access-token")}
      }).then(response=>{
        if(response.data.success==true){
          delBtn.current.click();
          setAllBlogs(()=>{
            return allBlogs.filter(value=> value != blog);
          })
        }
      })
  }
  return (
    <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <h4>Manage Your Blogs</h4>
                    <NavLink to="/blogger/addblog" className="btn btn-primary">Add New Blog</NavLink>   
                    <table className="table table-dark table-bordered my-4">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>Title</th>
                          <th>Category</th>
                          <th>Delete</th>
                        </tr>

                      </thead>
                      <tbody>
                        {
                          allBlogs.map((blog, index)=>{
                            return(
                              <tr key={blog._id}>
                                <td>{index+1}</td>
                                <td>{blog.title}</td>
                                <td>{blog.category}</td>
                                <td><button data-toggle="modal" data-target='#delModal' onClick={()=>askDelete(blog)} className='btn btn-danger btn-sm'>Delete</button></td>
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
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>Delete Blogs !</div>
              <div className='modal-body'>
                  <p>Are you sure want to delete {blog ? <b>{blog.title}</b> : ''} ?</p>
              </div>
              <div className='modal-footer'>
                <button className='btn btn-danger' onClick={confDelete}>Delete</button>
                <button className='btn btn-info' ref={delBtn} data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default MyBlogs