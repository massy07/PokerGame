import React, { useState } from 'react';   
import { useSelector, useDispatch  } from  'react-redux';    
import { TitlePage } from '../../components/TitlePage';
import { deleteCard, setNewDecks } from '../../store/reducer/decksStore'; 
import { setPlayerHand, setPlayerTable } from '../../store/reducer/handCardsPlayersStore'; 
import { cardState } from '../../store/entities/deck';  
import { rootState } from '../..';  
import { handCardsPlayerState } from '../../store/entities/handCardsPlayers';
import { getRandomInt } from '../../store/utils/utils';
import { TableDistribution } from '../../components/TableDistribution';
import { Strategy } from '../../components/Strategy';

// styles
import './playStrategy.scss';
import { ViewStrategyResult } from '../../components/ViewStrategyResult';
import { ImageView } from '../../components/ImageView';

interface PlayStrategyProps {  }
 
const PlayStrategy: React.FC<PlayStrategyProps> = () => {  
 
  const dispatch = useDispatch(); 
  const decks = useSelector<rootState,Array<cardState>>(  state  => state.decks  ) ;  
  const playerTable = useSelector<rootState,Array<handCardsPlayerState>>(  state  => state.handsPlayers  ) ;
  const [ strategyShow, setStrategyShow ] = useState(false)  
  const [ showHelp, setShowHelp ] = useState(true)  
  const [ resultStrategy, setResultStrategy  ] = useState<string[]>([])

 
  const startGame = () => {
    setResultStrategy([])
    setStrategyShow(true)
    dispatch(setNewDecks())  
    dispatch( setPlayerTable(1)) 
  }
  
  const cardDistribution = () => {  
    setStrategyShow(false)
    for( let i:number=0; i<3 ; i++){ 
      takeCard()
    }
  }

  const takeCard = () => { 
    const positionCard = getRandomInt(decks.length) 
    dispatch( setPlayerHand( decks[positionCard] ) ) 
    dispatch( deleteCard(positionCard) )    
  } 

  const nextHands = ()=> { 
    setResultStrategy([])
    setStrategyShow(true)
    dispatch( setPlayerTable(1)) 
    cardDistribution()
  }
 
  const viewResult = ( selectResult:Array<string> ) => {
    setResultStrategy(selectResult) 
  }
  

 
  return (
    <div className='pg-playStrategy'>     
      <TitlePage title='PlayStrategy' />
        <div className='playStrategy-container'>
          <div className='box-help'> 
            <button onClick={()=>setShowHelp(!showHelp)}>Show Help</button>
            { showHelp  && <ImageView imageCard={'strategy.png'} nameCard={'strategy.png'} className={'strategy-image'} />}
          </div>
          <div className='box-game'> 
          {!strategyShow && <TableDistribution playerTable={playerTable} /> }
          { strategyShow && <button className='cardDistribution' onClick={cardDistribution} >take card</button>} 
          { (decks.length > 0 && !strategyShow ) && 
            <div>
              <Strategy player={playerTable[0]} dealer={playerTable[1]} viewResult={viewResult} />
            </div>
            }
          { (decks.length<=0 && !strategyShow ) && <button onClick={startGame}>Start Game</button>   }
            <ViewStrategyResult resultStrategy={resultStrategy} /> 
            <button className={ 'next-hand-game' + (resultStrategy.length>0 ?' show':' hide'  ) } onClick={nextHands} > NEXT HANDS </button>
          </div> 
        </div>
    </div>
  );
};

 
export default React.memo(PlayStrategy);

