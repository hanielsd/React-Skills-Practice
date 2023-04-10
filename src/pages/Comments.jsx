import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getComments, addComment } from '../services/api/comments'
import { useRef } from 'react'

function Comment({ comment }) {
  return (
    <div className="bg-gray-200 p-2 rounded space-y-2">
      <div>
        <div className="text-lg">{comment.name}</div>
        <div className="text-sm font-sans">{comment.email}</div>
      </div>
      <div className="text-xs">{comment.body}</div>
    </div>
  )
}

function NewComment() {
  const nameRef = useRef('')
  const bodyRef = useRef('')

  // Access the client
  const queryClient = useQueryClient()

  // Mutations
  const { mutate: addNewComment, isLoading } = useMutation(addComment, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('comments')
    },
  })

  const resetForm = () => {
    nameRef.current.value = ''
    bodyRef.current.value = ''
  }

  const handleAdd = () => {
    let payload = {
      name: nameRef.current.value,
      body: bodyRef.current.value,
    }

    addNewComment(payload)
    resetForm()
  }
  return (
    <div className="space-y-2">
      <div className="uppercase font-medium text-gray-700">new comment</div>
      <div className="space-y-2">
        <input
          type="text"
          ref={nameRef}
          placeholder="Enter name"
          className="w-full outline-none bg-gray-300 py-1 px-2"
        />
        <textarea
          ref={bodyRef}
          placeholder="Enter comment..."
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
          add comment
        </button>
      </div>
    </div>
  )
}

function Comments() {
  // Queries
  const { data, isLoading, isError } = useQuery('comments', getComments)

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error occured</div>

  return (
    <div className="grid grid-cols-4 gap-2">
      <NewComment />

      <div className="col-span-3">
        <div className="text-xl">Comments ({data.data.length})</div>
        <div className="grid grid-cols-3 gap-2">
          {data.data.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Comments
