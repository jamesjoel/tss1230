import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './component/shared/Header'
import Home from './component/feature/Home'
import Student from './component/feature/Student'
import AddStudent from './component/feature/AddStudent'
import Comments from './component/feature/Comments'
import User from './component/feature/User'
import UserInfo from './component/feature/UserInfo'
const App = () => {
  return (

    <>
        <Header />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='student' element={<Student />} />
            <Route path='user' element={<User />} />
            <Route path='user/info/:id' element={<UserInfo />} />
            <Route path='comment' element={<Comments />} />
            <Route path='comment/:pageno' element={<Comments />} />
            <Route path='student/add' element={<AddStudent />} />
            <Route path='student/edit/:id' element={<AddStudent />} />
        </Routes>
    </>
  )
}

export default App