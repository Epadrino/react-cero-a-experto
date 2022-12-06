import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import { HelloWorldApp } from "./HelloWorldApp";
import "./styleds.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp />
    <FirstApp title="Esto es una Props" />
  </React.StrictMode>
);
