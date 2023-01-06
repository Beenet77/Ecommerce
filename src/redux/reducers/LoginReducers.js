import { LOGIN_SUCCESS } from "../constants";

export const LoginReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload
    default:
      return state;
  }
}