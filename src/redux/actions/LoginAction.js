import { LOGIN_SUCCESS } from "../constants"

export const loginAction = (data) => async (dispatch) => {
    return dispatch({ type: LOGIN_SUCCESS, payload: data })
  }