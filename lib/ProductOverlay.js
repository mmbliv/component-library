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
import "./productOverlay.css";
import cart from "./assets/cart.png";
import heart from "./assets/heart.png";
import activeHeart from "./assets/activeheart.png";
import activeCart from "./assets/activecart.png";
export var ProductOverlay = function (_a) {
    var active = _a.active;
    return (_jsxs("div", __assign({ className: "product-overlay" }, { children: [_jsx("img", { src: active ? activeCart : cart, alt: "cart" }), _jsx("img", { src: active ? activeHeart : heart, alt: "heart" })] })));
};
//# sourceMappingURL=ProductOverlay.js.map