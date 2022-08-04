import React  from 'react';     
import { CardView } from '../CardView';

// styles
import './handCards.scss';

interface HandsCardsProps {  
 } 
const HandCards: React.FC<HandsCardsProps> = (  ) => { 
  

  return (
    <>
      <div className='pg-HandCards'>  
        <div className='handCards-first-round' >
          <CardView imageCard={''} nameCard={''}/>
        </div>
      </div>
    </>
  );
};

 
export default React.memo(HandCards);



/*

  { 
    semi: 'diamonds', 
    name: 'two',
    value: 1 ,
    image:''
  },
  { 
    semi: 'diamonds', 
    name: 'three',
    value: 1,
    image:'cards/3_quadri.svg'
  },

  */