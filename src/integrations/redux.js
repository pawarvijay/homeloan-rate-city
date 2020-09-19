import React from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { homeLoanReducer } from "../redux/homeLoanReducer";

const store = createStore(homeLoanReducer, applyMiddleware(thunk));

export default function integrateRedux(App) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
