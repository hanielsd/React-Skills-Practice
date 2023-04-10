function User({ index, user }) {
  return (
    <div
      className={
        index % 2 == 0
          ? 'bg-green-300 p-2 rounded space-y-1'
          : 'bg-gray-100 p-2 rounded space-y-1'
      }
    >
      <div className="font-bold">{user.name}</div>
      <div className="font-thin">{user.role}</div>
      <div className="flex space-x-2 items-center">
        <div>({user.stars})</div>
        <div>Reviewed by {user.totalReviewers} people.</div>
      </div>
    </div>
  )
}

export default User
