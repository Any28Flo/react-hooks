import React from "react"
import {render} from "@testing-library/react";
import Button from "../components/Button";

test( '<Button />' , () =>{
    //Renders component
    const wrapper = render(<Button/>);

    //Outputs dom as string
    wrapper.debug();
    //Asserts text value Hola is found within a button
    expect(wrapper.getByText('Hola').tagName).toBe('BUTTON');




});