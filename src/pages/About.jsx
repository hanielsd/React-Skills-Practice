import { Component } from 'react'
import EnterLeave from '../components/f-motion/EnterLeave'
import WhileHoverEffect from '../components/f-motion/Hover'
import EnterLeaveWithVariants from '../components/f-motion/Variants'
import RepeatAnimation from '../components/f-motion/Yoyo'
import QRCode from '../components/qr-code/QRCode'
class About extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = { company: 'Kadra Technologies' }
  }

  updateCompany = (event) => this.setState({ company: event.target.value })

  render() {
    console.log('render')

    return (
      <div className="space-y-4">
        <div className="p-2 border grid grid-cols-3 gap-2">
          <div className="">
            <div>{this.state.company}</div>
            <div>This is about page.</div>
            <div>
              <div>Company Name</div>
              <input
                type="text"
                className="outline-none bg-gray-100 py-1 px-2"
                value={this.state.company}
                onChange={this.updateCompany}
              />
            </div>
          </div>
          <div className="col-span-2">
            <QRCode />
          </div>
        </div>

        <EnterLeave />
        <WhileHoverEffect />
        <EnterLeaveWithVariants />
        <RepeatAnimation />
      </div>
    )
  }
  componentDidMount() {
    console.log('component did mount')
  }
  componentDidUpdate() {
    console.log('component did update')
  }
  componentWillUnmount() {
    console.log('component will unmount')
  }
}

export default About
