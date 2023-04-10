import { useState } from 'react'

function getInitialTitle() {
  console.log('getInitialTitle')
  return 'Initial title'
}
function getInitialTitle2() {
  console.log('getInitialTitle2')
  return 'Initial title2'
}

function StateUsage({ children }) {
  /**
   * useState will assign the initial value 4 everytime the component rerenders
   * useState accepts both expression and function that returns an expression
   * if you use the function version, it will only be called only once
   */
  const [count, setCount] = useState(4)

  /**
   * this is not function version because the function is called, not passed as it is
   * getInitialTitle() will return 'Initial title'
   * therefore the next useState will set intitial title everytime the component re-renders
   */
  const [title, setTitle] = useState(getInitialTitle())

  /**
   * in here we provided the function version,
   * therfore useState will set the initial title only once
   * this is recommended to optimize performance
   * usecases:
   * 1. it demands to execute logics that is complex and slow computation to get the initial value
   * 2. the initial value is already known no need to repeat again
   */
  const [title2, setTitle2] = useState(getInitialTitle2)

  /**
   * If your logic depends on previous state value then use the function
   * version of the setter
   */

  /**
   * useState is different for managing objects when compared to class component state management
   */
  const [user, setUser] = useState({
    username: 'hanielsd',
    email: 'hanielsd@gmail.com',
  })

  /**
   * this is the best way to manage state in functional component
   * instead of objects
   */
  const [username, setUsername] = useState('gechogucci')
  const [email, setEmail] = useState('gechogucci@gmail.com')
  const increment = () => setCount((prevCount) => prevCount + 1)

  /**
   * in class component it would have been easier
   * we can do as follows
   * setUser({username: ''}) No need to specify the rest obj
   */
  const resetUsername = () => setUser({ ...user, username: '' })
  const resetUsername2 = () => setUsername('')
  return (
    <div className="p-2 border border-blue-700 space-y-2">
      <div className="text-lg">{children}</div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <div>
        <div>user object</div>
        <div>user.username: {user.username}</div>
        <div>user.email: {user.email}</div>
        <button onClick={resetUsername}>reset user.username</button>
      </div>

      <div>
        <div>individual state</div>
        <div>username: {username}</div>
        <div>email: {email}</div>
        <button onClick={resetUsername2}>reset username</button>
      </div>
    </div>
  )
}

export default StateUsage
