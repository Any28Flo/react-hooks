import React from "react"
import {render, cleanup, fireEvent} from "@testing-library/react";
import MovieForm from "../components/MovieForm";

afterEach(cleanup);


test('<MovieForm/>', ()=>{
    /* jest.fn() => mock function , runs fake functions */

    const onSubmit = jest.fn();

    const {getByTestId, queryByTestId } = render(<MovieForm onSubmit={onSubmit} />);


    /* Should render movie-form*/
    expect(queryByTestId('movie-form')).toBeTruthy();



    fireEvent.submit(getByTestId('movie-form'));

    expect(onSubmit).toHaveBeenCalledTimes(1);



});

