function Numbers() {
  const numbers = [1, 2, 3, 4, 5, 6]
  const listItems = numbers.map((number) => (
    <div key={number}>Number: {2 * number}</div>
  ))
  return <ul className="bg-gray-100 p-2 rounded space-y-2">{listItems}</ul>
}

export default Numbers
