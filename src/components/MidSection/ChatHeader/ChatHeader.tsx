import { BsArrowRight, BsSearch, BsThreeDotsVertical } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { MdOutlineGroupAdd } from 'react-icons/md'
import IconButton from '@/components/Common/IconButton/IconButton'
import mrHashemi from '@/assets/download.jpeg'
import { UISlice } from '@/redux/slices/UISlice'
import { storeStateTypes } from '@/types/types'
import ModalContainer from '@/components/Common/ModalContainer'
import NewChat from '@/components/Common/NewChat'
import AddMember from '@/components/Common/AddMember/AddMember'
import { parseMessage } from '@/utils/parser'

export default function ChatHeader() {
  const dispatch = useDispatch()
  const openInfoColumn = () => {
    dispatch(UISlice.actions.openInfoColumn())
  }
  const addMemberModalActive = useSelector(
    (state: storeStateTypes) => state.UI.addMemberModal
  )
  const activeId = useSelector((state: storeStateTypes) => state.activeChat.id)
  // console.log(`active id: ${activeId}`)
  const activeChat = useSelector((state: storeStateTypes) =>
    state.chatList.chatBoxes.find(compo => compo.id === activeId)
  )

  const pin = useSelector(
    (state: storeStateTypes) =>
      state.message.chats.find(compo => compo.id === activeId.toString())?.pin
  )
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
  const img = useSelector(
    (state: storeStateTypes) => state.activeChat.profile.image
  )
  const type = useSelector((state: storeStateTypes) => state.activeChat.type)
  const addMemberHandler = () => {
    dispatch(UISlice.actions.addMemberHandler(true))
  }
  return (
    <div className="z-20 flex w-full shrink-0 grow-0 items-center border-b bg-primary/100 pr-3 text-primary/100">
      <IconButton
        className="md:hidden"
        onClick={() => dispatch(UISlice.actions.closeMidColumn())}
        icon={<BsArrowRight className="h-6 w-6 fill-current text-gray-600" />}
      />
      <div onClick={openInfoColumn} className="flex w-0 grow justify-between">
        <div className="mx-4 my-2 h-12 w-12 cursor-pointer rounded-full bg-blue-500 bg-cover bg-center bg-no-repeat">
          <img className="rounded-full" src={img} />
        </div>
        <div className="flex flex-1 cursor-pointer flex-col justify-center overflow-hidden">
          <div className="overflow-hidden whitespace-nowrap text-base font-medium leading-tight text-primary/100">
            {active?.name}
          </div>
          {/* remove overflow hidden */}
          {active?.name != 'saved message' && (
            <div
              style={{ display: type === 'PV' ? '' : 'none' }}
              className="overflow-hidden whitespace-nowrap text-sm font-medium leading-tight text-gray-600"
            >
              {active?.online ? 'آنلاین' : 'آخرین بازدید به تازگی'}
            </div>
          )}
        </div>
      </div>
      {pin && (
        <div className="relative my-auto ml-2 w-0 max-w-fit grow cursor-pointer border-l-2 border-replyBorder pl-2">
          <div className="line-clamp-1 text-base text-primary">
            {parseMessage(pin.text)}
          </div>
          <div className="text-sm text-secondary">{pin.fullName}</div>
        </div>
      )}
      {/* <IconButton
        icon={<BsSearch className="h-6 w-6 fill-current text-gray-600" />}
      /> */}

      <IconButton
        icon={
          <div className="flex h-6 w-6 items-center justify-center">
            <MdOutlineGroupAdd
              onClick={addMemberHandler}
              className={classNames(
                'h-6 w-6 fill-current text-gray-600',
                active?.type === 'GROUP' || active?.type === 'CHANNEL'
                  ? ''
                  : 'hidden'
              )}
            />
            <ModalContainer
              isOpen={addMemberModalActive}
              onClose={() => {
                dispatch(UISlice.actions.addMemberHandler(false))
              }}
              child={<AddMember />}
            />
            <BsThreeDotsVertical
              className={classNames(
                'h-6 w-6 fill-current text-gray-600',
                active?.type === 'GROUP' || active?.type === 'CHANNEL'
                  ? 'hidden'
                  : ''
              )}
            />
          </div>
        }
      />
    </div>
  )
}
