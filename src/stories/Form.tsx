import { kMaxLength } from "buffer";
import { string } from "prop-types";
import React, { useState, useRef } from "react";
import { Button } from "./Button";
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
  min?: number;
  max?: number;
  step?: number;
  startValue?: number;
  size?: "small" | "large";
  // valueOfTextInput?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Form = ({
  label,
  placeHolder,
  type,
  options = { 1: "select" },
  min,
  max,
  step = 1,
  startValue,
  size,
  value,
  handleChange,
}: // valueOfTextInput,
// value,
FormProps) => {
  const refTextInput = useRef<HTMLInputElement>(null);
  const refNumber = useRef<HTMLInputElement>(null);
  const [textInputValue, setTextInputValue] = useState("");
  const increase = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const currenValue = +refNumber.current!.value;
    if (currenValue < max!) {
      let n = +refNumber.current!.value + step;
      refNumber.current!.value = n.toString();
    } else {
      return;
    }
  };

  const decrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const currenValue = +refNumber.current!.value;
    if (currenValue > min!) {
      let n = +refNumber.current!.value - step;
      refNumber.current!.value = n.toString();
    } else {
      return;
    }
  };

  const setOptions = () => {
    const optionArr = [];
    for (let i in options) {
      optionArr.push([i, options[i]]);
    }
    return optionArr;
  };
  // let valueOfTextInput: string = "jiji";
  // console.log(textValue);
  // const submit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(e.target);
  // };
  if (type === "textInput")
    return (
      <>
        {label ? (
          <label htmlFor="email" className="form-label">
            {label}
          </label>
        ) : null}

        <br />
        <input
          value={value}
          onChange={handleChange}
          // ref={refTextInput}
          type="text"
          name="email"
          id="email"
          placeholder={placeHolder || label}
          // className="form-input--text"
          className={["form-input--text", `form-input--text-${size}`].join(" ")}
          // valueOfTextInput={textValue}
        />
      </>
    );

  if (type === "selectInput")
    return (
      <>
        <select name="select" id="select">
          {setOptions().map((o) => {
            return <option key={o[0]}>{o[1]}</option>;
          })}
        </select>
      </>
    );

  if (type === "numberInput")
    return (
      <div className="number-input">
        <button onClick={(e) => decrease(e)}></button>
        <input
          type="number"
          id="number"
          name="number"
          // min={min}
          // max={max}
          // step={step}
          defaultValue={startValue}
          // value={}
          ref={refNumber}
          // value={refNumber}
          // onChange={}
        />
        <button className="plus" onClick={(e) => increase(e)}></button>
      </div>
    );

  if (type === "textInputWithButton")
    return (
      <form className="input-btn">
        <Form
          type="textInput"
          placeHolder={placeHolder}
          size={size}
          value={textInputValue}
          handleChange={(e) => {
            setTextInputValue(e.target.value);
            // value = textInputValue;
          }}

          // value=""
          // valueOfTextInput={valueOfTextInput}
        />
        <Button
          type="primary"
          label={label}
          size={size}
          handleOnClick={(e) => {
            e.preventDefault();
            console.log(textInputValue);
          }}
        />
      </form>
    );

  return <p>huhuhu</p>;
};
