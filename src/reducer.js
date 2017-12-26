import { combineReducers } from "redux";
import adaptive from "./redux_modules/adaptive";
import { routerReducer } from "react-router-redux";

export default combineReducers({
    adaptive,
    router: routerReducer
});
