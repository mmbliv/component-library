import { kMaxLength } from "buffer";
import { string } from "prop-types";
import React, { useState, useRef } from "react";
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
  step: number;
  startValue?: number;
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
}: FormProps) => {
  const refNumber = useRef<HTMLInputElement>(null);
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
    }
  };
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
      <form className="number-input">
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
      </form>
    );

  return <p>huhuhu</p>;
};
