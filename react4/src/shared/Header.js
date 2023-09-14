import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  let color = useSelector(state=>state);
  return (
    <>
        <NavLink to="/" >Home Page</NavLink>
        <NavLink to="/about" >About Page</NavLink>
        <b>Total : {color.length}</b>
    </>
  )
}

export default Header