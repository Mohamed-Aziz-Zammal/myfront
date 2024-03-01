import React, { useState } from 'react';
import Axios from "axios";

function Question7() {
    const [numbers, setLettres] = useState([]);
    const [resltat, setResltat] = useState("");
  
    const options = ['3619', '2587', '9473', '28416','73594'];

    const myresltat = () => {
        var x = numbers.length;
        if (x === options.length) {
            setResltat("oui");
        } else {
            setResltat("non");
        }
    }

    const handleInputChange = (index,value) => {
        const updatedLettres = [...numbers];
        updatedLettres[index] ={ [options[index]]: value };
        setLettres(updatedLettres);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await myresltat(); 
        const response = await Axios.post("http://localhost:3001/Question7/CreateQuestion7", {
            numbers,
            resltat
        });
        console.log("response", response);
    }
  
    return (
        <>
            <div>Question7</div>
            <form onSubmit={onSubmit}>
                <br />
                {options.map((option, index) => (
                    <div key={index}>
                        <label htmlFor={option}> {option}</label>
                        <input
                            type="text"
                            id={option}
                            value={(numbers[index] && Object.values(numbers[index])[0]) || ''}
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

export default Question7;
