import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Container,Form,Button} from 'react-bootstrap'
function AuthForm({label,email,setEmail,password,setPassword,onSubmit}) {
  return (
    <>
    
<Container>
      <Form className='form' onSubmit={onSubmit}>
      <h2 className="">{label}</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address : </Form.Label>
        <Form.Control type="text"
                  is="username"
                  value={email}
                  onChange={e => setEmail(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password :</Form.Label>
        <Form.Control  type="text"
                  is="username"
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
      {label}
      </Button>
    </Form>
    </Container>
  </>
  )
}

export default AuthForm