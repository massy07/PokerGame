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
      state=[]
      for( let i:number=0; i<action.payload; i++){
        state.push( ...deck )
      }
      return state;
    }, 
    deleteCard:(state, action:PayloadAction<number> ) => {
      let newDeck = [...state]  
      newDeck.splice( action.payload , 1 ) 
      return newDeck
     }
  }
})


export const { setViewState, setNewDecks, deleteCard } = decksStoreSlice.actions 

export default decksStoreSlice.reducer