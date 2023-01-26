import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "./Header";
import "./page.css";
export var Page = function (_a) {
    var children = _a.children, type = _a.type;
    // const [user, setUser] = React.useState<User>();
    if (type === "home")
        return (_jsxs("article", { children: [_jsx(Header, {}), children] }));
    return null;
};
//# sourceMappingURL=Page.js.map