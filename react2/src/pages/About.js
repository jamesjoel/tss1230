import { useState } from 'react'
let About = ()=>{
    
    // let studentName = "Riya";
    let [studentName, setStudentName] = useState("Riya");
    let change = ()=>{
        setStudentName("Jaya");
    }
    let change2 = ()=>{
        setStudentName("Amar");
    }

    return(
        <>
            <div className="container" style={{minHeight : "650px"}}>
            <h1>About Page</h1>
            <button onClick={change} className='btn btn-dark'>Click Me</button>
            <br />
            <br />
            <button onClick={change2} className='btn btn-info'>Click Me</button>
            <h2>{studentName}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi temporibus asperiores rem, culpa exercitationem voluptate obcaecati enim amet minus quas quis cum magnam placeat ipsam. Architecto ab tenetur impedit saepe!</p>
            </div>
        </>
    )


}

export default About;
/*
    let x = useState("riya")
    let a = x[0];
    let b = x[1];

    let [a, b] = useState(100);
    b(200)

*/