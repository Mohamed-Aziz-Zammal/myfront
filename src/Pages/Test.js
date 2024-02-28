import React, { useState } from 'react';
import Axios from "axios";

function Test() {
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
    const response = await Axios.post("http://localhost:3001/test/CreatePrononciation", {
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

export default Test;



/*
import React, { useState } from 'react';
import Axios from "axios";

function Test() {
  const [lettres, setLettres] = useState([]);
  const [resltat, setResltat] = useState("");

  const handleCheckboxChange = (value) => {
    if (lettres.includes(value)) {
      setLettres(lettres.filter(item => item !== value));
    } else {
      setLettres([...lettres, value]);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await Axios.post("http://localhost:3001/test/CreatePrononciation", {
      lettres,
      resltat
    });
    console.log("response", response);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <br />
        <input type="checkbox" value="a" checked={lettres.includes("a")} onChange={() => handleCheckboxChange("a")} />
        <label htmlFor="vehicle1"> a</label>
        <br />
        <input type="checkbox" value="b" checked={lettres.includes("b")} onChange={() => handleCheckboxChange("b")} />
        <label htmlFor="vehicle2"> b</label>
        <br />
        <input type="checkbox" value="c" checked={lettres.includes("c")} onChange={() => handleCheckboxChange("c")} />
        <label htmlFor="vehicle3"> c</label>
        <br />
        <input type="text" value={resltat} onChange={(e) => setResltat(e.target.value)} />
        <label htmlFor="result"> Result</label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Test;


//////

import React, { useState } from 'react';
import Axios from "axios";

function Test() {
  const [lettres, setLettres] = useState([]);
  const [resltat, setResltat] = useState("");
  
  const options = ['a', 'b', 'c']; // قيم الخيارات

  const handleCheckboxChange = (value) => {
    if (lettres.includes(value)) {
      setLettres(lettres.filter(item => item !== value));
    } else {
      setLettres([...lettres, value]);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await Axios.post("http://localhost:3001/test/CreatePrononciation", {
      lettres,
      resltat
    });
    console.log("response", response);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <table>
          <thead>
            <tr>
              <th>Letter</th>
              <th>Checkbox</th>
            </tr>
          </thead>
          <tbody>
            {options.map((option, index) => (
              <tr key={index}>
                <td>{option}</td>
                <td>
                  <input
                    type="checkbox"
                    value={option}
                    checked={lettres.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <input type="text" value={resltat} onChange={(e) => setResltat(e.target.value)} />
        <label htmlFor="result"> Result</label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Test;

*/ 