import { useState } from 'react'
let Contact = ()=>{
    
    let [arr, setArr] = useState(["red", "green", "blue", "yellow", "pink"]);
    let change = ()=>{
        setArr(()=>{
            return [...arr, "White"];
        })
        
    }
    return(
        <>
            <div className="container" style={{minHeight : "650px"}}>
                <br />
                <button onClick={change} className='btn btn-primary'>Add</button>
                <br />
                <table className='table table-dark my-4'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Color Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((x, n)=>{
                                return(
                                    <>
                                        <tr>
                                            <td>{n+1}</td>
                                            <td>{x}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )


}

export default Contact;
/*
    let x = useState("riya")
    let a = x[0];
    let b = x[1];

    let [a, b] = useState(100);
    b(200)

*/