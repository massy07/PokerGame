import React from 'react';
import classNames from 'classnames'; 

// styles
import './icon.scss';
 
interface IconProps {
  icon: string;
  color?: string;
  iconDesc?: string;
  disabled?: boolean;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon, iconDesc, disabled = false, className }) => {
  const classList = classNames('tps-icon', { disabled }, className);
  return (
    <div className={classList}> 
      <img src={icon} alt={iconDesc} />
    </div>
  );
};

export default React.memo(Icon);
