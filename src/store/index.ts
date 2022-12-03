import { combineReducers } from "redux"
import decksStoreSlice from './reducer/decksStore' 
import handsPlayersSlice from './reducer/handCardsPlayersStore' 

const allReducers = combineReducers({
  decks:decksStoreSlice,
  handsPlayers:handsPlayersSlice
})

export default allReducers