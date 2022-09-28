import React from 'react';
import classNames from 'classnames';
import { Portal } from '../../library/Portal/index'; 

// styles
import './floatingContent.scss';

interface FloatingContentProps {
  className?: string;
  children?: React.ReactNode; 
  isShow: boolean;
  onToggle: (item:boolean) => void;
}

const FloatingContent: React.FC<FloatingContentProps> = ({ className, children,  isShow, onToggle , ...rest}) => {

  const classList = classNames('floatingContent', {}, className);
  
  return (
    <> 
      {isShow && (
        <Portal id={classList} {...rest}  > 
            {children} 
        </Portal>
      )}
    </>
  );
};

export default React.memo(FloatingContent);
