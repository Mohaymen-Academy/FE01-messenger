import ChatHeader from './ChatHeader/ChatHeader'
import Conversation from './Conversation/Conversation'
import MessageBox from './MessageBox/MessageBox'

interface MidSectionProps {}

export default function MidSection({}: MidSectionProps) {
  return (
    <div className="relative flex flex-1 flex-col">
      <ChatHeader />
      <div className="inset-0 flex flex-1 flex-col overflow-hidden bg-transparent bg-cover bg-bottom">
        <Conversation />
        <MessageBox />
      </div>
    </div>
  )
}
