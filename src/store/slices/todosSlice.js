import { createSlice } from '@reduxjs/toolkit'

const todos = [
  { id: 1, task: 'Bring water' },
  { id: 2, task: 'Clean my home' },
]

export const todosSlice = createSlice({
  name: 'todos',
  initialState: todos,
  reducers: {
    addTodo: (todos, action) => {
      todos.push(action.payload)
    },
    removeTodo: (todos, action) => {
      todos = todos.filter(({ id }) => id !== action.payload.id)
    },
  },
})

export const { addTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer
