import { createSlice, PayloadAction } from '@reduxjs/toolkit' 
import { cardState } from '../entities/deck'
import { handCardsPlayerState } from '../entities/handCardsPlayers'
import { resultValue } from '../utils/utils'
 

export const handsPlayers:Array<handCardsPlayerState>=[]

const handsPlayersSlice = createSlice({
  name:'handCardsPlayers',
  initialState: handsPlayers,
  reducers:{
    setPlayer:(state ) => {
      state=[ 
        { turnOn: false, dealer: false, user: ( 'player_1') , cardHand:[] ,  valueHand: 0 } ,
        { turnOn: false, dealer: true, user: 'dealer', cardHand:[], valueHand: 0}
      ] 
      console.log(state)
      return state;
    }, 
    setPlayerTable:(state, action:PayloadAction<number>) => {
      state = []   
      for( let i:number=0; i<action.payload ; i++){
        state.push( { turnOn:(i===0) , dealer: false, user: ( 'player_'+(i+1)) , cardHand:[] ,  valueHand: 0 } ) 
      } 
      state.push( { turnOn:false, dealer: true, user: 'dealer', cardHand:[], valueHand: 0})  
      return state
    }, 
    setPlayerHand:(state, action:PayloadAction<cardState> ) => { 
      let lookingPlayer:boolean=true 
      if( state.length>0  ){
        for( let i:number=0; i<state.length ; i++){ 
          if( state[i].turnOn && lookingPlayer ){
            state[i].cardHand.push( action.payload )   
            state[i].turnOn=false
            lookingPlayer=false
            if(state[i+1]){
              state[i+1].turnOn=true
            }else{
              state[0].turnOn=true
            }
            state[i].valueHand = resultValue( state[i].cardHand ) 
          }
        }
      }  
      return state 
    },
    setNextPlayer:(state, action:PayloadAction<cardState> ) => {
      return state 
     } 
  }
})
 

export const { setPlayer, setPlayerHand, setPlayerTable } = handsPlayersSlice.actions 

export default handsPlayersSlice.reducer