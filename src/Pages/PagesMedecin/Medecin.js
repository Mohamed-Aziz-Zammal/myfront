import React from 'react'
import AuthForm from '../AuthForm'
import Axios  from "axios"
import{ useCookies} from 'react-cookie'
import { useState } from "react";
import { useNavigate, Outlet } from 'react-router-dom';


function Medecin() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate()
    const [,setCookies] = useCookies(["access_token"])

    const onSubmit1 = async (e)=>{
        e.preventDefault();
       const response= await Axios.post("http://localhost:3001/medecin/login",{
            email,password
        })
        console.log("response.message",response.data.message)
        if(response.data.message ==="username or password is not correct"){
          console.log("error")
        }else{
          console.log("true")
          setCookies("access_token",response.data.token)
          window.localStorage.setItem("MedecinID",response.data.medecinID)
        
         navigate("/medecin/espaceMedecin")

         
        }
    }
    /*const onSubmit1 = async (e)=>{
      e.preventDefault();
     await Axios.post("http://localhost:3001/medecin/login",{
          email,password
      }).then(result=>{
        console.log("response.message",result.data.message)
        console.log("response.",result)
        setCookies("access_token",result.data.token)
        window.localStorage.setItem("MedecinID",result.data.medecinID)
        navigate("espaceMedecin")
      })
      .catch(error=>{
        console.log(error)
      })
      
        // window.location="Smedecin"
      }*/
  
    



  return (
   <>
   <AuthForm label="Login"
                 email={email}
                 setEmail={setEmail}
                 password={password}
                 setPassword={setPassword}
                 onSubmit={onSubmit1}
            
            />
            <Outlet />
   </>
  )
}

export default Medecin