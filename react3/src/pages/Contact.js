import React, {useState} from 'react'

const Contact = () => {

  let [user, setUser] = useState({ name : "", age : "" })
  let [data, setData] = useState([]);
  let add = ()=>{
    setData([...data, user]);
    // console.log(data);
    // setData(user);
    setUser({
      name : "",
      age : ""
    })
  }

  let remove = (obj)=>{ // {name : "C", age : 21}
    let newarr = data.filter(value => value != obj);
    setData(newarr);
    
  }

  return (
    <>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-1'>Name</div>
          <div className='col-md-4'>
            <input type='text' value={user.name} onChange={(e)=>setUser({...user, name : e.target.value})} className='form-control' />
          </div>
          <div className='col-md-1'>Age</div>
          <div className='col-md-4'>

            <input type='text' value={user.age} onChange={(e)=>setUser({...user, age : e.target.value})} className='form-control' />
          </div>
          <div className='col-md-2'>
            <button className='btn btn-primary' onClick={add}>Add</button>
          </div>
        </div>
      </div>
      <div className='container my-3'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            {
              data.length > 0 ? (<table className='table table-dark'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {
                  data.map((value, index)=>{
                    return(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                        
                        <td><button onClick={()=>remove(value)} className='btn btn-sm btn-danger'>Del</button></td>
                        <td><button className='btn btn-sm btn-info'>Edit</button></td>
                      </tr>
                    )
                  })
                }
                </tbody>
            </table>) : (<div className='alert alert-danger'>No Data Found</div>)
            }
            
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact