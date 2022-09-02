import React, { FC } from 'react';
import { handCardsPlayerState } from '../../store/entities/handCardsPlayers';
import { HandCards } from '../HandCards';

// style
import './Player.scss';

interface PlayerProps { 
  dataPlayer:handCardsPlayerState
}

const Player: FC<PlayerProps> = ( {dataPlayer} ) => { 

const {
 // turnOn,
 // dealer,
  user,
  cardHand,
 // cardHandDouble,
 // valueHand, 
 // valueHandDouble 
} = dataPlayer

  return (
    <>   
      <div className="player" data-testid="player">
        <HandCards cardHand={cardHand} />
        <div className="player-info-container"> 
          <span className="player-name"><h1>{user}</h1></span>
        </div>
      </div>
    </>
  );
};

export default React.memo(Player); 