import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function EspaceUsers() {
  return (
    <>
    <div>EspaceUsers</div>
    <div className='container-fluid' >
    <div className='row' >
    <Link to={"test"} >test</Link>
    <Link  to={"portfolio"}>Portfolio</Link>
    <Link  to={"rendez-vous"}>Rendez-vous</Link>
    <Link  to={"logout"}>Logout</Link>
      
    </div>
    </div>
    <Outlet/>



    </>
  
  )
}

export default EspaceUsers