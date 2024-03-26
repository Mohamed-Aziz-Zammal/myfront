import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './EspaceAdmin.css'

function EspaceAdmin() {
  return (
    <>
    
    <div className='body' >
      <div className='sidebar' >
        <Link to={"patients"} >Mes patients</Link>
        <Link  to={"profile"}>Mon profile</Link>
        <Link  to={"rendez-vous"}>Mes rendez-vous</Link>
        <Link  to={"logout"}>Logout</Link>
      </div>
      <div className='content'>
        <Outlet/>
      </div>
    </div>

    



    </>
  )
}

export default EspaceAdmin