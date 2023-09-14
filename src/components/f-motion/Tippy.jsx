export default function Tippy({ trigger, children }) {
  // const [showContent,setShowContent]
  return (
    <div>
      <div>{trigger}</div>
      <div className="relative">
        <div className="top-0 right-0">{children}</div>
      </div>
    </div>
  )
}
