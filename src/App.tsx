import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./stories/Form";
import { Product } from "./stories/Product";

function App() {
  return (
    <div className="App">
      {/* <Form type="textInputWithButton" size="large" /> */}
      {/* <Form type="checkBox" checkboxColor="blue" labelCheckbox="hello" /> */}

      <Product img="/computer.png" type="inline" price={9090} />
    </div>
  );
}

export default App;
