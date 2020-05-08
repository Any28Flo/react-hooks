import React, {useState} from "react";

const Button = () =>{
    const [isGreen, setIsGreen] = useState(true);
    return(
        <div>
            <button style={{backgroundColor: isGreen ? 'green' : 'blue'}}>Hola</button>
        </div>
    )
};
export default  Button