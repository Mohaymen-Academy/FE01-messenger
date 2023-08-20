import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { storeStateTypes } from '@/types/types'
import ChatBox from '@/components/RightSection/ChatBox/ChatBox'

export default function SearchList() {
  // results
  const result = useSelector((state: storeStateTypes) => state.search.chatBoxes)

  //

  return (
    <div className="h-full">
      <p className={classNames('pt-4 text-center', result ? 'hidden' : '')}>
        جستجو...
      </p>
      <div className="flex flex-col">
        {/* {result.length} */}
        {result.map(box => (
          <ChatBox
            key={box.id}
            senderName={box.username}
            id={box.id}
            type={box.type}
            img={box.image}
            active={box.active}
          />
        ))}
      </div>
    </div>
  )
}
