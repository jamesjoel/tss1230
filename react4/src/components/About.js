import React from 'react'
import Box from './Box'
import { useSelector } from 'react-redux'

const About = () => {

  let info = useSelector(x=>  x )

  return (
    <>
    <div>About</div>
    <h2>{info.name}</h2>
    <h2>{info.age}</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto debitis dolores in eligendi, praesentium quisquam blanditiis facere nulla hic labore numquam modi odit asperiores! Culpa minima temporibus suscipit. Unde, ipsa?</p>

    <br />
    <br />
    <Box />
    </>
  )
}

export default About