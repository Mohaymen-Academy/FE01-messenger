import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { storeStateTypes } from '@/types/types'
import { ChatListDataService } from '@/services/dataService'
import { UISlice } from '@/redux/slices/UISlice'
import { chatBoxType } from '@/redux/slices/ChatListSlice/ChatListSlice'
import { setActiveChatService } from '@/services/activeService'
import ChatBox from '../ChatBox'

export default function ChatList() {
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
  useEffect(() => {
    ChatListDataService()
    // const interval = setInterval(() => ChatListDataService(), 3000)
    // return () => {
    //   clearInterval(interval)
    // }
  }, [])
  const chatBoxOnClick = useCallback(
    (id: number, type: string, profile: chatBoxType) => {
      // console.log('open chat box')
      dispatch(UISlice.actions.openMidColumn())
      setActiveChatService(id, type, profile)
      // dispatch(ActiveChatSlice.actions.setActiveUser({ id, type, profile }))
      // console.log('chatbox id:', id)
      // createChatService(id.toString())
      // dispatch(ChatListSlice.actions.setActive({ id }))
      // dispatch(SearchSlice.actions.setActive({ id }))
    },
    []
  )

  // ChatListDataService()
  // console.log(typeof chatBoxes)

  // console.log(chatBoxes)
  return (
    <div className="no-scrollbar relative mt-2 h-0 grow cursor-pointer overflow-x-hidden">
      <div className="flex h-screen w-full flex-col px-2">
        {chatBoxes.map(item => {
          console.log(chatListCat, item.type)
          if (
            item.type == chatListCat?.chatList ||
            chatListCat?.chatList == 'all'
          )
            return (
              <>
                <ChatBox
                  unReadMessage={item.unReadMessage}
                  seen={item.seen}
                  senderName={item.name}
                  lastMessageTime={item.lastMessageTime}
                  online={item.online}
                  lastMessageText={item.lastMessageText}
                  img={item.image}
                  id={item.id}
                  active={item.id == activeChat}
                  onClick={() => chatBoxOnClick(item.id, item.type, item)}
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
