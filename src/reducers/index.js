import { combineReducers } from "redux";
import events from "../components/Dashboard/reducers";

const rootReducer = combineReducers({ events });

export default rootReducer;
