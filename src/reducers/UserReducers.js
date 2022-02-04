import { SET_AGE, SET_NAME } from "../actions/types";

const initialState_User = {
  name: "Virat",
  age: 32
};

const userReducer = (state = initialState_User, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_NAME:
    case "SET_NAME_FULFILLED":
      state = {
        ...state,
        name: payload
      };
      break;
    case SET_AGE:
      state = {
        ...state,
        age: payload
      };
      break;
    default:
      return state;
  }

  return state;
};

export default userReducer;
