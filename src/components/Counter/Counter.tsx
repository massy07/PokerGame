import React, { FC, useState, useEffect } from 'react';

// style
import './counter.scss';

interface CounterProps {
  valueCard:number,
  nextCard:number
}

const Counter: FC<CounterProps> = ({ valueCard, nextCard }) => {

  const [ counter, setCounter ] = useState(0);
  
  useEffect( () => setCounter( counter => counter + valueCard ), [valueCard, nextCard] );

  return(
    <>
      <div className="counter" data-testid="counter">
        <h1>{counter}</h1> 
      </div>
    </>
  )
};

export default React.memo(Counter); 
