import React from "react";
import ReactDOM from "react-dom";
import Add from "./Add.jsx"

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: micro1</div>
    <div>Framework: react</div>
    <Add />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
