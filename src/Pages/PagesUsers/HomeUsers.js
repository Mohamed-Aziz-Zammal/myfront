import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './HomeUsers.css'

function HomeUsers() {
  return (
    <>
    <div className="home-users-container"> 
    <div>HomeUsers</div>
    <nav>
    <Link to={"login"} >login</Link>
    <Link  to={"register"}>Register</Link>
    </nav>
    <Outlet />
    </div>
   
    
    </>
    
  )
}

export default HomeUsers