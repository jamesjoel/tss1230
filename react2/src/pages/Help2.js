import React, { useState } from 'react'

const Help2 = () => {
  let [count, setCount] = useState(10);
  let demo = (a)=>{
    a.preventDefault();
  }
  let demo1 = (e)=>{
    if(10-e.target.value.length >= 0){
      
    //   e.preventDefault();
    setCount(10-e.target.value.length);
    }
    
  }
  return (
    <>
        <div className='container' style={{minHeight : "650px"}}>
            <button onClick={(event)=>demo(event)} className='btn btn-info'>OK</button>
            <br />
            <h1>{count}</h1>
            <br />
            <input type='text' maxLength="10" onKeyUp={(event)=>demo1(event)}/>
            <br />
            <br />
            <input maxLength="5" type='text' />
        </div>
    </>
  )
}

export default Help2