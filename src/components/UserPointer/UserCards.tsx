import React  from 'react';   

// styles
import './playStrategy.scss';

interface PlayStrategyProps {  }

/**
 * Components that returns a counter and redirect to main page
 */
const PlayStrategy: React.FC<PlayStrategyProps> = () => { 
   
 
  return (
    <div className='pg-userCards'>    
      <div className='userCards-firstCards-container-index'> 
        
      </div> 
    </div>
  );
};

 
export default React.memo(PlayStrategy);
