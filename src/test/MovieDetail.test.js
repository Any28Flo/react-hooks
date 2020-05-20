import React from "react"
import {render, waitForElement} from "@testing-library/react";
import MovieDetail from "../components/MovieDetail";

global.fetch = require('jest-fetch-mock');

const match = {
    params:{
        id: '001'
    }
};
const movie = {
    id: "1",
    title : "The waves",
    release_date : "12/07/2020",
    overview:"lorem indsfasd"
}
test('<MovieDetail/>' , async () =>{
    fetch.mockResponseOnce(JSON.stringify(movie))
    const {debug , getByText , getByTestId} = render(<MovieDetail match={match}/>);
    await waitForElement(() => getByText('The waves'))
    expect(getByTestId('movie-title').textContent).toBe(movie.title);
    expect(getByTestId('movie-release_date').textContent).toBe(movie.release_date);
    expect(getByTestId('movie-detail').textContent).toBe(movie.overview)
})
