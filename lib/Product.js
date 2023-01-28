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
import "./product.css";
import { Button } from "./Button.js";
import hot from "./assets/hot.png";
import starInactive from "./assets/startInactive.png";
import starActive from "./assets/starActive.png";
import computerImg from "./assets/computer.png";
// import heart from "./assets/heart.png";
// import cart from "./assets/cart.png";
// import activeCart from "./assets/activecart.png";
// import activeHeart from "./assets/activeheart.png";
import { ProductOverlay } from "./ProductOverlay";
export var Product = function (_a) {
    var type = _a.type, _b = _a.img, img = _b === void 0 ? computerImg : _b, _c = _a.name, name = _c === void 0 ? "computer" : _c, _d = _a.price, price = _d === void 0 ? 1000 : _d, overlay = _a.overlay, _e = _a.activeStartNumber, activeStartNumber = _e === void 0 ? 3 : _e, _f = _a.inactiveStart, inactiveStart = _f === void 0 ? 2 : _f, _g = _a.oldPrice, oldPrice = _g === void 0 ? 800 : _g, border = _a.border, background = _a.background, row = _a.row, column = _a.column, iconActive = _a.iconActive;
    var renderStar = function () {
        var starts = [];
        for (var i = 0; i < activeStartNumber; i++) {
            starts.push(_jsx("img", { src: starActive, alt: "star", className: type === "inline" ? "small-star" : "" }));
        }
        for (var i = 0; i < inactiveStart; i++) {
            starts.push(_jsx("img", { src: starInactive, alt: "star", className: type === "inline" ? "small-star" : "" }));
        }
        return starts;
    };
    if (type === "block")
        return (_jsxs("div", __assign({ className: [
                "product-block--column",
                "".concat(row && "product-block--row"),
                "".concat(border && "product-block--border"),
                "".concat(background && "product-block--background"),
            ].join(" ") }, { children: [_jsxs("div", __assign({ className: "product-block--img-container" }, { children: [_jsx("img", { src: computerImg, alt: "", className: "product-block--img" }), overlay && (_jsx("div", __assign({ className: "product-overlay" }, { children: _jsx(ProductOverlay, { active: true }) })))] })), _jsxs("div", __assign({ className: "product-block--content-container" }, { children: [column && _jsx("div", { className: "line" }), _jsx("p", __assign({ className: "product-block--name" }, { children: name })), _jsx("div", __assign({ className: "product-block--stars" }, { children: renderStar() })), _jsxs("p", __assign({ className: "product--price" }, { children: ["$", price, " ", _jsxs("span", __assign({ className: "product--old-price" }, { children: ["$", oldPrice] }))] }))] }))] })));
    return (_jsxs("div", __assign({ className: "product-inline" }, { children: [_jsxs("div", __assign({ className: "product-inline--img-container" }, { children: [_jsx("img", { src: computerImg, alt: "img", className: "product-inline--img" }), _jsx("img", { src: hot, alt: "hot", className: "badge--hot" })] })), _jsxs("div", __assign({ className: "product-inline--content" }, { children: [_jsx("p", __assign({ className: "product--name" }, { children: name })), _jsxs("div", __assign({ className: "product-inline--review-container" }, { children: [_jsx("div", { children: renderStar() }), _jsx("span", __assign({ className: "product-inline--review" }, { children: "0 review" })), _jsx("a", __assign({ href: "", className: "product-inline--submit-review" }, { children: "Submit a review" }))] })), _jsxs("p", __assign({ className: "product--price" }, { children: ["$", price, " ", _jsxs("span", __assign({ className: "product--old-price" }, { children: ["$", oldPrice] }))] })), _jsx("p", __assign({ className: "product-inline--description" }, { children: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..." })), _jsxs("div", __assign({ className: "product-inline--btns" }, { children: [_jsx(Button, { hasIcon: true, icon: "cart", label: "Add To Cart", size: "small" }), _jsx(Button, { hasIcon: true, icon: "heart", size: "small" })] }))] }))] })));
};
//# sourceMappingURL=Product.js.map