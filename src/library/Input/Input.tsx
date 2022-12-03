import React from 'react';
import classNames from 'classnames';

// styles
import './input.scss';

interface InputProps {
  /**
   * The input value
   */
  value?: string | number;
  /**
   * The function to run on value change
   */
  onChange?: (obj: any) => void;
  /**
   * If true, disabled the input
   */
  disabled?: boolean;
  /**
   * An input label
   */
  label?: string;
  /**
   * Display an helpText on the right of the component
   */
  helpText?: string;
  /**
   * Input size
   */
  size?: 'default' | 'medium' | 'large';
  /**
   * Align input content
   */
  alignText?: 'left' | 'right' | 'center';
  /**
   * The input's label posizion
   */
  labelPosition?: 'top' | 'left' | 'rigth' | 'down' | '';
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  fluid?: boolean;
  type?:string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  disabled,
  label,
  helpText,
  alignText,
  size,
  labelPosition,
  placeholder,
  fluid,
  className,
  type,
}) => {
  const classList = classNames('tps-input', {
    [`${labelPosition}-label`]: labelPosition,
    fluid,
  });
  const inputClassList = classNames(
    'input-box',
    {
      disabled,
      [`size-${size}`]: size,
      [`align-${alignText}`]: alignText,
    },
    className,
  );

  return (
    <div className={classList}>
      {label && <label className='label-input'>{label}</label>}
      <input type={type} disabled={disabled} value={value} onChange={onChange} className={inputClassList} placeholder={placeholder}  />
      {helpText && <label className='helpText'>{helpText}</label>}
    </div>
  );
};

Input.defaultProps = {
  value: '',
  onChange: undefined,
  size: 'default',
  disabled: false,
  label: '',
  helpText: '',
  alignText: 'center',
  labelPosition: 'top',
  type:'text',
};

export default React.memo(Input);
