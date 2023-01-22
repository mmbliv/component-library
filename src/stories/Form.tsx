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
  option?: { id: number; value: string }[];
}

export const Form = ({
  label,
  placeHolder,
  type,
  option = [{ id: 1, value: "select" }],
}: FormProps) => {
  //   const options = () => {
  //     if (option && typeof option === "object") {
  //       console.log(option);
  //       return option.map((i, index) => {
  //         return (
  //           <option key={index} value={i}>
  //             {i}
  //           </option>
  //         );
  //       });
  //     } else {
  //       return null;
  //     }
  //   };
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
          {/* {options()} */}
          {option.map((i) => {
            return (
              <option key={i.id} value={i.value}>
                {i.value}
              </option>
            );
          })}
        </select>
      </form>
    );
  return <p>huhuhu</p>;
};
