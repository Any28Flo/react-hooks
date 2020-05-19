import React from "react"
import {render, cleanup} from "@testing-library/react";
import MovieFunct from "../components/MovieFunct";

afterEach(cleanup);

console.error = jest.fn();

test('<MovieFunct/>' , () =>{
    /*Trying to test if a MovieFunct component is rendered whitout props throw an error*/
    render( <MovieFunct />);
    expect(console.error).toBeCalled();

})