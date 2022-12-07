import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
import "./styleds.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={0} />
    {/* <FirstApp title="Hola soy Goku" subTitle={"esto es un subtitulo"} /> */}
  </React.StrictMode>
);
