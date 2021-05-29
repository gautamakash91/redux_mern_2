import { combineReducers } from "redux";
import login from "./login/login-reducer";
import counter from "./counter/counterReducer";

export default combineReducers({
    login,
    counter
});
