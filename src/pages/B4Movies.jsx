import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getMovies, addMovie } from '../services/api/b4movies'
import { useRef } from 'react'

function B4Movies() {
  const { data, isLoading, isError, isFetching } = useQuery(
    ['movies'],
    getMovies,
    { staleTime: 5 * 1000, refetchInterval: 7 * 1000 }
    /**
     * according to the above config: a data is considered stale after 5 sec and the fetch api is called every 7 seconds
     */
  )

  if (isLoading) return <div>loading...</div>

  if (isError) return <div>error occured</div>

  const movies = data.data.results
  return (
    <div className="space-y-2">
      <div className="uppercase text-xl bg-blue-700 text-white p-2">
        B4App Movies
      </div>
      <div className="grid grid-cols-4 gap-2">
        <NewMovie />
        <div className="col-span-3 space-y-2">
          {isFetching && <div>Refreshing...</div>}
          {movies.map((movie) => (
            <Movie key={movie.objectId} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Movie({ movie }) {
  return (
    <div className="bg-gray-200 py-1 px-2 rounded">
      <div className="flex space-x-2 items-center justify-between">
        <div className="text-lg">{movie.title}</div>
        <div className="text-sm text-white bg-gray-700 px-2">{movie.genre}</div>
      </div>
      <div className="text-sm text-gray-700">{movie.description}</div>
    </div>
  )
}

function NewMovie() {
  const titleRef = useRef('')
  const genreRef = useRef('')
  const descriptionRef = useRef('')

  const queryClient = useQueryClient()
  const { mutate: addNewMovie, isLoading } = useMutation(addMovie, {
    onSuccess: () => {
      queryClient.invalidateQueries(['movies'])
    },
  })

  const resetForm = () => {
    titleRef.current.value = ''
    genreRef.current.value = ''
    descriptionRef.current.value = ''
  }

  const handleAdd = () => {
    let payload = {
      title: titleRef.current.value,
      genre: genreRef.current.value,
      description: descriptionRef.current.value,
    }

    addNewMovie(payload)
    resetForm()
  }
  return (
    <div className="space-y-2">
      <div className="uppercase font-medium text-gray-700">new movie</div>
      <div className="space-y-2">
        <input
          type="text"
          ref={titleRef}
          placeholder="Enter title"
          className="w-full outline-none bg-gray-300 py-1 px-2"
        />
        <input
          type="text"
          ref={genreRef}
          placeholder="Enter genre"
          className="w-full outline-none bg-gray-300 py-1 px-2"
        />
        <textarea
          ref={descriptionRef}
          placeholder="Enter description..."
          className="w-full outline-none bg-gray-300 py-1 px-2"
          rows={5}
        />
        <button
          className={
            'text-white py-1 px-2 rounded ' +
            (isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600')
          }
          disabled={isLoading}
          onClick={handleAdd}
        >
          Save movie
        </button>
      </div>
    </div>
  )
}

export default B4Movies
