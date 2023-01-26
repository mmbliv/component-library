/// <reference types="react" />
import "./product.css";
interface ProductProps {
    type: "block" | "inline";
    img?: string;
    overlay?: boolean;
    name?: string;
    price?: number;
    starImg?: string;
    activeStartNumber?: number;
    inactiveStart?: number;
    oldPrice?: number;
    column?: boolean;
    row?: boolean;
    border?: boolean;
    background?: boolean;
    iconActive?: boolean;
}
export declare const Product: ({ type, img, name, price, overlay, activeStartNumber, inactiveStart, oldPrice, border, background, row, column, iconActive, }: ProductProps) => JSX.Element;
export {};
//# sourceMappingURL=Product.d.ts.map