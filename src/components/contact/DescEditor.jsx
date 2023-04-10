function DescEditor({ description, setter }) {
  //setting default prop method #3
  description = description || 'Default description'
  return (
    <textarea
      className="w-full"
      rows={2}
      value={description}
      onChange={setter}
    ></textarea>
  )
}

export default DescEditor
