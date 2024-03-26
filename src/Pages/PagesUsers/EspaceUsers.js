import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './EspaceUser.css'


function EspaceUsers() {
  return (
    <>
    
    <div className='body' >
      <div className='sidebar' >
        <Link to={"test"} >test</Link>
        <Link  to={"portfolio"}>Profile</Link>
        <Link  to={"rendez-vous"}>Rendez-vous</Link>
        <Link  to={"logout"}>Logout</Link>
      </div>
      <div className='content'>
        <Outlet/>
      </div>
    </div>

    



    </>
  
  )
}

export default EspaceUsers