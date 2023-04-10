import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './../store/slices/todosSlice'
function Todos() {
  const todos = useSelector((state) => state.todos)
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    dispatch(addTodo({ id: todos.length + 1, task: todo }))
  }

  return (
    <div>
      <div>Todo list</div>
      <div className="flex space-x-2">
        <input
          type="text"
          className="bg-gray-200 p-2 outline-none"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 py-1 rounded"
          onClick={handleAddTodo}
        >
          Add todo
        </button>
      </div>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.task}</div>
        ))}
      </div>
    </div>
  )
}

export default Todos
