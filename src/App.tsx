import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./stories/Form";

function App() {
  return (
    <div className="App">
      <Form type="textInputWithButton" size="large" />
    </div>
  );
}

export default App;
