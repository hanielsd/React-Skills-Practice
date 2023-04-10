function RTextarea({ label, value, name, setter }) {
  return (
    <div className="w-full space-y-1">
      <div>{label}</div>
      <textarea
        name={name}
        value={value}
        onChange={setter}
        className="py-1 px-2 outline-none text-lg rounded w-full"
      />
    </div>
  )
}

export default RTextarea
