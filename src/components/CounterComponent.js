import React, {useState} from 'react';

const CounterComponent = () =>{
    const [counter, setCounter] = useState(0);

    return(
        <div>
            <button data-testid="counter-button" onClick={ () => setCounter(counter+1)}>{counter}</button>
        </div>
    );
};
export default CounterComponent;