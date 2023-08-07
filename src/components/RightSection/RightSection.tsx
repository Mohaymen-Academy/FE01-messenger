import IconButton from '../Common/IconButton/IconButton'
import ChatList from './ChatList'
import ChatNav from './ChatNav'
import RightHeader from './RightHeader/RightHeader'

interface RightSectionProps {}

export default function RightSection({}: RightSectionProps) {
  return (
    <div>
      <div className="relative h-full w-96 border-r border-gray-300 bg-white shadow-xl transition-all duration-500 ease-in-out md:block">
        <RightHeader />
        <ChatNav />
        <ChatList />
        <IconButton />
      </div>
    </div>
  )
}
