import ContactUs from './../components/ContactUs'
import Counter from './../components/Counter'
import Greet from './../components/Greet'
import ConditionalGreeting from './../components/greetings/ConditionalGreeting'
import Mailbox from './../components/Mailbox'
import Numbers from './../components/Numbers'
import Users from './../components/Users'
import Welcome from './../components/Welcome'
function Home() {
  return (
    <div className="p-2 space-y-2">
      <div className="bg-green-500 p-2 text-white">
        <div className="text-lg font-bold uppercase">Vite + React</div>
        <div>Hello this is haniel sd working on react project</div>
      </div>

      <div className="bg-gray-100 p-2">
        <div>Binding attribute</div>
        <Welcome name={'Halefom' + ' ' + 'Alemu'} />
      </div>

      <Greet />
      <Counter />

      <div className="space-y-2 bg-gray-100 p-2">
        <div>Conditional Rendering</div>
        <div>user signed in</div>
        <ConditionalGreeting signedIn={true} />
      </div>

      <Mailbox
        unreadMessages={['Friend request accepted', 'Someone liked your post']}
      />

      <Numbers />
      <Users />

      <ContactUs />
    </div>
  )
}

export default Home
