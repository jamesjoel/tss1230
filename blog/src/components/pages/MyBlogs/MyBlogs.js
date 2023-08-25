import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {API} from '../../../util/API'
const MyBlogs = () => {
  let [allBlogs, setAllBlogs] = useState([]);
  useEffect(()=>{
    axios.get(`${API}/blogs/user`, {
      headers : {'Authorization' : localStorage.getItem("access-token")}
    }).then(response=>{
      setAllBlogs(response.data);
    })
  }, [])
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
                              </tr>
                            )
                          })
                        }
                          
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default MyBlogs