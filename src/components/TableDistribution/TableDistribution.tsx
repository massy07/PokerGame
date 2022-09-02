import React, { FC } from 'react';
import { handCardsPlayerState } from '../../store/entities/handCardsPlayers'; 
import { Player } from '../Player';

// style
import './tableDistribution.scss';

interface TableDistributionProps {
  playerTable:Array<handCardsPlayerState>
}

const TableDistribution: FC<TableDistributionProps> = ({playerTable}) => { 
  
  return ( 
      <div className="tableDistribution" data-testid="tableDistribution">
        <div className="container-dealer" > 
          { playerTable.map( (item) => item.dealer &&
              <Player  dataPlayer={item} />  
            )
          } 
        </div>
        <div className="container-player" >
          { playerTable.map( (item) => !item.dealer &&
              <Player  dataPlayer={item} />  
            )
          } 
        </div>
      </div> 
  );
};

export default React.memo(TableDistribution); 
 
