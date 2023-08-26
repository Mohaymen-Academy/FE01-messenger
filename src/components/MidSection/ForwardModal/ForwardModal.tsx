import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import ChatBox from '@/components/RightSection/ChatBox/ChatBox'
import { storeStateTypes } from '@/types/types'
import { ChatListDataService } from '@/services/dataService'
import { UISlice } from '@/redux/slices/UISlice'
import { chatBoxType } from '@/redux/slices/ChatListSlice/ChatListSlice'
import {
  setActiveChatService,
  stopUpdatingChat,
} from '@/services/activeService'
import { forwardMessage } from '@/api/message'
import { forwardMessageService } from '@/services/messageService'

interface ForwardModalProps {
  messageId: string
  onClose: () => void
}

export default function ForwardModal({
  messageId,
  onClose,
}: ForwardModalProps) {
  const dispatch = useDispatch()
  const chatBoxes = useSelector(
    (state: storeStateTypes) => state.chatList.chatBoxes
  )
  const activeChat = useSelector(
    (state: storeStateTypes) => state.activeChat.id
  )
  const chatListCat = useSelector(
    (state: storeStateTypes) => state.UI.chatListCat
  )
  const chatBoxOnClick = useCallback(
    (chatId: string) => {
      forwardMessageService(messageId, chatId)
    },
    [dispatch]
  )

  return (
    <div className="no-scrollbar relative mt-2 h-0 max-w-sm grow cursor-pointer overflow-x-hidden">
      <div className="flex h-screen w-full flex-col px-2">
        {chatBoxes.map(item => {
          // console.log(chatListCat, item.type)
          if (
            item.type == chatListCat?.chatList ||
            chatListCat?.chatList == 'all'
          )
            return (
              <>
                <ChatBox
                  key={item.id}
                  unReadMessage={item.unReadMessage}
                  seen={item.seen}
                  senderName={item.name}
                  lastMessageTime={item.lastMessageTime}
                  online={item.online}
                  lastMessageText={item.lastMessageText}
                  img={item.image}
                  id={item.id}
                  active={item.id == activeChat}
                  onClick={() => {
                    chatBoxOnClick(item.id.toString())
                    onClose()
                  }}
                  type={item.type}
                />
              </>
            )
          return ''
        })}
      </div>
    </div>
  )
}
