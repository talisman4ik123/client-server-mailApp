import { combineReducers } from "redux";
import uiStatusReducer from "./slices/uiStatus";

const rootReducer = combineReducers({
    statusData: uiStatusReducer,
});

export default rootReducer;
