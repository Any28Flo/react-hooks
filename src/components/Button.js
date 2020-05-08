import React, {useState} from "react";

const Button = () =>{
    const [isGreen, setIsGreen] = useState(true);
    const changeColor = () =>{
        setIsGreen(!isGreen);
    };
    return(
        <div>
            <button onClick={changeColor} style={{backgroundColor: isGreen ? 'green' : 'blue'}}>Hola</button>
        </div>
    )
};
export default  Button