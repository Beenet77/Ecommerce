import { API_URL, ECOM } from "../../api/api";
import { CATEGORIES_SUCCESS } from "../constants";

export const getCategories = () => async (dispatch) => {
	try {
		let response = await ECOM.get(API_URL.categories);
		let jsondata = response.data;
		if (response.status <= 299) {
			dispatch({type: CATEGORIES_SUCCESS, payload: jsondata})
		}
		else {
			alert("somthing went wrong")
		}
	}
	catch {
		alert("somthing went wrong")
	}
}