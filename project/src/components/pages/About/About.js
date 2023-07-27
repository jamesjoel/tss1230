import React from 'react'
import Hotels from '../../shared/Hotels/Hotels'
import { useState, useEffect } from 'react'
import axios from 'axios';

const About = () => {
  let [student, setStudent] = useState([]);

  // useEffect(()=>{
  //   axios.get("http://localhost:8080/student").then((response)=>{
  //     // console.log(response.data);
  //     setStudent(response.data);
  //   })
  // }, [])
  
  let demo = ()=>{
    axios.get("http://localhost:8080/student").then((response)=>{
          setStudent(response.data);
    });
  }
  return (
    <>
    <div className='our_room'>
        <div className="container" style={{minHeight : "750px"}}>
            <h1>About Page</h1>
            <button onClick={demo} className='btn btn-info'>OK</button>
            <div className="row">
                <div className='col-md-8 offset-md-2'>
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        student.map((s, n)=>{
                          return(
                            <tr>
                              <td>{n+1}</td>
                              <td>{s.name}</td>
                              <td>{s.age}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About