import { useSelector } from 'react-redux'
import { storeStateTypes } from '@/types/types'
import { ChatListDataService } from '@/services/dataService'
import ChatBox from '../ChatBox'

export default function ChatList() {
  ChatListDataService()
  const chatBoxes = useSelector(
    (state: storeStateTypes) => state.chatList.chatBoxes
  )
  console.log(typeof chatBoxes)

  // console.log(chatBoxes)
  return (
    <div className="relative mb-4 mt-2 h-[calc(100%_-_40px)] cursor-pointer overflow-x-hidden">
      <div className="flex h-screen w-full flex-col overflow-y-auto px-2">
        {chatBoxes.map(item => (
          <>
            <ChatBox
              // unReadMessage={item.unReadMessage}
              // seen={item.seen}
              senderName={item.username}
              // lastMessageTime={item.lastMessageTime}
              // online={item.online}
              // textMessage={item.textMessage}
              // seenEnable={item.seenEnable}
              img={item.photo}
              id={item.chatId}
              type={item.type}
              active={item.active}
            />
          </>
        ))}
      </div>
    </div>
  )
}
