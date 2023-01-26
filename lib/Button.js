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
import "./button.css";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
/**
 * Primary UI component for user interaction
 */
export var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "default" : _b, _c = _a.size, size = _c === void 0 ? "small" : _c, 
    // backgroundColor,
    // color,
    // borderColor,
    darker = _a.darker, lighter = _a.lighter, label = _a.label, icon = _a.icon, outline = _a.outline, hasIcon = _a.hasIcon, handleOnClick = _a.handleOnClick;
    // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    var displayOutline = outline && "button-outline--".concat(type);
    var darkerColor = darker && "button--".concat(type, "--darker");
    var lighterColor = lighter && "button--".concat(type, "--lighter");
    var setIcon = function () {
        if (icon === "heart") {
            return _jsx(BsHeart, {});
        }
        if (icon === "cart") {
            return _jsx(BsCart, {});
        }
    };
    // handleOnClick = function (
    //   e:
    //     | React.MouseEvent<HTMLButtonElement, MouseEvent>
    //     | React.FormEvent<HTMLFormElement>
    // ) {
    //   e.preventDefault();
    // };
    if (hasIcon) {
        return (_jsxs("button", __assign({ 
            // type="button"
            className: [
                "button--icon",
                "storybook-button",
                "storybook-button--".concat(size),
                "storybook-button--".concat(type),
            ].join(" ") }, { children: [setIcon(), label] })));
    }
    return (_jsx("button", __assign({ 
        // type="button"
        className: [
            darkerColor,
            lighterColor,
            displayOutline,
            "storybook-button",
            "storybook-button--".concat(size),
            "storybook-button--".concat(type),
        ].join(" "), 
        // style={{ backgroundColor,color,borderColor }}
        // {...props}
        // {handleOnClick && onClick={e=>onClick(e)}}
        onClick: handleOnClick }, { children: label })));
};
//# sourceMappingURL=Button.js.map