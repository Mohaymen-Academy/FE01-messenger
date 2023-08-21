import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { storeStateTypes } from '@/types/types'
import SearchList from '@/components/Common/SearchList'
import ChatList from '../ChatList'
import ChatNav from '../ChatNav'
import RightHeader from '../RightHeader'
import NewChatCreator from '../NewChatCreator/NewChatCreator'

interface ChatsColumnProps {
  onClick: () => void
  isActive: boolean
}

export default function ChatsColumn({ onClick, isActive }: ChatsColumnProps) {
  const contactSearchBar = useSelector(
    (state: storeStateTypes) => state.UI.contactSearchBar
  )
  return (
    <div
      className={classNames(
        'absolute w-full top-0 h-full transition-all duration-500 ease-in-out bg-primary/100 ',
        isActive ? 'right-0' : 'right-full'
      )}
    >
      <div className="relative flex h-full w-full flex-col bg-primary/100 shadow-xl max-sm:w-full">
        <RightHeader onClick={onClick} />
        <div
          className={classNames(
            'transition-all duration-500 h-0 grow flex flex-col relative',
            contactSearchBar ? 'hidden' : ''
          )}
        >
          <ChatNav />
          <ChatList />
          <NewChatCreator />
        </div>
        <div
          className={classNames(
            'transition-all duration-500 h-[calc(100vh_-_65px)]',
            contactSearchBar ? '' : 'hidden'
          )}
        >
          <SearchList />
        </div>
      </div>
    </div>
  )
}
