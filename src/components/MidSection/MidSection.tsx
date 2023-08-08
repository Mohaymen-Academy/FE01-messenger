import ChatHeader from './ChatHeader/ChatHeader'
import Conversation from './Conversation/Conversation'
import MessageBox from './MessageBox/MessageBox'

interface MidSectionProps {}

export default function MidSection({}: MidSectionProps) {
  return (
    <div className="relative flex w-0 flex-1 flex-col">
      <ChatHeader />
      <div className="inset-0 flex flex-1 flex-col bg-transparent">
        <Conversation />
        <MessageBox />
      </div>
    </div>
  )
}
