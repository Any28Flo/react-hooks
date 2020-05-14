import React from "react";
import {render, cleanup, fireEvent} from "@testing-library/react";
import NewMovie from "../components/NewMovie";

afterEach(cleanup);

test('<NewMovie/>' , () =>{
   const {getByTestId,container,getByText} = render(<NewMovie/>);

    expect(getByTestId('page-title').textContent).toBe('New Movie');
    expect(container.firstChild).toMatchSnapshot();

});
