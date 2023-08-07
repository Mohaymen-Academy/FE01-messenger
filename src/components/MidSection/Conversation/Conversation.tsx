import Message from '../Message/Message'

interface ConversationProps {}

export default function Conversation({}: ConversationProps) {
  return (
    <div className="w-full max-w-xl flex-1 self-center">
      <div className="relative m-auto flex flex-col px-3 py-1">
        <div className="mx-0 my-1 self-center rounded-full border border-gray-200 bg-white px-2 py-1 text-sm text-gray-700 shadow">
          Channel was created
        </div>
        <div className="mx-0 my-1 self-center rounded-full border border-gray-200 bg-white px-2 py-1 text-sm text-gray-700  shadow">
          May 6
        </div>
        <Message message="سلام" mode="loading" self time="14:25" />
        <Message
          message="
            Use the buttons above the editor to test on them"
          mode="seen"
          time="14:25"
        />
        <Message
          message="
            به به"
          mode="sent"
          time="14:26"
        />
      </div>
    </div>
  )
}
