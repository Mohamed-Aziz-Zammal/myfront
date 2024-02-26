import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function HomeUsers() {
  return (
    <>
    <div>HomeUsers</div>
    <nav>
    <Link to={"login"} >login</Link>
    <Link  to={"register"}>Register</Link>
    </nav>
    <Outlet />
    
    </>
    
  )
}

export default HomeUsers