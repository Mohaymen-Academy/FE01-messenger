import { FaPen } from 'react-icons/fa'
import classNames from 'classnames'
import FabButton from '@/components/Common/FabButton'
import ChatList from '../ChatList'
import ChatNav from '../ChatNav'
import RightHeader from '../RightHeader'

interface ChatsColumnProps {
  onClick: () => void
  isActive: boolean
}

export default function ChatsColumn({ onClick, isActive }: ChatsColumnProps) {
  return (
    <div
      className={classNames(
        'absolute top-0 h-full w-96 transition-all duration-500 ease-in-out',
        isActive ? 'right-0' : 'right-[384px]'
      )}
    >
      <div className="relative  w-96 border-r border-gray-300 bg-white shadow-xl">
        <RightHeader onClick={onClick} />
        <ChatNav />
        <ChatList />
        <div className="sticky bottom-3 left-5 z-40 mb-6 ml-4 flex flex-row justify-end">
          <FabButton
            primary={true}
            icon={<FaPen className="h-5 w-5 fill-current text-white" />}
          />
        </div>
      </div>
    </div>
  )
}
