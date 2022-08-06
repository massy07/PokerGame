import React, { useState } from 'react';   
import { useSelector, useDispatch  } from  'react-redux';   
import { useNavigate } from 'react-router';

// styles
import './counterCards.scss';
import { deleteCard, getRandomInt, setNewDecks } from '../../store/reducer/decksStore';
import { cardState } from '../../store/entities/deck';
import { CardView } from '../../components/CardView';
import { rootState } from '../..';
import Counter from '../../components/Counter/Counter';

interface CounterCardsProps {  }
 

const CounterCards: React.FC<CounterCardsProps> = () => { 

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ card, setCard ] = useState<cardState>( {name:'start',value: 0 ,image:'cards/start.svg'}) ;

  const decks = useSelector<rootState,Array<cardState>>(  state  => state.decks  ) ;

  const creationDeck = () => {
    dispatch(setNewDecks()) 
  }

  const removeCard = () => {
    const positionCard = getRandomInt(decks.length) 
    setCard( decks[positionCard] )
    dispatch( deleteCard(positionCard) ) 
  }

 

  return (
    <div className='pg-counterCards'>  
      <button onClick={()=>navigate("/homepage")}>go back</button>
      <button className='creationDeck' onClick={creationDeck} >new deck</button>
      <h1>CounterCards</h1>
      <CardView imageCard={card.image} nameCard={card.name} className='counting' /> 
      <h1>{ decks.length }</h1>
      {decks.length > 0 &&  
      <div className='counter-container'  >
        <Counter valueCard={card.value} nextCard={decks.length}  />
        <button className='removeCard' onClick={removeCard} >remove card</button>
      </div> }

    </div>
  ); 
};

 
export default React.memo(CounterCards);

