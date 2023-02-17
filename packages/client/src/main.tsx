import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@libs/style.css";
import { StateProvider } from "@libs/context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
