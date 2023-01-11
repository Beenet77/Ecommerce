import { API_URL, ECOM } from "../../api/api";
import { USER_INFO } from "../constants";

export const getUserInfoAction = () => async (dispatch) => {
  try {
    let response = await ECOM.get(API_URL.profile);
    if (response.status <= 299) {
      alert("Login Successful!")
      dispatch({ type: USER_INFO, payload: response.data })
    }
  }
  catch(err) {
    alert(err.message)
  }
}