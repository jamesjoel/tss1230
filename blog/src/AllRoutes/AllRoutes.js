import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Login from '../components/pages/Login/Login'
import Signup from '../components/pages/Signup/Signup'
import Logout from '../components/pages/Logout/Logout'
import MyAccount from '../components/pages/MyAccount/MyAccount'
import Container from '../modules/Container'
import Teacher from '../components/pages/Teacher/Teacher'
import List from '../components/pages/Teacher/List'
import Demo from '../components/pages/Teacher/Demo'
import TeacherContainer from '../components/pages/Teacher/TeacherContainer'
import MyBlogs from '../components/pages/MyBlogs/MyBlogs'
import AddBlog from '../components/pages/AddBlog/AddBlog'
import MainContainer from '../modules/MainContainer'
import AdminContainer from '../modules/AdminContainer'
import AdminLogin from '../admincomponentes/pages/Login'
import Dashboard from '../admincomponentes/pages/Dashboard'
import AdminLogout from '../admincomponentes/pages/Logout'
import Bloggers from '../admincomponentes/pages/Bloggers'
import Categories from '../admincomponentes/pages/Categories'
import AddCategory from '../admincomponentes/pages/AddCategory'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<MainContainer />}>
          <Route path='' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='logout' element={<Logout />} />
          
          <Route path='' element={<TeacherContainer />}>
              <Route path="teacher" element={<Teacher />} />
              <Route path="teacher/list" element={<List />} />
              <Route path="teacher/demo" element={<Demo />} />
          </Route>
          
          <Route path='blogger' element={<Container />} >
              <Route path='my-account' element={<MyAccount />} />
              <Route path='my-blogs' element={<MyBlogs />} />
              <Route path='addblog' element={<AddBlog />} />
          </Route>
        </Route>

        <Route path='admin' element={<AdminContainer />}>
          <Route path='' element={<AdminLogin />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='bloggers' element={<Bloggers />} />
          <Route path='categories' element={<Categories />} />
          <Route path='categories/add' element={<AddCategory />} />
          <Route path='categories/update/:a' element={<AddCategory />} />
          <Route path='logout' element={<AdminLogout />} />
        </Route>

    </Routes>
  )
}

export default AllRoutes