import React  from 'react';   
import { HandCards } from '../../components/HandCards';
import { TitlePage } from '../../components/TitlePage';

// styles
import './playStrategy.scss';

interface PlayStrategyProps {  }

/**
 * Components that returns a counter and redirect to main page
 */
const PlayStrategy: React.FC<PlayStrategyProps> = () => { 
   
 
  return (
    <div className='pg-playStrategy'>   
      <TitlePage title='PlayStrategy' /> 
      <div className='container-index'> 
        <HandCards/>
      </div> 
    </div>
  );
};

 
export default React.memo(PlayStrategy);

