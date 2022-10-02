import React, { ReactNode } from 'react';
import './button.css';

export interface Props {
  label: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  primary?: boolean;
  backgroundColor?: string | '';
  type?: 'button' | 'submit';
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
// eslint-disable-next-line import/prefer-default-export
export const Button = ({ children, backgroundColor = 'white', type = 'button', ...props }: Props) => {
  const mode = props.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button type="button" className={['storybook-button', `storybook-button--${props.size}`, mode].join(' ')} style={{ backgroundColor }} {...props}>
      {props.label}
    </button>
  );

  /* return (
       <button
         type="button"
         className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
         style={{ backgroundColor }}
         {...props}
       >
         {label}
       </button>
     ); */
};
