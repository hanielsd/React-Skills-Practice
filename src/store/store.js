import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import todosSlice from './slices/todosSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosSlice,
  },
})
