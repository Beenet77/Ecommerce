import { CATEGORIES_SUCCESS } from "../constants";

export const CategoriesReducers = (state = null, action) =>{
    switch (action.type){
        case CATEGORIES_SUCCESS:
            return action.payload
        default:
            return state;
    }
}