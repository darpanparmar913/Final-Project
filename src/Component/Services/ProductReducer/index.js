import { combineReducers } from "redux";
import productReducer from "./ProductReducer";


const mainReducer = combineReducers({
    productReducer
})

export default mainReducer;