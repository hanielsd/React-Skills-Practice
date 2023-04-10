import { useEffect } from 'react'
function FCLC({ children }) {
  useEffect(() => console.log('component mounted'), [])

  return (
    <div className="border p-2 border-blue-700">
      <div className="text-lg text-blue-700">
        Functional component: lifecycle
      </div>
      <div>{children}</div>
    </div>
  )
}

export default FCLC
