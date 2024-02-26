import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  return (
    <>
    <h1>home</h1>
    <button onClick={()=>navigate("users")}>test</button>
    </>
  )
}

export default Home