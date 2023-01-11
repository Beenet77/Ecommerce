import { combineReducers } from "redux";
import { GetUserInfoReducers } from "./GetUserInfoReducers";
import { CategoriesReducers } from "./CategoriesReducers";

export default combineReducers({GetUserInfoReducers, CategoriesReducers});