import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

export const configureStore = preloadedState => {
  const middlwares = [];
  const middlewareEnhanser = applyMiddleware(...middlwares);

  const storeEnhansers = [middlewareEnhanser];

  const composedEnhanser = composeWithDevTools(...storeEnhansers);

  const store = createStore(rootReducer, preloadedState, composedEnhanser);

  return store;
};
