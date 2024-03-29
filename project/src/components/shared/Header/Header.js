import { useEffect, useState } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import OwerNavBar from '../OwerNavBar/OwerNavBar'

const Header = () => {

   let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

   useEffect(()=>{
      if(localStorage.getItem("access-token")){
         setIsUserLoggedIn(true)
      }
   }, [])

  return (
    <>
    <header>
         <div className="header">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">
                              <a href="index.html"><img src="/assets/images/logo.png" alt="#" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                 <NavLink className="nav-link" to="/">Home</NavLink>
                              </li>
                              <li className="nav-item">
                                 <NavLink className="nav-link" to="/about">About</NavLink>
                              </li>
                              {
                                 isUserLoggedIn ? 
                                 <>
                                    <li className="nav-item">
                                    <NavLink className="nav-link" to="/myaccount">My Account</NavLink>
                                    </li>
                                    <li className="nav-item">
                                       <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                    </li>
                                    
                                 </>
                                  : 
                                  <>
                                    <li className="nav-item">
                                          <NavLink className="nav-link" to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                          <NavLink className="nav-link" to="/signup">Signup</NavLink>
                                    </li>
                                 </>
                              }
                              
                              
                              
                              
                           </ul>
                           {
                              localStorage.getItem("access-token") ? <span className='navbar-text text-light badge badge-dark' style={{ fontSize : '16px', marginTop : "-15px", padding : "12px"}}> { localStorage.getItem("name") } </span> : ''
                           }
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         <OwerNavBar />
      </header>
    </>
  )
}

export default Header