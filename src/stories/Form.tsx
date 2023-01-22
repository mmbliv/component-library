import React from "react";
import "./form.css";
interface FormProps {
  label?: string;
  placeHolder?: string;
  type?:
    | "textInput"
    | "selectInput"
    | "numberInout"
    | "textInputWithButton"
    | "checkBox";
  options?: { [key: number]: string };
}

export const Form = ({
  label,
  placeHolder,
  type,
  options = { 1: "select" },
}: FormProps) => {
  const setOptions = () => {
    const optionArr = [];
    for (let i in options) {
      optionArr.push([i, options[i]]);
    }
    // const optionArr = Object.entries(options);
    // console.log(optionArr);
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
          {/* {options()} */}
          {/* {options.map((i) => {
            return (
              <option key={i.key} value={i.value}>
                {i.value}
              </option>
            );
          })} */}
          {/* <option value={options.value}>{options.value}</option> */}
        </select>
      </form>
    );
  return <p>huhuhu</p>;
};
