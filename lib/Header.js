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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "./Form.js";
import "./header.css";
import { BsPerson, BsBasket, BsSearch } from "react-icons/bs";
export var Header = function (_a) {
    var user = _a.user, _b = _a.itemsNumber, itemsNumber = _b === void 0 ? 0 : _b, _c = _a.totalPrice, totalPrice = _c === void 0 ? 0.0 : _c, _d = _a.language, language = _d === void 0 ? { "1": "EN", "2": "CN" } : _d, _e = _a.currency, currency = _e === void 0 ? {
        "1": "USD",
        "2": "RMB",
    } : _e;
    return (_jsx("header", { children: _jsxs("div", __assign({ className: "wrapper" }, { children: [_jsxs("div", __assign({ className: "header-options" }, { children: [_jsx(Form, { options: language, type: "selectInput" }), _jsx(Form, { options: currency, type: "selectInput" })] })), _jsxs("div", __assign({ className: "header-btns" }, { children: [_jsxs("button", __assign({ className: "header-btns--profile" }, { children: [_jsx(BsPerson, {}), "My profile"] })), _jsxs("div", __assign({ className: "header-btns--basket" }, { children: [_jsx(BsBasket, {}), _jsxs("p", { children: [itemsNumber, " items"] }), _jsxs("p", __assign({ className: "header-price" }, { children: ["$", totalPrice] }))] })), _jsx("button", __assign({ className: "header-btns--search" }, { children: _jsx(BsSearch, {}) }))] }))] })) }));
};
//# sourceMappingURL=Header.js.map