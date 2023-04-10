import { Component } from 'react'
import RInput from './controlled/RInput'
import RTextarea from './controlled/RTextarea'
class ContactUs extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    email: '',
    fullName: '',
    comment: '',
  }
  handleChange = (event) => {
    let key = event.target.name
    let value = event.target.value
    this.setState({ [key]: value })
  }
  render() {
    return (
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-3 bg-blue-700 text-white font-bold p-2">
          React Forms
        </div>
        <div className="bg-gray-100 p-2 py-4 rounded">
          <RInput
            label="Full Name"
            name="fullName"
            value={this.state.fullName}
            setter={this.handleChange}
          />
          <RInput
            label="Email"
            name="email"
            value={this.state.email}
            setter={this.handleChange}
          />
          <RTextarea
            label="Comment"
            name="comment"
            value={this.state.comment}
            setter={this.handleChange}
          />
        </div>

        <div className="bg-gray-100 p-2 py-4 rounded space-y-2">
          <div>
            <div>Full name</div>
            <div>{this.state.fullName}</div>
            <div>{this.state.fullName}</div>
          </div>

          <div>
            <div>Email</div>
            <div>{this.state.email}</div>
          </div>

          <div>
            <div>Comment ({this.state.comment.length})</div>
            <div>{this.state.comment}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUs
