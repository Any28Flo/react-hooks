import React from "react";

const MovieForm = () =>{
    return(

            <form data-testid="movie-form">
                <label>Movie name:</label>
                <input type="text"/>
                <button>Submit</button>
            </form>

    )
};

export default MovieForm;