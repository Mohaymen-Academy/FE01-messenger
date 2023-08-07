import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from 'react-icons/io5'

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
    <div className="flex flex-nowrap items-center rounded-lg py-[10px] pl-2 text-black  hover:bg-gray-200">
      <div className="flex w-full justify-between">
        <div className="relative ml-2 mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl font-semibold text-white">
          <div
            style={{ display: img ? 'none' : 'flex' }}
            className="flex w-full items-center justify-center rounded-full text-center"
          >
            {senderName.charAt(0)}
          </div>
          <img
            style={{ display: img ? 'flex' : 'none' }}
            className="h-12 w-12 rounded-full"
            src={img}
          />
          <div className="absolute bottom-0 right-0 flex h-[13px] w-[13px] items-center justify-center rounded-full bg-white">
            <div
              style={{ backgroundColor: online ? '#1BDC48' : '#888A88' }}
              className="h-[9px] w-[9px] rounded-full"
            ></div>
          </div>
        </div>
        <div className="min-w-0 flex-1 items-center">
          <div className="mb-1 flex justify-between">
            <h2 className="text-sm font-semibold text-black">{senderName}</h2>
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
            <span className="ml-1 text-xs font-medium text-gray-600">
              {lastMessageTime}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span>{textMessage}</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-right text-xs text-white">
              {unReadMessage}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
