import { useState } from 'react'
function ComputedValue({ children }) {
  const [firstName, setFirstName] = useState('Halefom')
  const [lastName, setLastName] = useState('Alemu')
  const fullName = firstName + ' ' + lastName // computed value

  return (
    <div className="p-2 border border-blue-700">
      <div>{children}</div>
      <div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>{fullName}</div>
      </div>
    </div>
  )
}

export default ComputedValue
