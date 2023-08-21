import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { storeStateTypes } from '@/types/types'
import ChatBox from '@/components/RightSection/ChatBox/ChatBox'
import { searchBoxType } from '@/redux/slices/SearchSlice/SearchSlice'
import { UISlice } from '@/redux/slices/UISlice'
import setActiveChatService from '@/services/activeService'
import { startChatService } from '@/services/userService'

export default function SearchList() {
  // results
  const result = useSelector((state: storeStateTypes) => state.search.chatBoxes)
  const dispatch = useDispatch()

  const searchBoxOnClick = useCallback(
    (id: number, type: string, profile: searchBoxType) => {
      console.log('open chat box')
      dispatch(UISlice.actions.openMidColumn())
      startChatService(id.toString())
      // dispatch(ActiveChatSlice.actions.setActiveUser({ id, type, profile }))
      console.log('chatbox id:', id)
      // createChatService(id.toString())
      // dispatch(ChatListSlice.actions.setActive({ id }))
      // dispatch(SearchSlice.actions.setActive({ id }))
    },
    []
  )

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
            onClick={() => searchBoxOnClick(box.id, box.type, box)}
          />
        ))}
      </div>
    </div>
  )
}
