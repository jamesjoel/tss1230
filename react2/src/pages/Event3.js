import React, { useState } from 'react'

const Event3 = () => {


    let [boxStyle, setBoxStyle] = useState({
        backgroundColor : "red",
        width : "100px",
        height : "100px"
    })

    let [h, setH] = useState(100);
    
    let demo = ()=>{
        setBoxStyle({
            backgroundColor : "blue",
            width : "250px",
            height : "250px"
        })
    }
    let demo2 = ()=>{
        setBoxStyle({
            backgroundColor : "green",
            width : "150px",
            height : "150px"
        })
    }

    let demo3 = ()=>{
        setH(()=>{
            h = h+1;
            return h;
        })
        
        
        setBoxStyle({...boxStyle, height : h+"px", width : h+"px"});
    }

  return (
    <div className='container' style={{minHeight : "650px"}}>
        <div onMouseMove={demo3} style={boxStyle}></div>
    </div>
  )
}

export default Event3