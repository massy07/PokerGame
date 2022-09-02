import React, { FC } from 'react';
import { handCardsPlayerState } from '../../store/entities/handCardsPlayers';

// style
import './Dealer.scss';

interface DealerProps {
  dataDealer:handCardsPlayerState
}

const Dealer: FC<DealerProps> = ({dataDealer}) => { 

  // console.log(dataDealer,'dataDealer');

  return (
    <>  
      <div className="dealer" data-testid="dealer">
        Dealer Component
      </div>
    </>
  );
};

export default React.memo(Dealer); 