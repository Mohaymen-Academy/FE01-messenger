import { useSelector } from 'react-redux'
import { activeChatSelectors } from '@/redux/slices/ActiveChatSlice'
import ChatHeader from './ChatHeader/ChatHeader'
import Conversation from './Conversation/Conversation'
import MessageBox from './MessageBox/MessageBox'

interface MidSectionProps {
  active: boolean
}

export default function MidSection({ active }: MidSectionProps) {
  const activeChat = useSelector(activeChatSelectors.ActiveChat)
  return (
    <div
      style={{ display: active ? 'flex' : 'none' }}
      className="flex flex-1 flex-col max-md:absolute max-md:h-full max-md:w-full"
    >
      {activeChat.id > 0 && (
        <>
          <ChatHeader />
          <div className="flex h-0 flex-1 flex-col bg-transparent">
            <Conversation />
            <MessageBox />
          </div>
        </>
      )}
    </div>
  )
}
