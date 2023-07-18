import React, {useState} from 'react'

const Help = () => {

    let [name, setName] = useState("Rohit");
    let student = [
        {
            id : 1,
            name : "gaurav",
            age : 25,
            city : "indore"
        },
        {
            id : 2,
            name : "amit",
            age : 21,
            city : "mumbai"
        },
        {
            id : 3,
            name : "rohit",
            age : 23,
            city : "pune"
        },
        {
            id : 4,
            name : "jaya",
            age : 26,
            city : "indore"
        },
        {
            id : 5,
            name : "nidhi",
            age : 25,
            city : "mumbai"
        }
    ]


    let demo1 = ()=>{
        console.log("****************");
    }
    let demo2 = ()=>{
        console.log("###############");
    }


  return (
    <div  className="container my-4" style={{minHeight : "600px"}}>

        <button onClick={demo1} onDoubleClick={demo2} className='btn btn-info'>Click Me</button>
        <div className="row">
            <div className="col-md-12">
                <table onContextMenu={demo1} className="table table-dark">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // listing in react jsx
                            student.map((stu, index)=>{
                                return(
                                    
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{stu.name}</td>
                                        <td>{stu.age}</td>
                                        <td>{stu.city}</td>
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

export default Help

/*

return(
    <>
        <h1>hello</h1>
        <h3>sdfgsdfg</h3>
    </>
);



*/