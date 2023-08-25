import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API} from '../../util/API'



const Bloggers = () => {
  let [allBloggers, setAllBloggers] = useState([]);
  useEffect(()=>{
    axios.get(`${API}/user`).then(response=>{
      setAllBloggers(response.data);
    })
  }, [])

  return (
    <div className='container my-4'>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Contact</th>
              </tr>
              
            </thead>
            <tbody>
              {
                allBloggers.map((value, index)=>{
                  return(
                    <tr>
                      <td>{index+1}</td>
                      <td>{value.fullname}</td>
                      <td>{value.username}</td>
                      <td>{value.contact}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Bloggers