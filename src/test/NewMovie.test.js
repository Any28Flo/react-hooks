import React from "react";
import {render, cleanup} from "@testing-library/react";
import NewMovie from "../components/NewMovie";

afterEach(cleanup);

test('<NewMovie/>' , () =>{
   const {debug, getByTestId, queryByTestId, container} = render(<NewMovie/>);

    expect(getByTestId('page-title').textContent).toBe('New Movie');
    /*Integration test*/
    expect(queryByTestId('movie-form')).toBeTruthy();

    /* toMatchSnapshot method creates a new folder __snapshots__
    * Inside you could find json object DOM data of your component
    * This method we could use it to check if something is correcltyl rendered
    * */
    /* We could change the DOM element and to rebuild de json map of our component
    We press u inside our terminal
    * */


    expect(container.firstChild).toMatchSnapshot();

});
