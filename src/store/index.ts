import { combineReducers } from "redux"
import decksStoreSlice from './reducer/decksStore'

const allReducers = combineReducers({
  decks:decksStoreSlice
})

export default allReducers