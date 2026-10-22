import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'phone';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  target,
  rel,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...restProps
}) => {
  const combinedClassName = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn__icon btn__icon--left">{icon}</span>}
      <span className="btn__text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn__icon btn__icon--right">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...restProps}>
      {content}
    </button>
  );
};
