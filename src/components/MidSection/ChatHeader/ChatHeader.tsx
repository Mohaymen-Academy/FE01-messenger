import { BsArrowRight, BsSearch, BsThreeDotsVertical } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@/components/Common/IconButton/IconButton'
import mrHashemi from '@/assets/download.jpeg'
import { UISlice } from '@/redux/slices/UISlice'
import { storeStateTypes } from '@/types/types'

export default function ChatHeader() {
  const dispatch = useDispatch()
  const openInfoColumn = () => {
    dispatch(UISlice.actions.openInfoColumn())
  }
  const activeId = useSelector((state: storeStateTypes) => state.activeChat.id)
  console.log(`active id: ${activeId}`)
  const activeChat = useSelector((state: storeStateTypes) =>
    state.chatList.chatBoxes.find(compo => compo.id === activeId)
  )
  // console.log(`active chat ${activeChat?.active}`)
  // const activeSearchChat = useSelector((state: storeStateTypes) =>
  //   state.search.chatBoxes.find(compo => compo.id === activeId)
  // )
  // console.log(`active search chat${activeSearchChat?.username}`)
  const active = activeChat
  // if (activeChat) {
  //   active = activeChat
  // } else {
  //   active = activeSearchChat
  // }
  return (
    <div className="z-20 flex w-full shrink-0 grow-0 items-center border-b bg-primary/100 pr-3 text-primary/100">
      <IconButton
        className="md:hidden"
        onClick={() => dispatch(UISlice.actions.closeMidColumn())}
        icon={<BsArrowRight className="h-6 w-6 fill-current text-gray-600" />}
      />
      <div onClick={openInfoColumn} className="flex w-full justify-between">
        <div className="mx-4 my-2 h-12 w-12 cursor-pointer rounded-full bg-blue-500 bg-cover bg-center bg-no-repeat">
          <img className="rounded-full" src={mrHashemi} />
        </div>
        <div className="flex flex-1 cursor-pointer flex-col justify-center overflow-hidden">
          <div className="overflow-hidden whitespace-nowrap text-base font-medium leading-tight text-primary/100">
            {active?.name}
          </div>
          {/* remove overflow hidden */}
          <div className="overflow-hidden whitespace-nowrap text-sm font-medium leading-tight text-gray-600">
            {active?.online ? 'آنلاین' : 'آخرین بازدید به تازگی'}
          </div>
        </div>
      </div>
      <IconButton
        icon={<BsSearch className="h-6 w-6 fill-current text-gray-600" />}
      />
      <IconButton
        icon={
          <BsThreeDotsVertical className="h-6 w-6 fill-current text-gray-600" />
        }
      />
    </div>
  )
}
