import React from "react";
import {render, cleanup, fireEvent} from "@testing-library/react";
//Cleanups the DOM three after each test
import CounterComponent from "../components/CounterComponent";

afterEach(cleanup);


test('<CounterComponent/>' , () =>{
   const {debug , getByTestId } = render(<CounterComponent/>);
   /*debug method : Give up some some insights into what wrappet is looking at */
    /*fireEvent : It's a method who allows fire a specific event*/
  // debug();
   const countButton = getByTestId('counter-button');
   /*Asserts counter-button is a button*/
   expect(countButton.tagName).toBe('BUTTON');
   /*Asserts counter-button starts at 0*/
   expect(countButton.textContent).toBe('0');
   fireEvent.click(countButton);

   expect(countButton.textContent).toBe('1');
   fireEvent.click(countButton);
   expect(countButton.textContent).toBe('2');

});
