import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App3 = () => {
  return (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
        </Routes>
    </>
  )
}

export default App3