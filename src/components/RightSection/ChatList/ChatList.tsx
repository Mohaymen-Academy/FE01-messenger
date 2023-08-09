import { useContext } from 'react'
import img from '@/assets/download.jpeg'
import ChatBox from '../ChatBox'
import { RightSectionOpen } from '../context/responsiveContext'

interface ChatListProps {}

export default function ChatList({}: ChatListProps) {
  const context = useContext(RightSectionOpen)
  return (
    <div className="relative mb-4 mt-2 h-[calc(100%_-_40px)] overflow-x-hidden">
      <div className="flex h-screen w-full flex-col overflow-y-auto px-2">
        {[
          {
            unReadMessage: 3,
            seen: true,
            senderName: 'Mr.Hashemi',
            lastMessageTime: '12:00',
            online: true,
            textMessage: 'سلام',
            seenEnable: true,
            img,
          },
          {
            unReadMessage: 1,
            seen: false,
            textMessage: 'سلام آقای هاشمی؟',
            senderName: 'Mr.Hashemi',
            lastMessageTime: '12:00',
            online: false,
            seenEnable: true,
          },
          {
            unReadMessage: 1,
            seen: false,
            textMessage: 'سلام آقای هاشمی؟',
            senderName: 'Atefe',
            lastMessageTime: '12:00',
            online: false,
            seenEnable: true,
          },
          {
            unReadMessage: 1,
            seen: false,
            textMessage: 'سلام آقای هاشمی؟',
            senderName: 'Mohammad',
            lastMessageTime: '12:00',
            online: true,
            seenEnable: false,
          },
          {
            unReadMessage: 1,
            seen: false,
            textMessage: 'سلام آقای هاشمی؟',
            senderName: 'احمد',
            lastMessageTime: '12:00',
            online: false,
            seenEnable: false,
            img,
          },
        ].map(item => (
          <>
            <ChatBox
              unReadMessage={item.unReadMessage}
              seen={item.seen}
              senderName={item.senderName}
              lastMessageTime={item.lastMessageTime}
              online={item.online}
              textMessage={item.textMessage}
              seenEnable={item.seenEnable}
              img={item.img}
              onClick={context.toggleOpen}
            />
          </>
        ))}
      </div>
    </div>
  )
}
