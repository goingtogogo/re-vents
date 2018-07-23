import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { reducer as toastr } from "react-redux-toastr";
import events from "../components/Dashboard/reducers";
import modals from "../components/Modals/reducer";
import auth from "../components/Auth/reducer";
import async from "../components/Async/reducer";

const rootReducer = combineReducers({
  events,
  form: FormReducer,
  modals,
  auth,
  async,
  toastr
});

export default rootReducer;
