import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Timer } from "./Timer";
import { store } from "./redux/store";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Timer />
  </Provider>
);
