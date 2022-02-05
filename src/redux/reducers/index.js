import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import cartReducer from "./cart";

const allReducers = combineReducers({
    isLogged: loggedReducer,
    cart: cartReducer,
})

export default allReducers;