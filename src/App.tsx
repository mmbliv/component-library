import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./stories/Form";

function App() {
  return (
    <div className="App">
      <Form type="numberInput" step={1} startValue={1} />
    </div>
  );
}

export default App;
