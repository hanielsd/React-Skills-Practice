import { useState, useEffect } from 'react'

function Watch({ children }) {
  const [count, setCount] = useState(0)

  /**
   * to watch count do the following
   */
  useEffect(() => {
    console.log('useEffect watching count: ' + count)
    return () => console.log('Cleanup')
  }, [count])

  const update = (step) => {
    /**
     * setCount is asynchronous
     * it will not update right away
     * the logger will not show the lates count
     * to see the latest change we should have to watch for the count state
     */
    setCount((prevCount) => prevCount + step)
    console.log('count: ', count) //not latest huh
    /**
     * Naming convension: It’s common to name the updater function argument by
     * the first letters of the corresponding state variable
     * setCount((c) => c + step)
     * setEnabled(e => !e);
     * setLastName(ln => ln.reverse());
     * setFriendCount(fc => fc * 2);
     */
  }
  return (
    <div className="p-2 border border-blue-700">
      <div>{children}</div>
      <div>
        <div className="text-2xl">{count}</div>
        <div className="flex space-x-2">
          <button
            className="bg-gray-400 uppercase px-2 py-1 rounded"
            onClick={() => update(2)}
          >
            increment
          </button>
          <button
            className="bg-gray-400 uppercase px-2 py-1 rounded"
            onClick={() => update(2)}
          >
            decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export default Watch
