import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { storeStateTypes } from '@/types/types'
import ChatBox from '@/components/RightSection/ChatBox/ChatBox'

export default function SearchList() {
  // results
  const result = useSelector((state: storeStateTypes) => state.search.chatBoxes)
  //
  return (
    <div className="h-full border-t-2 border-t-gray-200">
      <p className={classNames('pt-4 text-center', result ? 'hidden' : '')}>
        جستجو...
      </p>
      <div className="flex flex-col">
        {result.map(box => (
          <ChatBox
            key={box.id}
            senderName={box.name}
            id={box.id}
            type={box.type}
            img={box.image}
          />
        ))}
      </div>
    </div>
  )
}
