import ChatHeader from './ChatHeader/ChatHeader'
import Conversation from './Conversation/Conversation'
import MessageBox from './MessageBox/MessageBox'

interface MidSectionProps {
  active: boolean
}

export default function MidSection({ active }: MidSectionProps) {
  return (
    <div
      style={{ display: active ? 'flex' : 'none' }}
      className="flex flex-1 flex-col bg-chatBg/40 backdrop-blur-[2px] max-sm:absolute max-sm:h-full max-sm:w-full"
    >
      <ChatHeader />
      <div className="flex h-0 flex-1 flex-col bg-transparent">
        <Conversation />
        <MessageBox />
      </div>
    </div>
  )
}
