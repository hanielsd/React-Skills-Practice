function Icon({ id, size = 16, ...props }) {
  return (
    <svg width={size + 'px'} {...props}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  )
}
export default Icon
