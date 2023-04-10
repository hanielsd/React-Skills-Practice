import { Component } from 'react'
class Greet extends Component {
  state = { firstName: 'Yonas', lastName: 'Hailug' }
  render() {
    return (
      <div>
        Hello, {this.state.firstName} {this.state.lastName}
      </div>
    )
  }
}

export default Greet
