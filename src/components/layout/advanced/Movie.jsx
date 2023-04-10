import { useParams } from 'react-router-dom'
function Movie() {
  let { id } = useParams()
  return <div>Movie {id}</div>
}

export default Movie
