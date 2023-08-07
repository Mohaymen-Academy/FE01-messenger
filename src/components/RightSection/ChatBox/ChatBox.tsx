import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { IoCheckmarkOutline } from 'react-icons/io5'

interface ChatBoxProps {
  online: boolean
  lastMessageTime: string
  senderName: string
  textMessage: string
  unReadMessage: number
  seen: boolean
  seenEnable: boolean
  img?: string
}

export default function ChatBox({
  online,
  lastMessageTime,
  senderName,
  textMessage,
  unReadMessage,
  seen,
  seenEnable,
  img,
}: ChatBoxProps) {
  return (
    <div className="flex flex-no-wrap items-center pl-2 py-[10px] text-black rounded-lg  hover:bg-gray-200">
      <div className="flex justify-between w-full">
        <div className="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full">
          <div
            style={{ display: img ? 'none' : 'flex' }}
            className="flex justify-center items-center text-center w-full rounded-full"
          >
            {senderName.charAt(0)}
          </div>
          <img
            style={{ display: img ? 'flex' : 'none' }}
            className="w-12 h-12 rounded-full"
            src={img}
          />
          <div className="bg-white absolute bottom-0 right-0 flex items-center justify-center rounded-full w-[13px] h-[13px]">
            <div
              style={{ backgroundColor: online ? '#1BDC48' : '#888A88' }}
              className="rounded-full w-[9px] h-[9px]"
            ></div>
          </div>
        </div>
        <div className="items-center flex-1 min-w-0">
          <div className="flex justify-between mb-1">
            <h2 className="text-sm font-semibold text-black">{senderName}</h2>
            <div
              style={{ display: seenEnable ? 'flex' : 'none' }}
              className="justify-end w-full"
            >
              <IoCheckmarkDoneOutline
                style={{ display: seen ? 'flex' : 'none' }}
                className="ml-2 w-4 h-4 text-green-500 fill-current"
              />
              <IoCheckmarkOutline
                style={{ display: seen ? 'none' : 'flex' }}
                className="ml-2 w-4 h-4 fill-current"
              />
            </div>
            <span className="ml-1 text-xs font-medium text-gray-600">
              {lastMessageTime}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span>{textMessage}</span>
            <span className="flex items-center justify-center w-5 h-5 text-xs text-right text-white bg-green-500 rounded-full">
              {unReadMessage}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
