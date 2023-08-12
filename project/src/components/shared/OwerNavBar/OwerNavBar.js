import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

const OwerNavBar = () => {

    let [check, setCheck]= useState(false);
    useEffect(()=>{
        if(localStorage.getItem("access-token-owner")){
            setCheck(true);
        }
    }, [])

  return (
    <div className='container-fluid' style={{backgroundColor : "#FE080A"}}>
            <div className="container">
                
               <ul className='nav justify-content-end'>
                {
                    check ? 
                    <>
                    <li className='nav-item dropdown'>
                        <a href='#' className='nav-link dropdown-toggle text-light' data-toggle="dropdown">
                           {
                                localStorage.getItem("hotelname")
                            }
                        </a>
                        <div className='dropdown-menu'>
                            <NavLink className="dropdown-item" to="/owner/dashboard" >Dashboard</NavLink>
                            <NavLink className="dropdown-item" to="/owner/myhotels" >My Hotels</NavLink>
                            <NavLink className="dropdown-item" to="/owner/logout" >Logout</NavLink>
                        </div>
                    </li>
                    </>
                    :
                    <li className='nav-item'>
                     <NavLink to='/hotels/login' className='nav-link text-light'><i className="fa fa-map-marker" aria-hidden="true"></i> List Your Hotels</NavLink>
                    </li>
                }
                  
               </ul>
            </div>
         </div>
  )
}

export default OwerNavBar