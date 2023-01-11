import { USER_INFO } from "../constants";

export const GetUserInfoReducers = (state = null, action) => {
  switch (action.type) {
    case USER_INFO:
      return action.payload
    default:
      return state;
  }
}