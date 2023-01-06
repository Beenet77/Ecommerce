import { API_URL, ECOM } from "../../api/api"
import { LOGIN_SUCCESS } from "../constants"

export const loginAction = (data) => async (dispatch) => {
  try {
    let response = await ECOM.post(API_URL.login, data);
    if (response.status <= 299) {
      alert("Login Successful!")
    }
  }
  catch {
    alert("somthing went wrong")
  }
 
    return dispatch({ type: LOGIN_SUCCESS, payload: data })
}