import React,{useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { API } from '../../../constants/API';

const MyHotels = () => {
  let [hotels, setHotels] = useState([]);
  let navigate = useNavigate();

    useEffect(()=>{
        if(! localStorage.getItem("access-token-owner")){
            navigate("/hotels/login")
        }
    }, [])

    useEffect(()=>{
      axios.get(`${API}/hotels/owner`, {
        headers : { 'Authorization' : localStorage.getItem("access-token-owner")}
      }).then(response=>{
        //console.log(response.data);
        setHotels(response.data);
      })
    }, [])


  return (
    <>
        <div className="container my-4" style={{minHeight : "650px"}}>
            <div className="row">
                <div className="col-md-12">
                    <NavLink className="btn btn-info btn-sm" to="/owner/add-hotel">Add Your Hotel</NavLink>
                    <table className='table table-dark my-3'>
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>Hotel Name</th>
                          <th>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          hotels.map((hotel, index)=>{
                            return(
                              <tr>
                                <td>{index+1}</td>
                                <td>{hotel.hotelname}</td>
                                <td>{hotel.address}</td>
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

export default MyHotels