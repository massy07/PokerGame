import { cardState } from "./mazzo";
import { mazzo } from "./mazzo";


export const decks = (numberDeck:number):Array<cardState> => {
  const deck:Array<cardState> = []
  for(let i:number=0; i<numberDeck ;i++){
    deck.push( ...mazzo )
  }
  return deck;
}


export const getRandomInt = (max:number) => {
  return Math.floor(Math.random() * max);
}