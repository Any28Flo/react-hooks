import React from "react"
import {render, cleanup} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom"
import MovieFunct , {POSTER_PATH} from "../components/MovieFunct";

afterEach( () =>{
    cleanup();
    console.error.mockClear();
});

console.error = jest.fn();

test('<MovieFunct/>' , () =>{
    /*Trying to test if a MovieFunct component is rendered whitout props throw an error*/
    render( <MovieFunct />);
    expect(console.error).toBeCalled();

})

const movie = {
    id : "1",
    poster_path : "poster.png",
    title : "The wive"
}
test(' <MovieFunct/> with params', () =>{
    const {getByTestId} = render(
        <MemoryRouter>
            <MovieFunct movie={movie}/>
        </MemoryRouter>)
    expect(console.error).not.toHaveBeenCalled();
    expect(getByTestId("movie-link").getAttribute('href')).toBe(`/${movie.id}`)
    expect(getByTestId('movie-img').src).toBe(`${POSTER_PATH}${movie.poster_path}`);
})