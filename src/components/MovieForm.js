import React , {useState} from "react";

const MovieForm = ({onSubmit}) =>{
    const [text, setText]  = useState('');

    return(

            <form data-testid="movie-form" onSubmit={ onSubmit}>

                <input type="text"/>
                <button>Submit</button>
            </form>

    )
};

export default MovieForm;