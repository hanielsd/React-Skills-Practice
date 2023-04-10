import { useState } from 'react'
import ComputedValue from '../components/contact/ComputedValue'
import DescEditor from '../components/contact/DescEditor'
import FCLC from '../components/contact/FCLC'
import HeadLine from '../components/contact/HeadLine'
import Hooks from '../components/contact/Hooks'
import RefUsage from '../components/contact/RefUsage'
import StateUsage from '../components/contact/StateUsage'
import TitleEditor from '../components/contact/TitleEditor'
import Watch from '../components/contact/Watch'

function Contact() {
  const [title, setTitle] = useState('React JS Tutorial By Haniel SD')
  const [description, setDesc] = useState('React JS Tutorial By Haniel SD')

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-2">
          <TitleEditor title={title} setter={(e) => setTitle(e.target.value)} />
          <DescEditor
            description={description}
            setter={(e) => setDesc(e.target.value)}
          />
        </div>
        <HeadLine title={title}>{description}</HeadLine>
      </div>
      <div>This is contact us page.</div>
      <FCLC>
        Open the chrome developer dev tools to see the functional component
        lifecycle in console log
      </FCLC>

      <StateUsage>Hello this is advanced state usage!</StateUsage>
      <RefUsage>Hello this is ref usage</RefUsage>
      <Watch>waiting a setter from useState to see its change</Watch>
      <ComputedValue>Working on with computed values</ComputedValue>
      <Hooks />
    </div>
  )
}

export default Contact
