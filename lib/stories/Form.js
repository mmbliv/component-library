var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { Button } from "./Button";
import "./form.css";
export var Form = function (_a) {
    var label = _a.label, placeHolder = _a.placeHolder, type = _a.type, _b = _a.options, options = _b === void 0 ? { 1: "select" } : _b, min = _a.min, max = _a.max, _c = _a.step, step = _c === void 0 ? 1 : _c, startValue = _a.startValue, size = _a.size, value = _a.value, handleChange = _a.handleChange, valueCheckbox = _a.valueCheckbox, labelCheckbox = _a.labelCheckbox, checkedState = _a.checkedState, checkboxColor = _a.checkboxColor;
    var refTextInput = useRef(null);
    var refNumber = useRef(null);
    var _d = useState(""), textInputValue = _d[0], setTextInputValue = _d[1];
    var increase = function (e) {
        e.preventDefault();
        var currenValue = +refNumber.current.value;
        if (currenValue < max) {
            var n = +refNumber.current.value + step;
            refNumber.current.value = n.toString();
        }
        else {
            return;
        }
    };
    var decrease = function (e) {
        e.preventDefault();
        var currenValue = +refNumber.current.value;
        if (currenValue > min) {
            var n = +refNumber.current.value - step;
            refNumber.current.value = n.toString();
        }
        else {
            return;
        }
    };
    var setOptions = function () {
        var optionArr = [];
        for (var i in options) {
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
        return (_jsxs(_Fragment, { children: [label ? (_jsx("label", __assign({ htmlFor: "email", className: "form-label" }, { children: label }))) : null, _jsx("br", {}), _jsx("input", { value: value, onChange: handleChange, 
                    // ref={refTextInput}
                    type: "text", name: "email", id: "email", placeholder: placeHolder || label, 
                    // className="form-input--text"
                    className: ["form-input--text", "form-input--text-".concat(size)].join(" ") })] }));
    if (type === "selectInput")
        return (_jsx(_Fragment, { children: _jsx("select", __assign({ name: "select", id: "select" }, { children: setOptions().map(function (o) {
                    return _jsx("option", { children: o[1] }, o[0]);
                }) })) }));
    if (type === "numberInput")
        return (_jsxs("div", __assign({ className: "number-input" }, { children: [_jsx("button", { onClick: function (e) { return decrease(e); } }), _jsx("input", { type: "number", id: "number", name: "number", 
                    // min={min}
                    // max={max}
                    // step={step}
                    defaultValue: startValue, 
                    // value={}
                    ref: refNumber }), _jsx("button", { className: "plus", onClick: function (e) { return increase(e); } })] })));
    if (type === "textInputWithButton")
        return (_jsxs("form", __assign({ className: "input-btn" }, { children: [_jsx(Form, { type: "textInput", placeHolder: placeHolder, size: size, value: textInputValue, handleChange: function (e) {
                        setTextInputValue(e.target.value);
                        // value = textInputValue;
                    } }), _jsx(Button, { type: "primary", label: label, size: size, handleOnClick: function (e) {
                        e.preventDefault();
                        console.log(textInputValue);
                    } })] })));
    if (type === "checkBox")
        return (_jsxs("div", __assign({ className: "checkbox" }, { children: [_jsx("input", { type: "checkbox", id: "checkbox", name: "checkbox", value: valueCheckbox, checked: checkedState, className: ["checkbox-".concat(checkboxColor)].join(" ") }), labelCheckbox && _jsx("label", __assign({ htmlFor: "checkbox" }, { children: labelCheckbox }))] })));
    return _jsx("p", { children: "huhuhu" });
};
//# sourceMappingURL=Form.js.map