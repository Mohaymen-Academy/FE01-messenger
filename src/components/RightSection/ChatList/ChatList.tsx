import ChatBox from '../ChatBox'
import img from '@/assets/download.jpeg'

interface ChatListProps {}

export default function ChatList({}: ChatListProps) {
  return (
    <div className="relative mt-2 mb-4 overflow-x-hidden h-[calc(100%_-_40px)] overflow-y-auto scrolling-touch lg:max-h-sm scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray">
      <div className="flex flex-col w-full h-screen px-2">
        <ChatBox
          unReadMessage={3}
          seen={true}
          senderName="Mr.Hashemi"
          lastMessageTime="12:00"
          online={true}
          textMessage="سلام"
          seenEnable={true}
          img={img}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="Mr.Hashemi"
          lastMessageTime="12:00"
          online={false}
          seenEnable={true}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="Atefe"
          lastMessageTime="12:00"
          online={false}
          seenEnable={true}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="Mohammad"
          lastMessageTime="12:00"
          online={true}
          seenEnable={false}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="احمد"
          lastMessageTime="12:00"
          online={false}
          seenEnable={false}
          img={img}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="کارگر افغانی مظلوم"
          lastMessageTime="12:00"
          online={false}
          seenEnable={false}
        />
        <ChatBox
          unReadMessage={1}
          seen={true}
          textMessage="سلام آقای هاشمی؟"
          senderName="Mr.Hashemi"
          lastMessageTime="12:00"
          online={false}
          seenEnable={true}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="Mr.Hashemi"
          lastMessageTime="12:00"
          online={false}
          seenEnable={false}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="Mr.Hashemi"
          lastMessageTime="12:00"
          online={false}
          seenEnable={false}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="Mr.Hashemi"
          lastMessageTime="12:00"
          online={false}
          seenEnable={true}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="Mr.Hashemi"
          lastMessageTime="12:00"
          online={false}
          seenEnable={false}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="Mr.Hashemi"
          lastMessageTime="12:00"
          online={false}
          seenEnable={false}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="Mr.Hashemi"
          lastMessageTime="12:00"
          online={true}
          seenEnable={false}
        />
        <ChatBox
          unReadMessage={1}
          seen={false}
          textMessage="سلام آقای هاشمی؟"
          senderName="Mr.Hashemi"
          lastMessageTime="12:00"
          online={false}
          seenEnable={false}
        />
      </div>
    </div>
  )
}
