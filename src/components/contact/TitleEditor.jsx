function TitleEditor({ title, setter }) {
  return (
    <input className="w-full" type="text" value={title} onChange={setter} />
  )
}

//setting default prop method #2
TitleEditor.defaultProps = {
  title: 'Default title',
}

export default TitleEditor
