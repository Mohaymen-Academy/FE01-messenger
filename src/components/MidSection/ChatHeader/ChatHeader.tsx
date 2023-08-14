import {
  BsArrowRight,
  BsBack,
  BsSearch,
  BsThreeDotsVertical,
} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { CgArrowRight } from 'react-icons/cg'
import IconButton from '@/components/Common/IconButton/IconButton'
import mrHashemi from '@/assets/download.jpeg'
import { UISlice } from '@/redux/slices/UISlice'
import { storeStateTypes } from '@/types/types'

interface ChatHeaderProps {}

export default function ChatHeader({}: ChatHeaderProps) {
  const dispatch = useDispatch()
  const openInfoColumn = () => {
    dispatch(UISlice.actions.openInfoColumn())
  }
  const activeId = useSelector((state: storeStateTypes) => state.activeChat.id)
  const activeChat = useSelector((state: storeStateTypes) =>
    state.chatList.chatBoxes.find(compo => compo.id === activeId)
  )
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
            {activeChat?.name}
          </div>
          {/* remove overflow hidden */}
          <div className="overflow-hidden whitespace-nowrap text-sm font-medium leading-tight text-gray-600">
            {activeChat?.online ? 'آنلاین' : 'آخرین بازدید به تازگی'}
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
