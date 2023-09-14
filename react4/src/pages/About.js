import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/DemoSlice'

const About = () => {

  let disp = useDispatch();


  let demo = ()=>{
    disp(add("yellow"));
  }

  return (
    <>
    <h1>About</h1>
    <button onClick={demo}>Add</button>
    </>
  )
}

export default About