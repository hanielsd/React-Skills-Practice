function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  return (
    <div className="bg-gray-100 p-2">
      <div>Inline If with Logical && Operator</div>
      <div className="text-lg">Hello!</div>
      {unreadMessages.length > 0 && (
        <div className="text-lg">
          You have {unreadMessages.length} unread messages.
        </div>
      )}
    </div>
  )
}

export default Mailbox
