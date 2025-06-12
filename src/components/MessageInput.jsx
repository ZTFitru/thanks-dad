const MessageInput = ({ message, setMessage }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">Your Message</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        maxLength={300}
        className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none bg-white"
        placeholder="Say a few kind words so Pops doesn’t think you forgot him... again."
      />
      <p className="text-xs text-gray-500 text-right">{message.length}/300</p>
    </div>
  )
}

export default MessageInput;