import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    let a = useSelector(x => x);

  return (
    <>
    <div>Home</div>
    <h1>{a.name}</h1>
    </>
  )
}

export default Home