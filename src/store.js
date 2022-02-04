import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import { rootReducer } from "./reducers";

const logger = createLogger({
  // ...options
});

const myLogger = (state) => (next) => (action) => {
  console.log("Logger", action);
  next(action);
};

export const store = createStore(
  rootReducer,
  applyMiddleware(myLogger, logger, thunk, promise)
);

// store.subscribe(() => {
//   // console.log(store.getState());
// });

// store.dispatch({
//   type: "ADD",
//   payload: 10
// });

// store.dispatch({
//   type: "ADD",
//   payload: 20
// });

// store.dispatch({
//   type: "SUB",
//   payload: 10
// });

// store.dispatch({
//   type: "SET_NAME",
//   payload: "Kohli"
// });
