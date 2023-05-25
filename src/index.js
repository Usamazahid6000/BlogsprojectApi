import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import Thememode from "./Components/Thememode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <div className="darkMode-btn">
        <Thememode />
      </div>
    </Provider>
  </React.StrictMode>
);
