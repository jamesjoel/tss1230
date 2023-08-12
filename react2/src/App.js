import React from 'react'
import axios from 'axios'
let token = "abcxyzjames";

const App = () => {

  
  let hello = ()=>{
    axios.get("http://localhost:8080/api/auth", { headers : { "Authorization" : `Bearar ${token}`}}).then(response=>{
      console.log(response)
    })
  }
  return (
    <>
      <button onClick={hello}>Click</button>
    </>
  )
}

export default App