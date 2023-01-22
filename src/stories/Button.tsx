import React from "react";
import "./button.css";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: "primary" | "danger" | "success" | "warning" | "default";
  /**
   * What background color to use
   */
  // backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "large";
  /**
   * Button contents
   */
  outline?: boolean;
  label?: string;
  hasIcon: boolean;
  icon?: "heart" | "cart";
  darker?: boolean;
  lighter?: boolean;
  // color:string;
  // borderColor:string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = "default",
  size = "small",
  // backgroundColor,
  // color,
  // borderColor,
  darker,
  lighter,
  label,
  icon,
  outline,
  hasIcon,
  ...props
}: ButtonProps) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const displayOutline = outline && `button-outline--${type}`;
  const darkerColor = darker && `button--${type}--darker`;
  const lighterColor = lighter && `button--${type}--lighter`;
  const setIcon = () => {
    if (icon === "heart") {
      return <BsHeart />;
    }
    if (icon === "cart") {
      return <BsCart />;
    }
  };
  if (hasIcon) {
    return (
      <button
        // type="button"
        className={[
          "button--icon",
          "storybook-button",
          `storybook-button--${size}`,
          `storybook-button--${type}`,
        ].join(" ")}
        // style={{ backgroundColor,color,borderColor }}
        // {...props}
      >
        {setIcon()}
        {label}
      </button>
    );
  }
  return (
    <button
      // type="button"
      className={[
        darkerColor,
        lighterColor,
        displayOutline,
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${type}`,
      ].join(" ")}
      // style={{ backgroundColor,color,borderColor }}
      // {...props}
    >
      {label}
    </button>
  );
};
