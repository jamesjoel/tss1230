import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const UserInfo = () => {
    let param = useParams();
    let [user, setUser] = useState({});

    useEffect(()=>{
        let id = param.id;
        axios.get("https://jsonplaceholder.typicode.com/users/"+id).then(response=>{
            // console.log(response.data);
            setUser(response.data);
        })

    },[])
  return (
   <div className='container my-4'>
    <div className='row'>
        <div className='col-md-6'>
            <h4>User Information</h4>
            <p>Name : {user.name}</p>
        </div>
    </div>
   </div>
  )
}

export default UserInfo