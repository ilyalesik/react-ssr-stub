import { combineReducers } from "redux";
import adaptive from "./redux_modules/adaptive/reducer";
import notfound from "./redux_modules/notfound/reducer";
import { routerReducer } from "react-router-redux";

export default combineReducers({
    adaptive,
    notfound,
    router: routerReducer
});
