import { createReducer } from "@reduxjs/toolkit";

// intial state pass in crateReducer parameter
const initialState = {
  counterValue: 0,
};

// createReceducer take two parameters 1st is intialstate object and 2nd actions
export const customReducer = createReducer(initialState, {
  //  there write actions

  // increment and decrement are actions
  increment: (state) => {
    state.counterValue += 1;
  },
  decrement: (state) => {
    state.counterValue -= 1;
  },
  //   we can get value from user using action ,
  // action have a method which is call payload method
  incrementByFive: (state, action) => {
    state.counterValue += action.payload;
  },
});
