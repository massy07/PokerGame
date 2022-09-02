import React, { FC } from 'react';
import { handCardsPlayerState } from '../../store/entities/handCardsPlayers';
import { getCorrectStrategy, selectionStrategy} from '../../store/entities/matrixStrategy'; 

// style

import './Strategy.scss';

interface StrategyProps {
  dealer:handCardsPlayerState,
  player:handCardsPlayerState, 
  viewResult: (selectResult:Array<string>)=>void
}

const Strategy: FC<StrategyProps> = ({ dealer, player, viewResult }) => {  

  const handleSelectionStrategy = (strategySelected:string) => {  
    viewResult( [strategySelected, getCorrectStrategy( player, dealer) ]) 
  }


  return (
    <>   
      <div className="strategy" data-testid="strategy">
        { selectionStrategy.map( (item) => 
              <button onClick={()=>handleSelectionStrategy(item)}>{item}</button>
          )
        } 
        
      </div>
    </>
  );
};

export default React.memo(Strategy); 