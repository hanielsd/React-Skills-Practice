import { useNavigate } from 'react-router-dom'
function NotFound() {
  const navigate = useNavigate()
  // navigate(path) to go to path
  // navigate(-1) to go back
  return (
    <div>
      <div>Oops! Page Not found</div>
      <div
        className="inline-block py-1 px-2 bg-gray-200 cursor-pointer hover:opacity-75"
        onClick={() => navigate('/')}
      >
        Go home
      </div>
    </div>
  )
}

export default NotFound
