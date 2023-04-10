import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
} from './../store/slices/counterSlice'

function SmartCounter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="space-y-2">
      <div className="text-lg font-bold uppercase">
        SmartCounter with redux and redux toolkit
      </div>

      <div>
        <div className="flex space-x-2 items-center">
          <button
            className="py-1 px-4 bg-green-600 text-white hover:opacity-75"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="py-1 px-4 bg-green-600 text-white hover:opacity-75"
            onClick={() => dispatch(incrementByAmount(2))}
          >
            Increment +2
          </button>
          <div className="text-2xl">{count}</div>
          <button
            className="py-1 px-4 bg-red-600 text-white hover:opacity-75"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export default SmartCounter
