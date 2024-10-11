import { useContext } from 'react'
import { AuthContext } from './AuthProvider'

export default function AuthIntro() {
  const { isAuth, setAuth } = useContext(AuthContext)

  if (!isAuth)
    return (
      <div className="">
        <div>Log in first</div>
        <div className="flex">
          <div
            className="px-2 py-1 text-sm bg-gray-200 rounded cursor-pointer"
            onClick={() => setAuth(true)}
          >
            login
          </div>
        </div>
      </div>
    )

  return (
    <div className="">
      <div>Welcome back!</div>
      <div className="flex">
        <div
          className="px-2 py-1 text-sm bg-gray-200 rounded cursor-pointer"
          onClick={() => setAuth(false)}
        >
          log out
        </div>
      </div>
    </div>
  )
}
