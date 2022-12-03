import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { deck, cardState } from "../entities/deck";


export const decks:Array<cardState>=[]

const decksStoreSlice = createSlice({
  name:'decks',
  initialState: decks,
  reducers:{
    setViewState:(state) => { console.log(state)  },
    setNewDecks:(state) =>{
      state=[]
      for( let i:number=0; i<6; i++){
        state.push( ...deck ) 
      }  
      return state;
    },
    setNumberDecks:(state, action:PayloadAction<number> ) => {
      let newDeck:Array<cardState>=[]
      for( let i:number=0; i<action.payload; i++){
        newDeck.push( ...deck )
      }
      return newDeck;
    }, 
    deleteCard:(state, action:PayloadAction<number> ) => {
      let newDeck = [...state]  
      newDeck.splice( action.payload , 1 ) 
      return newDeck
     },
    setResetCard:( state ) => {
      let newDeck:Array<cardState>=[]
      state = newDeck
      return state;
    }
  }
})


export const { setViewState, setNewDecks, deleteCard, setResetCard } = decksStoreSlice.actions 

export default decksStoreSlice.reducer