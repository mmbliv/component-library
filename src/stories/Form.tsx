import { kMaxLength } from "buffer";
import { string } from "prop-types";
import React from "react";
import "./form.css";
interface FormProps {
  label?: string;
  placeHolder?: string;
  type?:
    | "textInput"
    | "selectInput"
    | "numberInput"
    | "textInputWithButton"
    | "checkBox";
  options?: { [key: number]: string };
  min?: string;
  max?: string;
  step?: string;
  startValue?: string;
}

export const Form = ({
  label,
  placeHolder,
  type,
  options = { 1: "select" },
  min,
  max,
  step,
  startValue,
}: FormProps) => {
  const setOptions = () => {
    const optionArr = [];
    for (let i in options) {
      optionArr.push([i, options[i]]);
    }
    return optionArr;
  };

  if (type === "textInput")
    return (
      <form>
        <label htmlFor="email" className="form-label">
          {label}
        </label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder={placeHolder || label}
          className="form-input--text"
        />
      </form>
    );

  if (type === "selectInput")
    return (
      <form>
        <select name="select" id="select">
          {setOptions().map((o) => {
            return <option key={o[0]}>{o[1]}</option>;
          })}
        </select>
      </form>
    );

  if (type === "numberInput")
    return (
      <form>
        <input
          type="number"
          id="number"
          name="number"
          min={min}
          max={max}
          step={step}
          defaultValue={startValue}
          // onChange={}
        />
      </form>
    );

  return <p>huhuhu</p>;
};
