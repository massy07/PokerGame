import React  from 'react';     
import { cardState } from '../../store/entities/deck';
import { ImageView } from '../ImageView'; 

// styles
import './handCards.scss';

interface HandsCardsProps {  
  cardHand:Array<cardState>;
  className?:string
 } 
const HandCards: React.FC<HandsCardsProps> = ( { cardHand, className} ) => { 

  

  return (
    <>
      <div className='handCards'>  
        <div className='firs-hand-box'>   
          { cardHand.map( (item,index) => index < 2 && 
              <ImageView imageCard={item.image} nameCard={item.name} className={'small'}/>
            )
          }
        </div>
        <div className='second-hand-box'>  
          { cardHand.map( (item,index) => index > 2 && 
              <ImageView imageCard={item.image} nameCard={item.name} className={'small'}/>
            )
          }
        </div>
      </div>
    </>
  );
};

 
export default React.memo(HandCards);


