import { useState } from 'react'


const Home = () => {

    let [name, setName] = useState("rohit");
    let [city, setCity] = useState("Indore");

    let [bg, setBg] = useState("red");


    let style = {
        minHeight : "700px"
    }
    let txt = {
        backgroundColor : bg
    }

    let demo = ()=>{
        setName("amar");
    }

    let changeCity = ()=>{
        setCity("mumbai");
    }

    let changeColor = ()=>{
        setBg("green");
    }
  return (
    <>
        <div className='container my-4' style={style}>
            <h2 onClick={changeColor} style={txt}>Home Page</h2>
            <h1>{city}</h1>
            <button onClick={demo} className="btn btn-primary">OK</button>
            
            
            <p onClick={changeCity}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat facere, cum alias, sed adipisci eum, ab debitis modi architecto iste velit hic et! Eveniet vitae odit delectus obcaecati aliquam?</p>
            
            
            
            <h2>{name}</h2>
            
        </div>
    </>
  )
}

export default Home