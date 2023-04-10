import React, { Component } from 'react'
class Counter extends Component {
  state = { counter: 10 }

  increment = () => this.setState({ counter: this.state.counter + 1 })
  decrement = () => this.setState({ counter: this.state.counter - 1 })
  render() {
    return (
      <div className="bg-gray-100 p-2 rounded space-y-2">
        <div>The counter: setting state</div>
        <div className="space-x-2">
          <button
            className="p-1 px-4 bg-slate-300 rounded"
            onClick={this.increment}
          >
            Increment
            <span className="text-green-700"> ({this.state.counter})</span>
          </button>

          <button
            className="p-1 px-4 bg-slate-300 rounded"
            onClick={this.decrement}
          >
            Decrement
            <span className="text-red-700"> ({this.state.counter})</span>
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
