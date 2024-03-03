import React, { useState } from 'react';
import Axios from "axios";

function Question2() {
    const [lettres, setLettres] = useState([]);
    const [resltat, setResltat] = useState("");
    
    const options = ['a', 'b', 'c','d','e', 'f', 'g','h','i', 'j', 'k','l','m', 'n', 'o','p','q', 'r', 's','t','u', 'v', 'w','x','y','z']; 
  
    
  
    const handleCheckboxChange = (value) => {
      if (lettres.includes(value)) {
        setLettres(lettres.filter(item => item !== value));
      } else {
        setLettres([...lettres, value]);
      }
    };
    
    const myresltat = () => {
      var x = lettres.length;
      
      
      if (x === 26) {
        setResltat("oui");
      } else {
        setResltat("non");
      }
    }
   
    const onSubmit = async (e) => {
      e.preventDefault();
       await myresltat(); 
      const response = await Axios.post("http://localhost:3001/Question2/CreateQuestion2", {
        lettres,
        resltat
      });
      console.log("response", response);
      
    }
    
    return (
      <>
        <form onSubmit={onSubmit}>
          <br />
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={option}
                checked={lettres.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <label htmlFor={option}> {option}</label>
              <br />
            </div>
          ))}
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
}

export default Question2