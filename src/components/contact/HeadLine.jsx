//setting default prop method #1
function HeadLine({ title = 'Default title', children }) {
  return (
    <div>
      <div className="text-lg">{title}</div>
      <div className="text-sm">{children}</div>
    </div>
  )
}

export default HeadLine
