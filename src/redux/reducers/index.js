import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducers";
import { CategoriesReducers } from "./CategoriesReducers";

export default combineReducers({LoginReducer, CategoriesReducers});