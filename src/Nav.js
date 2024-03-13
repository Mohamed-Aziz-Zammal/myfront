import React from 'react'
import './Nav.css'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="topnav">
    <Link to="/">home</Link>
    <Link to="/medecin">medecin</Link>
    
    <Link to="/users" style={{ float: 'right' }}>Passer un test</Link>
    
  </div>
  )
}

export default Nav