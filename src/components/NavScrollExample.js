import React from "react";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <>
    <nav>
      <Link to="/home">home</Link>
      <Link to="/medecin">medecin</Link>
      <Link to="/smedecin">smedecin</Link>
    </nav>
    </>
  );
}

export default NavScrollExample;