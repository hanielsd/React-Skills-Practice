import { useReducer } from 'react'

const initial = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initial
    default:
      state
  }
}

export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initial)
  return (
    <div className="flex space-x-2 items-center">
      <div
        className="px-3 py-1 rounded cursor-pointer transform active:scale-105 text-sm bg-red-600 text-white"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        --
      </div>
      <div>{state.count}</div>
      <div
        className="px-3 py-1 rounded cursor-pointer transform active:scale-105 text-sm bg-green-600 text-white"
        onClick={() => dispatch({ type: 'increment' })}
      >
        ++
      </div>
    </div>
  )
}
