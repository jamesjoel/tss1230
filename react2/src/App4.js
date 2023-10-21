import React from 'react'
import HOC from './HOC'
import Hello from './Hello'


const App4 = () => {
  return (
    <>
        <h1 style={{textAlign : "center"}}>HOC</h1>
        <HOC color="red" cmp={Hello}/>         
        <HOC color="green" cmp={Hello}/>         
        <HOC color="blue" cmp={Hello}/>         
    </>
  )
}




export default App4