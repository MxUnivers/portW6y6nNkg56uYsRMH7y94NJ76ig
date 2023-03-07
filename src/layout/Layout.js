import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div class="container-xxl bg-white p-0">
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout
