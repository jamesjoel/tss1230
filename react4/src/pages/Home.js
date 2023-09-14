import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    let data = useSelector(state => state);
    

  return (
    <>
        <h2>Home Page</h2>
        {
            data.map(value=><h3>{value}</h3>)
        }
    </>
  )
}

export default Home