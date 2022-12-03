import { cardState } from "./deck";

export interface  handCardsPlayerState {  
  turnOn:boolean,
  dealer: boolean,
  user: string ,
  cardHand:Array<cardState> ,
  cardHandDouble?:Array<cardState> ,
  valueHand: number, 
  valueHandDouble?: number, 
}

export const startDealer:handCardsPlayerState = { 
  turnOn: false, 
  dealer: true, 
  user: 'dealer', 
  cardHand:[], 
  valueHand: 0
}
 
export const startPlayer:handCardsPlayerState = {
  turnOn: false, 
  dealer: false, 
  user: 'player_0' , 
  cardHand:[] ,  
  valueHand: 0 
}
