import { useSearchParams } from 'react-router-dom'
function Movies() {
  const [qs, setQs] = useSearchParams({ total: 5 })
  let initial = qs.get('total')
  return (
    <div>
      <div>all movies (total of {initial})</div>
      <input
        type="number"
        className="outline-none bg-gray-100 py-1 px-2 rounded"
        value={initial}
        onChange={(event) => setQs({ total: event.target.value })}
      />
    </div>
  )
}

export default Movies
