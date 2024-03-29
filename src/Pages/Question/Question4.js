import React, { useState } from 'react';
import Axios from "axios";

function Question4() {
  const [lettres, setLettres] = useState([]);
  const [resltat, setResltat] = useState("");
  
  const options = ['et','ch','ia','de','ou','no','ail','ein','ph','euil','au','on','eu','oin','eil','an','ill','un','ei','ain','ien','io','eau','ion','ian','gn','oeu','in','ai','na','ze','oi','ouil']; 

  

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
    const response = await Axios.post("http://localhost:3001/Question4/CreateQuestion4", {
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

export default Question4