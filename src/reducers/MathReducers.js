import { ADD, SUB } from "../actions/types";

const initialState_Math = {
  result: 50,
  lastValues: []
};

const mathReducer = (state = initialState_Math, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD:
      state = {
        ...state,
        result: state.result + payload,
        lastValues: [...state.lastValues, payload]
      };
      break;
    case SUB:
      state = {
        ...state,
        result: state.result - payload,
        lastValues: [...state.lastValues, payload]
      };
      break;
    default:
      return state;
  }

  return state;
};

export default mathReducer;
