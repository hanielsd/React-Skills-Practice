import GuestGreeting from './GuestGreeting'
import UserGreeting from './UserGreeting'

function ConditionalGreeting(props) {
  const signedIn = props.signedIn
  if (signedIn) return <UserGreeting />
  return <GuestGreeting />
}

export default ConditionalGreeting
