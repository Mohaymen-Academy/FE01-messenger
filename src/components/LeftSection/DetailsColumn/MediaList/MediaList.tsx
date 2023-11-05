import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { storeStateTypes } from '@/types/types'
import ChatBox from '@/components/RightSection/ChatBox/ChatBox'
import MediaNav from '../MediaNav'

interface MediaNavProps {
  type?: 'PV' | 'CHANNEL' | 'GROUP'
}

export default function MediaList({ type }: MediaNavProps) {
  const members = useSelector(
    (state: storeStateTypes) => state.LeftSection.members
  )
  return (
    <div className="mt-2 h-[calc(50vh_-_60px)]">
      <MediaNav type={type} />
      <div className="flex justify-center bg-primary/100 pt-3 ">
        <h3
          className={classNames(
            'text-slate-600',
            type === 'PV' ? '' : 'hidden'
          )}
        >
          در اینجا چیزی وجود ندارد
        </h3>
        <div
          className={classNames(
            'flex flex-col gap-1 w-full px-1',
            type !== 'PV' ? '' : 'hidden'
          )}
        >
          {members.map(item => (
            <ChatBox
              senderName={item.fullName}
              img={item.photo}
              key={item.fullName}
              id={1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
