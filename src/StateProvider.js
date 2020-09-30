import React, { createContext, useContext, useReducer } from "react";

// This is the Data Layer
export const StateContext = createContext();

// CreateContext produces, a provider and a consumer:
// Props (reducer, initialState, children) are passed from the caller.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Specify the context created above.
export const useStateValue = () => useContext(StateContext);
