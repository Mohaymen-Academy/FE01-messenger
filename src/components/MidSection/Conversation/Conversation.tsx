import Message from '../Message/Message'
import SystemMessage from '../SystemMessage/SystemMessage'

interface ConversationProps {}

export default function Conversation({}: ConversationProps) {
  return (
    <div className="w-full max-w-xl flex-1 self-center">
      <div className="relative m-auto flex flex-col px-3 py-1">
        <SystemMessage text="Channel was created" />
        <SystemMessage text="May 6" />
        <Message message="سلام" mode="loading" self time="14:25" />
        <Message
          message="
            Use the bdaaajf above the editor to test on them"
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
