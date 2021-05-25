import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthServiceImpl from "./components/service/firebase/authServcie";
import FirebaseStoreImpl from "./components/service/firebase/store";

const authService = new AuthServiceImpl();
const store = new FirebaseStoreImpl();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
