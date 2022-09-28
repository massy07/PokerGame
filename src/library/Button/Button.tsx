import React from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon'; 

// style
import './button.scss';

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  disabled?: boolean;
  onClick: () => void;
  rounded?: boolean;
  type?: 'button' | 'reset' | 'submit';
  icon?: string; 
  fluid?: boolean;
  transparent?: boolean;
  selected?: boolean;
  size?: 'small' | 'default' | 'large';
  children?: React.ReactNode;
  className?: string; 
  outlined?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  rounded,
  type,
  icon,
  fluid,
  transparent,
  size,
  className, 
  children,  
  ...rest
}) => {
  const classList = classNames(
    'tps-btn',
    {
      'btn-rounded': rounded,
      'btn-disabled': disabled, 
      'btn-fluid': fluid, 
      'btn-transparent': transparent,
      [`btn-${size}`]: size, 
    },
    className,
  );

  return (
    <button className={classList}   onClick={onClick} disabled={disabled} type={type} {...rest}>
      {icon && <Icon icon={icon} />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  rounded: false,
  type: 'button', 
  fluid: false,
  transparent: false, 
  size: 'default',
};

export default React.memo(Button);
