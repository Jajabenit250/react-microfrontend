import React from "react";
import ReactDOM from "react-dom";
import Add from "remote/Add";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: react</div>
    <Add />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
