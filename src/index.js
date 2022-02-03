import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";

import App from "./App";

const initialState = 10;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUB":
      state = state - action.payload;
      break;
    default:
      return state;
  }

  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "ADD",
  payload: 20
});

store.dispatch({
  type: "SUB",
  payload: 10
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
