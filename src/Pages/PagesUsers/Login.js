  import React from 'react'
//import AuthForm from '../AuthForm'
import Axios  from "axios"
import{ useCookies} from 'react-cookie'
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { Link} from 'react-router-dom'
import './Login.css'


function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

   const navigate = useNavigate();

    const [,setCookies] = useCookies(["access_token"])

    const onSubmit = async (e)=>{
        e.preventDefault();
       const response= await Axios.post("http://localhost:3001/users/login",{
            email,password
        })
        console.log("response.message",response.data.message)
        console.log("response",response)
        if(response.data.message ==="email or password is not correct"){
          alert(response.data.message)
          console.log("error")
        }else{
          
          console.log("true")
          setCookies("access_token",response.data.token)
          window.localStorage.setItem("userID",response.data.userID)
         navigate("espace")

          
        }
       

      
       
    
    }
    
  return (
    <>
    <div className='containerLogin'>
    <nav>
    <Link to={"login"} >login</Link>
    <Link  to={"register"}>Register</Link>
    </nav>
    <h1>login</h1>
    <form onSubmit={onSubmit}>
      <label>Email address :</label>
      <input type='text'  value={email}
                  onChange={e => setEmail(e.target.value)}
              className='input'     />
      
      <br></br>
      <label>Password : </label>
      <input type='text'  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className='input'     />
      <br>
      </br>
    <button  type="submit">login</button>            

    </form>
    </div>
   </>
  )
}

export default Login