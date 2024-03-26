import React, { useState } from 'react';
import Axios from "axios";

function Question6() {
    const [mots, setmots] = useState([]);
    const [resltat, setResltat] = useState("");
  
    const options = ['couverture', 'violon', 'arbre', 'triangle','temoignage','klaxon','sachet','cultivateur'];

    const myresltat = () => {
        var x = mots.length;
        if (x === options.length) {
            setResltat("oui");
        } else {
            setResltat("non");
        }
    }

    const handleInputChange = (index,value) => {
        const updatedmots = [...mots];
        updatedmots[index] ={ [options[index]]: value };
        setmots(updatedmots);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await myresltat(); 
        const response = await Axios.post("http://localhost:3001/Question6/CreateQuestion6", {
            mots,
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
                            value={(mots[index] && Object.values(mots[index])[0]) || ''}
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
