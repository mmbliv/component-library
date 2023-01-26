import React from "react";
import "./button.css";
interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    type?: "primary" | "danger" | "success" | "warning" | "default";
    /**
     * What background color to use
     */
    /**
     * How large should the button be?
     */
    size?: "small" | "large";
    /**
     * Button contents
     */
    outline?: boolean;
    label?: string;
    hasIcon?: boolean;
    icon?: "heart" | "cart";
    darker?: boolean;
    lighter?: boolean;
    /**
     * Optional click handler
     */
    handleOnClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ type, size, darker, lighter, label, icon, outline, hasIcon, handleOnClick, }: ButtonProps) => JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map