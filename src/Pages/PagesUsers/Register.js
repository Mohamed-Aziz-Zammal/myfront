
import React from 'react'
import Axios  from "axios"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
function Register() {

  const [name,setName]=useState("")
  const [date,setDate]=useState("")
  const [classe,setclasse]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
  

  const navigate = useNavigate();

 

  const onSubmit = async (e)=>{
      e.preventDefault();
     const response= await Axios.post("http://localhost:3001/users/register",{
          name,date,classe,email,password
      })
      console.log("response.message",response.data.message)
      console.log("response",response)
      navigate("login")
  }




  return (
    <>
        <nav>
    <Link to={"login"} >login</Link>
    <Link  to={"register"}>Register</Link>
    </nav>
    <h1>Register</h1>
    <form onSubmit={onSubmit}>
 
      <label>name ---- :</label>
      <input type='text'  value={name}
                  onChange={e => setName(e.target.value)} />
      
      <br></br>
      <label>date------ : </label>
      <input type='date'  value={date}
                  onChange={e => setDate(e.target.value)} />
      <br></br>
      <label>classe---- : </label>
      <input type='text'  value={classe}
                  onChange={e => setclasse(e.target.value)} />
      <br></br>
      <label>email----- : </label>
      <input type='text'  value={email}
                  onChange={e => setEmail(e.target.value)} />
                  <br></br>
      <label>password  : </label>
      <input type='text'  value={password}
                  onChange={e => setPassword(e.target.value)} />
      <br>
      </br>
    <button  type="submit">login</button>            

    </form>
   
   </>
  );
}

export default Register;