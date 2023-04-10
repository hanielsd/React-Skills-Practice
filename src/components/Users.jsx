import User from './User'

function Users() {
  const users = [
    {
      name: 'Haniel SD',
      role: 'Frontend Developer',
      stars: 4.5,
      totalReviewers: '2.4M',
    },
    {
      name: 'Yonas Hanilu',
      role: 'Fullstack Developer',
      stars: 4.8,
      totalReviewers: '2.7M',
    },
    {
      name: 'Haftom Cooper',
      role: 'Backend Developer',
      stars: 4.2,
      totalReviewers: '1.3M',
    },
  ]
  return (
    <div className="space-y-2">
      {users.map((user, index) => (
        <User key={index} index={index} user={user} />
      ))}
    </div>
  )
}

export default Users
