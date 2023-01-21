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
  // backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' |  'large';
  /**
   * Button contents
   */
  outline?:boolean;
  label?: string;
  icon?:string;
  darker?:boolean;
  lighter?:boolean;
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
  type = 'default',
  size = 'small',
  // backgroundColor,
  // color,
  // borderColor,
  darker,
  lighter,
  label,
  icon,
  outline,
  ...props
}: ButtonProps) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
   const displayOutline=outline && `button-outline--${type}`
   const darkerColor=darker && `button--${type}--darker`
   const lighterColor= lighter && `button--${type}--lighter`
   if(icon){
    return(
      <button
      // type="button"
      className={['button--primary--lighter','storybook-button', `storybook-button--${size}`, `storybook-button--${type}`].join(' ')}
      // style={{ backgroundColor,color,borderColor }}
      {...props}
    >
      
      <img src={icon} alt="icon" />
      {label}
    </button>
    ) 
   }
  return (
    <button
      type="button"
      className={[darkerColor,lighterColor,displayOutline,'storybook-button', `storybook-button--${size}`, `storybook-button--${type}`].join(' ')}
      // style={{ backgroundColor,color,borderColor }}
      {...props}
    >
      
      {label}
    </button>
  );
};
