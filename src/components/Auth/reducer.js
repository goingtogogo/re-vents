import { LOGIN_USER, SIGN_OUT_USER } from "./constants";
import { createReducer } from "../../common/reducer";

const initialState = {
  currentUser: {}
};

export const loginUser = (state, payload) => {
  return {
    ...state,
    authentificated: true,
    currentUser: payload.creds.email
  };
};

export const sightOutUser = (state, payload) => {
  return {
    ...state,
    authentificated: false,
    currentUser: {}
  };
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGN_OUT_USER]: sightOutUser
});
