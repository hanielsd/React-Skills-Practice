import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Produts extends Component {
  state = {
    products: ['Pants (2)', 'Laptops (5)', 'Speakers (18)', 'Shoes (23)'],
  }
  render() {
    return (
      <div className="p-2 grid grid-cols-4 gap-2">
        {this.state.products.map((product, index) => (
          <Link
            key={index}
            className="bg-gray-100 py-1 px-2 rounded cursor-pointer hover:opacity-75"
            to={'/products/' + (index + 1)}
            state={product}
          >
            {product}
          </Link>
        ))}
      </div>
    )
  }
}

export default Produts
