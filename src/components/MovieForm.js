import React , {useState} from "react";

const MovieForm = ({onSubmit}) =>{
    const [text, setText]  = useState('');

    return(
            <form data-testid="movie-form" onSubmit={ () =>onSubmit({text}) }>
                <label htmlFor="">
                    Text
                    <input type="text" onChange = {e  => setText( e.target.value)}/>
                </label>
                <button>Submit</button>
            </form>

    )
};

export default MovieForm;