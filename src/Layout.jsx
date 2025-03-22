import React from 'react'
import { Outlet } from 'react-router-dom'
import MainBar from './components/MainBar'

const Layout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Layout
