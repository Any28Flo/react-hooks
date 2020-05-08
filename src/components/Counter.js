import React, {useEffect, useState} from "react";

const Counter = () =>{
    const [counter, setCounter] = useState(new Date);

    useEffect( () =>{
        const newTime = setTimeout( setCounter(new Date()) , 1000);
        return ()=> clearTimeout(newTime);
    }, [counter]);
    return(
        <div>
            <p>Counter {counter.toLocaleTimeString()}</p>
        </div>

    )
};

export default Counter;