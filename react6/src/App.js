import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './component/shared/Header'
import Home from './component/feature/Home'
import Student from './component/feature/Student'
import AddStudent from './component/feature/AddStudent'
const App = () => {
  return (

    <>
        <Header />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='student' element={<Student />} />
            <Route path='student/add' element={<AddStudent />} />
        </Routes>
    </>
  )
}

export default App