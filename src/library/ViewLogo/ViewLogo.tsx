import React  from 'react';  
import classNames from 'classnames';
// styles
import './viewLogo.scss';

interface ViewLogoProps {
  className?: string; 
  Logo:string;
}

/**
 * Components that returns a counter and redirect to main page
 */
const ViewLogo: React.FC<ViewLogoProps> = ({ className, Logo}) => { 

  const classList = classNames('tps-viewlogo',className)

  return (
    <div className={classList}>
      <img className='viewlogo-img' src={Logo} alt="logo" />
  </div>
  );
};

export default React.memo(ViewLogo);
