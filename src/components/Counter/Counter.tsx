import React, { FC, useState, useEffect } from 'react';

// style
import './counter.scss';

interface CounterProps {
  valueCard:number,
  newDeck:boolean,
  deckCards:number,
}

const Counter: FC<CounterProps> = ({ valueCard, deckCards, newDeck }) => {

  const [ counter, setCounter ] = useState(0);

  useEffect( () =>{ if(newDeck){setCounter(0)} }, [newDeck] ); 
  
  useEffect( () => setCounter( counter => counter + valueCard ), [valueCard, deckCards] );

  return(
    <>
      <div className="counter" data-testid="counter">
        <h1>{counter}</h1> 
      </div>
    </>
  )
};

export default React.memo(Counter); 
