import ReactDOM from "react-dom";
import integrateRedux from "./integrations/redux";

import App from "./App";
const MainApp = integrateRedux(App);

const rootElement = document.getElementById("root");
ReactDOM.render(MainApp, rootElement);
