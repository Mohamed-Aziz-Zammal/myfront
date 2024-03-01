import React, { useState } from 'react';
import Axios from "axios";

function Question6() {
    const [lettres, setLettres] = useState([]);
    const [resltat, setResltat] = useState("");
  
    const options = ['couverture', 'violon', 'arbre', 'triangle'];

    const myresltat = () => {
        var x = lettres.length;
        if (x === options.length) {
            setResltat("oui");
        } else {
            setResltat("non");
        }
    }

    const handleInputChange = (index,value) => {
        const updatedLettres = [...lettres];
        updatedLettres[index] ={ [options[index]]: value };
        setLettres(updatedLettres);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await myresltat(); 
        const response = await Axios.post("http://localhost:3001/Question6/CreateQuestion6", {
            lettres,
            resltat
        });
        console.log("response", response);
    }
  
    return (
        <>
            <div>Question6</div>
            <form onSubmit={onSubmit}>
                <br />
                {options.map((option, index) => (
                    <div key={index}>
                        <label htmlFor={option}> {option}</label>
                        <input
                            type="text"
                            id={option}
                            value={(lettres[index] && Object.values(lettres[index])[0]) || ''}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                        <br />
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Question6;
