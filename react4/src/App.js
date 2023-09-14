import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './shared/Header'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
    </Routes>
    </>
  )
}

export default App