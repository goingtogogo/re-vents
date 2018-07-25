import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import rootReducer from "../reducers";
import firebase from "../config/firebase";

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};

export const configureStore = preloadedState => {
  const middlwares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  const middlewareEnhanser = applyMiddleware(...middlwares);

  const storeEnhansers = [middlewareEnhanser];

  const composedEnhanser = composeWithDevTools(
    ...storeEnhansers,
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );

  const store = createStore(rootReducer, preloadedState, composedEnhanser);

  return store;
};
