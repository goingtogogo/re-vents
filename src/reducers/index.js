import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import events from "../components/Dashboard/reducers";

const rootReducer = combineReducers({ events, form: FormReducer });

export default rootReducer;
