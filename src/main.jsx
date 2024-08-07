import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TodoContext from "./context/TodoContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <TodoContext>
        <App />
      </TodoContext>
    </BrowserRouter>
  </Provider>
);
