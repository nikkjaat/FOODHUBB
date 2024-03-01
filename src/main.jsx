import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
