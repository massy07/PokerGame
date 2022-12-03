import { cardState } from "../entities/deck"  

export const resultValue = ( ArrayCard: Array<cardState>): number  => { 
  let valueResult = 0
  let findAce :boolean = ArrayCard.filter( item => item.valueCard === 1 ).length ===1

  for( let i:number=0; i<ArrayCard.length ; i++ ){    
    valueResult = ArrayCard[i].valueCard + valueResult  
    if( findAce ){
      valueResult = 10 + valueResult 
      findAce = false
    }
  } 
  return valueResult
}

export const getRandomInt = (max:number) => {
  return Math.floor(Math.random() * max);
}
 