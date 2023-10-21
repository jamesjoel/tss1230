import React, { useState, useCallback } from 'react'
import Box from './Box'

const App5 = () => {
    let [a, setA] = useState(0);
    let [b, setB] = useState(0)

    let demo = useCallback(()=>{
        console.log("********************");
    }, [b]);

  return (
    <>
        <h1>Home Page</h1>
        <button onClick={()=>setA(a+1)}>OK</button>
        <button onClick={()=>setB(b+1)}>Hello</button>
        <h2>{a}</h2>
        <h2>{b}</h2>
        
        
        <Box x={demo}/>
    </>
  )
}

export default App5