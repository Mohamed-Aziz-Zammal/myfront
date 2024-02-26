import React from 'react'
import Form from 'react-bootstrap/Form';
function Test() {
  return (
    <>
    <h1>Mecanismes Elementaires</h1>
<p>Graphemes</p>
<p>Consigne :"Je vais te montrer des lettes . Tu vas les lire a haute voix </p>
    <Form>
    <Form.Label>e</Form.Label>
    <Form.Check inline label="0" name="group1" type="radio"/>
    <Form.Check inline label="1" name="group1" type="radio" />
   
    <Form.Label>o</Form.Label>
    <Form.Check inline label="0" name="group1" type="radio"/>
    <Form.Check inline label="1" name="group1" type="radio" />
       
         
       
     
    </Form>
    </>
  );
}

export default Test