import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { storeStateTypes } from '@/types/types'
import { ChatListDataService } from '@/services/dataService'
import ChatBox from '../ChatBox'

export default function ChatList() {
  const chatBoxes = useSelector(
    (state: storeStateTypes) => state.chatList.chatBoxes
  )
  useEffect(() => {
    const interval = setInterval(() => ChatListDataService(), 3000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  // ChatListDataService()
  // console.log(typeof chatBoxes)

  // console.log(chatBoxes)
  return (
    <div className="relative mb-4 mt-2 h-[calc(100%_-_40px)] cursor-pointer overflow-x-hidden">
      <div className="flex h-screen w-full flex-col overflow-y-auto px-2">
        {chatBoxes.map(item => (
          <>
            <ChatBox
              unReadMessage={item.unReadMessage}
              seen={item.seen}
              senderName={item.name}
              lastMessageTime={item.lastMessageTime}
              online={item.online}
              textMessage={item.textMessage}
              seenEnable={item.seenEnable}
              img={item.image}
              id={item.id}
              active={item.active}
              type="piaz"
            />
          </>
        ))}
      </div>
    </div>
  )
}
