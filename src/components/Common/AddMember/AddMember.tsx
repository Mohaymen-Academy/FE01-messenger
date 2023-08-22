import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { contactSearchService } from '@/services/searchService'
import { storeStateTypes } from '@/types/types'
import ChatBox from '@/components/RightSection/ChatBox'
import { addMemberService } from '@/services/communicationService'
import { UISlice } from '@/redux/slices/UISlice'
import SearchBar from '../SearchBar/SearchBar'

export default function AddMember() {
  const dispatch = useDispatch()
  const result = useSelector((state: storeStateTypes) => state.search.chatBoxes)

  const searchContactHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const myInput = e.target.value
    // if (myInput.length !== 0)
    contactSearchService(myInput)
  }

  const activeChatId = useSelector(
    (state: storeStateTypes) => state.activeChat.id
  )
  const addMember = id => {
    addMemberService(activeChatId, [id])
    dispatch(UISlice.actions.addMemberHandler(false))
  }
  return (
    <div className="flex w-1/2 flex-col items-center justify-center gap-3 overflow-hidden rounded-lg bg-primary py-3">
      <div className="text-xl font-semibold text-primary">
        <p>افزودن کاربر</p>
      </div>
      <div className="relative mb-2 mt-4 flex w-1/2 justify-center">
        <SearchBar onChange={searchContactHandler} />
      </div>
      <div className="flex h-full w-1/2 flex-col pl-2">
        <p
          className={classNames(
            'text-center justify-center items-center w-full',
            result.length === 0 ? 'flex' : 'hidden'
          )}
        >
          جستجو...
        </p>
        <div className="flex w-full flex-col">
          {/* {result.length} */}
          {result.map(box => (
            <ChatBox
              key={box.id}
              senderName={box.username}
              id={box.id}
              type={box.type}
              img={box.image}
              active={box.active}
              onClick={() => addMember(box.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
