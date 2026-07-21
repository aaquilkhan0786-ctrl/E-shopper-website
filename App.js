import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import AdminHome from './Components/admin/AdminHome'
import NavLeft from './Components/admin/NavLeft'
import AdminUsers from './Components/admin/AdminUsers'
import AdminAddMaincategory from './Components/admin/AdminAddMaincategory'
import Cart from './Components/Cart'
import AdminMaincategory from './Components/admin/AdminMaincategory'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/adminhome' element={<AdminHome/>}/>
          <Route path='/NavLeft' element={<NavLeft/>}/>
          <Route path='/admin-user' element={<AdminUsers/>}/>
          <Route path='/admin-maincategory' element={<AdminAddMaincategory/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Admin-add-Maincategory' element={<AdminMaincategory/>}/>

          </Routes>    
    </BrowserRouter>
      <Footer/>
    </>
  )
}
