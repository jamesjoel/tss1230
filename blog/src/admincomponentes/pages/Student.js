import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Student = () => {

    let allStu = useSelector(state=>state.StudentSlice);

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
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
                        allStu.map(value=><tr><td>{value.name}</td><td>{value.age}</td></tr>)
                      }
                    </tbody>
                </table>


            </div>
        </div>
    </div>
  )
}

export default Student