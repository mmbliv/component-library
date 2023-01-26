import React from "react";
import "./form.css";
interface FormProps {
    label?: string;
    placeHolder?: string;
    type?: "textInput" | "selectInput" | "numberInput" | "textInputWithButton" | "checkBox";
    options?: {
        [key: number]: string;
    };
    min?: number;
    max?: number;
    step?: number;
    startValue?: number;
    size?: "small" | "large";
    value?: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelCheckbox?: string;
    valueCheckbox?: string;
    checkedState?: boolean;
    checkboxColor?: "blue" | "black";
}
export declare const Form: ({ label, placeHolder, type, options, min, max, step, startValue, size, value, handleChange, valueCheckbox, labelCheckbox, checkedState, checkboxColor, }: FormProps) => JSX.Element;
export {};
//# sourceMappingURL=Form.d.ts.map