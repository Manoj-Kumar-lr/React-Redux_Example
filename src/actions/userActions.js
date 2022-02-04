import { SET_AGE, SET_NAME } from "./types";

export function setName(name) {
  // return {
  //   type: SET_NAME,
  //   payload: name
  // };
  // redux-thunk
  // return (dispatch) => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: SET_NAME,
  //       payload: name
  //     });
  //   }, 2000);
  // };
  //promise middleware
  return {
    type: SET_NAME,
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 2000);
    })
  };
}

export function setAge(age) {
  return {
    type: SET_AGE,
    payload: age
  };
}