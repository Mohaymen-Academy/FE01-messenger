import { v4 as uuid } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import img from '@/assets/download.jpeg'
import { ChatListSlice } from '@/redux/slices/ChatListSlice'
import { storeStateTypes } from '@/types/types'
import ChatBox from '../ChatBox'
import { RightSectionOpen } from '../context/responsiveContext'

interface ChatListProps {}

export default function ChatList({}: ChatListProps) {
  const dispatch = useDispatch()

  // const items = [
  //   {
  //     unReadMessage: 3,
  //     seen: true,
  //     senderName: 'Mr.Hashemi',
  //     lastMessageTime: '12:00',
  //     online: true,
  //     textMessage: 'سلام',
  //     seenEnable: true,
  //     img,
  //     id: uuid(),
  //   },
  //   {
  //     unReadMessage: 1,
  //     seen: false,
  //     textMessage: 'سلام آقای هاشمی؟',
  //     senderName: 'Mr.Hashemi',
  //     lastMessageTime: '12:00',
  //     online: false,
  //     seenEnable: true,
  //     id: uuid(),
  //   },
  //   {
  //     unReadMessage: 1,
  //     seen: false,
  //     textMessage: 'سلام آقای هاشمی؟',
  //     senderName: 'Atefe',
  //     lastMessageTime: '12:00',
  //     online: false,
  //     seenEnable: true,
  //     id: uuid(),
  //   },
  //   {
  //     unReadMessage: 1,
  //     seen: false,
  //     textMessage: 'سلام آقای هاشمی؟',
  //     senderName: 'Mohammad',
  //     lastMessageTime: '12:00',
  //     online: true,
  //     seenEnable: false,
  //     id: uuid(),
  //   },
  //   {
  //     unReadMessage: 1,
  //     seen: false,
  //     textMessage: 'سلام آقای هاشمی؟',
  //     senderName: 'احمد',
  //     lastMessageTime: '12:00',
  //     online: false,
  //     seenEnable: false,
  //     img,
  //     id: uuid(),
  //   },
  // ]

  // items.map(item => {
  //   dispatch(
  //     ChatListSlice.actions.addBox({
  //       id: item.id,
  //       image: item.img,
  //       name: item.senderName,
  //     })
  //   )
  // })

  const chatBoxes = useSelector(
    (state: storeStateTypes) => state.chatList.chatBoxes
  )
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
              img={item.img}
              id={item.id}
              active={item.active}
            />
          </>
        ))}
      </div>
    </div>
  )
}
