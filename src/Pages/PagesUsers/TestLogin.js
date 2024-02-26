import React from 'react'
import { Button,  Form, Input } from 'antd';
import Axios  from "axios"
import{ useCookies} from 'react-cookie'
import { useState } from "react";






const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function TestLogin() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

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
         window.location="/Smedecin"

         
        }
       

      
       
    
    }
  return (
    <>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    onSubmit={onSubmit}
  >
    <Form.Item
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input  value={email}
                  onChange={e => setEmail(e.target.value)} />
    </Form.Item>

    <Form.Item
      label="password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password  value={password}
                  onChange={e => setPassword(e.target.value)} />
    </Form.Item>

    

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

    </>
  )
}

export default TestLogin