import React from "react"
import {render, cleanup, fireEvent} from "@testing-library/react";
import MovieForm from "../components/MovieForm";

afterEach(cleanup);


test('<MovieForm/>', ()=>{
    /* jest.fn() => mock function , runs fake functions */

    const onSubmit = jest.fn();

    const {getByTestId, queryByTestId , getByLabelText} = render(<MovieForm onSubmit={onSubmit} />);


    /* Should render movie-form*/
    expect(queryByTestId('movie-form')).toBeTruthy();


/*
    Might not work
    getByLabelText('Text').value="hello";
    fireEvent.change(getByLabelText("Text"))
*/
    fireEvent.change(getByLabelText("Text"), {
        target : {value : 'hi'}
    })

    fireEvent.submit(getByTestId('movie-form'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({text : 'hi'});


});

