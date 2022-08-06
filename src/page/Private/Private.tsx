import React  from 'react';   

// styles
import './private.scss';

interface PrivateProps {  }

/**
 * Components that returns a counter and redirect to main page
 */
const Private: React.FC<PrivateProps> = () => { 
 
  return (
    <div className='pg-Private'>  
      <h1>Private</h1>
    </div>
  );
};

 
export default React.memo(Private);

