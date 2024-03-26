import React, { useState } from 'react';
import Axios from "axios";

function Question8() {
    const [numbers, setLettres] = useState([]);
    const [resltat, setResltat] = useState("");
  
    const options = ['58', '27', '971', '364'];
    const options1 = ['85', '72', '179', '463'];

    const myresltat = () => {
        var x=0
        for (let i = 0; i < options1.length; i++){
            if(options1[i]===numbers[i]){
                x=x+1

            }
        }   
        if (x === numbers.length) {
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
        const response = await Axios.post("http://localhost:3001/Question8/CreateQuestion8", {
            numbers,
            resltat
        });
        console.log("response", response);
        
    }
  
    return(
        <>
            <div>Question8</div>
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

export default Question8;
