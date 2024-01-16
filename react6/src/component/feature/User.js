import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const User = () => {

    let [user, setUser] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
            console.log(response.data)
            setUser(response.data);
        })
    },[])

    let show = (obj)=>{
        navigate(`/user/info/${obj.id}`)
    }

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <h3>All User</h3>
                {
                    user ? <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>More</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            user.map((value, index)=>{
                                return(<tr key={value.id}>
                                    <td>{index+1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.address.city}</td>
                                    <td><button onClick={()=>show(value)} className='btn btn-info'>More</button></td>

                                </tr>)
                            })
                        }
                    </tbody>
                </table> : ''
                }

            </div>
        </div>
    </div>
  )
}

export default User