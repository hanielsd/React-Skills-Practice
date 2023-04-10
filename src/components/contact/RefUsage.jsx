import { useRef } from 'react'
function RefUsage({ children }) {
  /**
   * Stop using useState when you don't actually need state
   * in this scenario, the email and password don't need to be reactive
   * and they are used only in the submit handler
   * they are not used in the render
   * we don't care what the values of these variables are as we type in
   * we only want to use it in the handler
   * instead of tracking the states and causing re-render every time I type in a character
   * we should instead save them in ref using useRef
   */
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const handleSubmit = () => {
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
  }
  return (
    <div className="p-2 border border-blue-700 space-y-2">
      <div>{children}</div>
      <div className="flex flex-col space-y-2 w-1/4">
        <input
          type="text"
          ref={emailRef}
          className="bg-gray-300 outline-none"
        />
        <input
          type="password"
          ref={passwordRef}
          className="bg-gray-300 outline-none"
        />
        <button className="bg-blue-700 text-white" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default RefUsage
