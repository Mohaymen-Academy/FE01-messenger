import React from 'react'
import ChatBox from '../ChatBox'

interface ChatListProps {}

export default function ChatList({}: ChatListProps) {
  return (
    <div className="relative mt-2 mb-4 overflow-x-hidden overflow-y-auto scrolling-touch lg:max-h-sm scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray">
      <div className="flex flex-col inline-block w-full h-screen px-2 select-none">
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={true} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
        <ChatBox sender="Mr.Hashemi" lastSeen="12:00" online={false} />
      </div>
    </div>
  )
}
