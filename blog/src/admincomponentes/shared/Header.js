import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { adminLogin } from '../../redux/AdminAuthSlice'
import { getAllStu } from '../../redux/StudentSlice'




const Header = () => {
  let disp = useDispatch();
  
  
  disp(getAllStu())

  let allStu = useSelector(state => state.StudentSlice)

  let isAdminLogginIn = useSelector(state=>state.AdminAuthSlice);

  useEffect(()=>{
    if(localStorage.getItem("lorem")){
        disp(adminLogin())
    }
  }, [])

  

  return (
    <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
            <NavLink className="navbar-brand" to="/admin">Administrator Panel</NavLink>
           {
            isAdminLogginIn.admin ? (<ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/dashboard">Dashboard</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/image">Image</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/bloggers">Bloggers</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/categories">Categories</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/student">Student({allStu.length})</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/logout">Logout</NavLink>
              </li>
            </ul>) : ''
           }
            
            </nav>
    </>
  )
}

export default Header