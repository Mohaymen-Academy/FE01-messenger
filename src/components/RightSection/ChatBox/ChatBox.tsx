import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import { ActiveChatSlice } from '@/redux/slices/ActiveChatSlice'
import { ChatListSlice } from '@/redux/slices/ChatListSlice'
import { UISlice } from '@/redux/slices/UISlice'
import { SearchSlice } from '@/redux/slices/SearchSlice'
import { createChatService } from '@/services/dataService'
import { parseMessage, parseDate } from '@/utils/parser'

interface ChatBoxProps {
  online?: boolean
  lastMessageTime?: string
  senderName: string
  lastMessageText?: string
  unReadMessage?: number
  seen?: boolean
  seenEnable?: boolean
  img?: string
  id: number
  active?: boolean
  type: string
  onClick: () => void
  username?: string
}

export default function ChatBox({
  online,
  lastMessageTime,
  senderName,
  lastMessageText,
  unReadMessage,
  seen,
  seenEnable,
  img,
  id,
  type,
  active,
  onClick,
  username,
}: ChatBoxProps) {
  const colors = ['blue', 'red', 'green', 'black', 'yellow', 'pink', 'brown']
  const bgColor = id % colors.length
  // const dispatch = useDispatch()
  // const activateChat = () => {
  //   console.log('open chat box')
  //   dispatch(UISlice.actions.openMidColumn())
  //   dispatch(ActiveChatSlice.actions.setActiveChat({ id, type }))
  //   console.log('chatbox id:', id)
  //   createChatService(id.toString())
  //   // dispatch(ChatListSlice.actions.setActive({ id }))
  //   // dispatch(SearchSlice.actions.setActive({ id }))
  // }
  return (
    <div
      // style={{ backgroundColor: active ? '#7e85ed' : 'white' }}
      className={classNames(
        'flex items-center rounded-lg py-[10px] pl-2 text-secondary/100',
        active ? 'bg-[#7e85ed]' : 'bg-primary hover:bg-chatBoxHover'
      )}
      onClick={onClick}
    >
      <div className="flex w-full justify-between">
        <div
          style={{ backgroundColor: `${colors[bgColor]}` }}
          className="relative ml-2 mr-3 flex h-12 w-12 items-center justify-center rounded-full text-xl font-semibold text-white"
        >
          <div
            style={{ display: img ? 'none' : 'flex' }}
            className="flex w-full items-center justify-center rounded-full text-center"
          >
            {senderName?.charAt(0)}
          </div>
          <img
            style={{ display: img ? 'flex' : 'none' }}
            className="h-12 w-12 rounded-full"
            src={img}
          />
          <div
            style={{
              display: type === 'PV' ? '' : 'none',
            }}
            className="absolute bottom-0 right-0 flex h-[13px] w-[13px] items-center justify-center rounded-full bg-white"
          >
            <div
              style={{
                backgroundColor: online ? '#1BDC48' : '#888A88',
              }}
              className="h-[9px] w-[9px] rounded-full"
            />
          </div>
        </div>
        <div className="min-w-0 flex-1 items-center">
          <div className="mb-1 flex justify-between">
            <h2 className="line-clamp-1 text-sm font-semibold text-primary/100">
              {senderName}
            </h2>
            <div
              style={{ display: seenEnable ? 'flex' : 'none' }}
              className="w-full justify-end"
            >
              <IoCheckmarkDoneOutline
                style={{ display: seen ? 'flex' : 'none' }}
                className="ml-2 h-4 w-4 fill-current text-green-500"
              />
              <IoCheckmarkOutline
                style={{ display: seen ? 'none' : 'flex' }}
                className="ml-2 h-4 w-4 fill-current"
              />
            </div>
            {!!lastMessageTime && (
              <span className="ml-1 text-xs font-medium text-secondary/100">
                {parseDate(lastMessageTime)}
              </span>
            )}
          </div>
          <div className="flex justify-between text-sm">
            <span className="pointer-events-none line-clamp-1 select-none">
              {lastMessageText ? parseMessage(lastMessageText) : username}
            </span>
            <span
              className={classNames(
                'flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-right text-xs text-white',
                unReadMessage ? 'flex' : 'hidden'
              )}
            ></span>
          </div>
        </div>
      </div>
    </div>
  )
}
