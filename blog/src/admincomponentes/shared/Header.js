import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  let [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem("lorem")){
      setIsAdminLoggedIn(true)
    }
  }, [])
  return (
    <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
            <NavLink className="navbar-brand" to="/admin">Administrator Panel</NavLink>
           {
            isAdminLoggedIn ? (<ul className="navbar-nav">
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
                  <NavLink className="nav-link" to="/admin/logout">Logout</NavLink>
              </li>
            </ul>) : ''
           }
            
            </nav>
    </>
  )
}

export default Header