import { createSlice } from '@reduxjs/toolkit'
import { boxQuizState } from '../entities/quizBox'
 
const arrayBoxQuiz:Array<boxQuizState>=[]

const arrayBoxQuizSlice = createSlice({
  name:'arrayBoxQuiz',
  initialState: arrayBoxQuiz,
  reducers:{
    setViewState:(state) => { console.log(state)  },
  }
})

export default arrayBoxQuizSlice.reducer