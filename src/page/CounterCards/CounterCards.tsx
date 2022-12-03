import React, { useState } from 'react';   
import { useSelector, useDispatch  } from  'react-redux';   
import { deleteCard,  setNewDecks } from '../../store/reducer/decksStore';
import { cardState } from '../../store/entities/deck';
import { ImageView } from '../../components/ImageView';
import { rootState } from '../..'; 
import { Counter } from '../../components/Counter';
import { getRandomInt } from '../../store/utils/utils';


// styles
import './counterCards.scss';
import { TitlePage } from '../../components/TitlePage';

interface CounterCardsProps {  }
 

const CounterCards: React.FC<CounterCardsProps> = () => { 

  const dispatch = useDispatch();

  const [ card, setCard ] = useState<cardState>( {name:'start', valueCounter:0, valueCard:0, number:0,image:'cards/start.svg'}) ; 
  const decks = useSelector<rootState,Array<cardState>>(  state  => state.decks  ) ;

  const creationDeck = () => {
    setCard( {name:'start', valueCounter:0, number:0, valueCard:0, image:'cards/start.svg'} )
    dispatch(setNewDecks()) 
  }
  
  const removeCard = () => {
    const positionCard = getRandomInt(decks.length) 
    setCard( decks[positionCard] )
    dispatch( deleteCard(positionCard) ) 
  }


  return (
    <div className='pg-counterCards'>
      <div>
        <TitlePage title='counter Cards' />   
        <button className='creationDeck' onClick={creationDeck} >new deck</button> 
      </div>
      <ImageView imageCard={card.image} nameCard={card.name} className='counting' /> 
      <h1>{ decks.length }</h1>
      {decks.length > 0 &&  
        <div className='counter-container'  >
          <Counter valueCard={card.valueCounter} deckCards={decks.length} newDeck={card.number===0} />
          <button className='removeCard' onClick={removeCard} >remove card</button>
        </div> 
      } 
    </div>
  ); 
};

 
export default React.memo(CounterCards);

