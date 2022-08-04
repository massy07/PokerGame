import React  from 'react';   

// styles
import './privato.scss';

interface PrivatoProps {  }

/**
 * Components that returns a counter and redirect to main page
 */
const Privato: React.FC<PrivatoProps> = () => { 
 
  return (
    <div className='pg-privato'>  
      <h1>privato</h1>
    </div>
  );
};

 
export default React.memo(Privato);

