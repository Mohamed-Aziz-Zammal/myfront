import React from 'react'
//import AuthForm from '../AuthForm'
import Axios  from "axios"
import{ useCookies} from 'react-cookie'
import { useState } from "react";
//import { useNavigation } from 'react-router-dom';
function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

   // const navigate = useNavigation();

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
          //navigate("test")

          
        }
       

      
       
    
    }
    
  return (
    <>
    <h1>login</h1>
    <form onSubmit={onSubmit}>
      <label>Email address :</label>
      <input type='text'  value={email}
                  onChange={e => setEmail(e.target.value)} />
      
      <br></br>
      <label>Password : </label>
      <input type='text'  value={password}
                  onChange={e => setPassword(e.target.value)} />
      <br>
      </br>
    <button  type="submit">login</button>            

    </form>
   
   </>
  )
}

export default Login