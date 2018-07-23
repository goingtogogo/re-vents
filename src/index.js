import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { configureStore } from "./store";
import ScrollToTop from "./common/ScrollToTop";
import { loadEvents } from "./components/Dashboard/actions";

const store = configureStore();
store.dispatch(loadEvents());
const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./components/App", () => {
    setTimeout(render);
  });
}

render();
registerServiceWorker();
