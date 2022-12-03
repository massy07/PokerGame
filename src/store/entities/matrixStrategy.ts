import { handCardsPlayerState } from "../entities/handCardsPlayers";

export const selectionStrategy:string[] = [ 'HIT', 'STAND', 'DOUBLE', 'SPLIT', 'SU/HIT', 'SPLIT/HIT']


export const matrixNumber:string[][] = [
  ['HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT'],
  ['HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT'],
  ['HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT'],
  ['HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT'],
  ['HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT'],
  ['HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT'], 
  ['HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT'], 
  ['HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT'], 
  ['HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT','HIT'], 
  ['HIT','DOUBLE','DOUBLE','DOUBLE','DOUBLE','HIT','HIT','HIT','HIT','HIT'],
  ['DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','HIT','HIT'],
  ['DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','HIT'],
  ['HIT','HIT','STAND','STAND','STAND','HIT','HIT','HIT','HIT','HIT'],
  ['STAND','STAND','STAND','STAND','STAND','HIT','HIT','HIT','HIT','HIT'],
  ['STAND','STAND','STAND','STAND','STAND','HIT','HIT','HIT','HIT','HIT'],
  ['STAND','STAND','STAND','STAND','STAND','HIT','HIT','HIT','SU/HIT','HIT'],
  ['STAND','STAND','STAND','STAND','STAND','HIT','HIT','SU/HIT','SU/HIT','SU/HIT'],
  ['STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND'],
  ['STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND'],
  ['STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND'],
  ['STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND'],
  ['STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND']
]  

export const matrixAce:string[][] = [
  ['HIT','HIT','HIT','DOUBLE','DOUBLE','HIT','HIT','HIT','HIT','HIT'], 
  ['HIT','HIT','HIT','DOUBLE','DOUBLE','HIT','HIT','HIT','HIT','HIT'], 
  ['HIT','HIT','DOUBLE','DOUBLE','DOUBLE','HIT','HIT','HIT','HIT','HIT'], 
  ['HIT','HIT','DOUBLE','DOUBLE','DOUBLE','HIT','HIT','HIT','HIT','HIT'], 
  ['HIT','DOUBLE','DOUBLE','DOUBLE','DOUBLE','HIT','HIT','HIT','HIT','HIT'], 
  ['STAND','DOUBLE','DOUBLE','DOUBLE','DOUBLE','STAND','STAND','HIT','HIT','HIT'], 
  ['STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND'],
  ['STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND'],
  ['STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND']
]  

export const matrixDouble:string[][] = [
  ['SPLIT/HIT','SPLIT/HIT','SPLIT','SPLIT','SPLIT','SPLIT','HIT','HIT','HIT','HIT'], 
  ['SPLIT/HIT','SPLIT/HIT','SPLIT','SPLIT','SPLIT','SPLIT','HIT','HIT','HIT','HIT'],  
  ['HIT','HIT','HIT','SPLIT/HIT','SPLIT/HIT','HIT','HIT','HIT','HIT','HIT'],  
  ['DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','DOUBLE','HIT','HIT'],  
  ['SPLIT/HIT','SPLIT','SPLIT','SPLIT','SPLIT','HIT','HIT','HIT','HIT','HIT'], 
  ['SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','HIT','HIT','HIT','HIT'],  
  ['SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','SPLIT'],  
  ['SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','STAND','SPLIT','SPLIT','STAND','STAND'], 
  ['STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND','STAND'],
  ['SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','SPLIT','SPLIT']
]  

export const getCorrectStrategy = (player:handCardsPlayerState, dealer:handCardsPlayerState ):string => {
  let findAce :boolean = player.cardHand.filter( item => item.valueCard === 1 ).length === 1
  let findDouble :boolean = player.cardHand[0].number === player.cardHand[1].number 
  let strategy :string = ''  
  if(findAce){ 
    strategy = matrixAce[(player.valueHand-13)][(dealer.valueHand-2 )]
  } else if(findDouble){
    strategy = matrixDouble[(player.valueHand/2)-2][(dealer.valueHand-2 )]
  } else {
    strategy = matrixNumber[player.valueHand][(dealer.valueHand-2 )]
  } 
  return strategy
}
