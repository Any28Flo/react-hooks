import React from "react"
import {render,cleanup} from "@testing-library/react";
import MovieForm from "../components/MovieForm";

afterEach(cleanup);

test('<MovieForm/>', ()=>{
    const wrapper = render(<MovieForm/>);
});

