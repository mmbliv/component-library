import React, { ElementType } from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?:'primary' | 'danger' | 'success' | 'warning' | 'default';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' |  'large';
  /**
   * Button contents
   */
  outline?:boolean;
  borderColor?:string;
  color?:string;
  label: string;
  icon?:ElementType;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'default',
  size = 'small',
  backgroundColor,
  label,
  outline,
  ...props
}: ButtonProps) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
   const displayOutline=outline && `button-outline--${type}`
  return (
    <button
      type="button"
      className={[displayOutline,'storybook-button', `storybook-button--${size}`, `storybook-button--${type}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
