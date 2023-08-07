import IconButton from '../Common/IconButton/IconButton'
import TabButton from '../Common/TabButton/TabButton'
import ChatBox from './ChatBox'
import ChatList from './ChatList'
import ChatNav from './ChatNav'
import RightHeader from './RightHeader/RightHeader'

interface RightSectionProps {}

export default function RightSection({}: RightSectionProps) {
  return (
    <div>
      <div className="bg-white relative h-full md:block w-96 border-r border-gray-300 shadow-xl transform transition-all duration-500 ease-in-out">
        <RightHeader />
        <ChatNav />
        <ChatList />
        <IconButton />
      </div>
    </div>
  )
}
