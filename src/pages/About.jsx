import { Component } from 'react'
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
      <div>
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
