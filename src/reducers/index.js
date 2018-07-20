import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import events from "../components/Dashboard/reducers";
import modals from "../components/Modals/reducer";
import auth from "../components/Auth/reducer";

const rootReducer = combineReducers({
  events,
  form: FormReducer,
  modals,
  auth
});

export default rootReducer;
