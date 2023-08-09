import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs'
import IconButton from '@/components/Common/IconButton/IconButton'
import mrHashemi from '@/assets/download.jpeg'

interface ChatHeaderProps {}

export default function ChatHeader({}: ChatHeaderProps) {
  return (
    <div className="z-20 flex w-full shrink-0 grow-0 items-center border-b bg-primary/100 pr-3 text-primary/100">
      <div className="flex w-full justify-between">
        <div className="mx-4 my-2 h-12 w-12 cursor-pointer rounded-full bg-blue-500 bg-cover bg-center bg-no-repeat">
          <img className="rounded-full" src={mrHashemi} />
        </div>
        <div className="flex flex-1 cursor-pointer flex-col justify-center overflow-hidden">
          <div className="overflow-hidden whitespace-nowrap text-base font-medium leading-tight text-primary/100">
            Mr. Hashemi
          </div>
          <div className="overflow-hidden whitespace-nowrap text-sm font-medium leading-tight text-gray-600">
            Online
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
      <button className="flex self-center rounded-full p-2 text-gray-700 hover:bg-gray-200 hover:text-gray-600 focus:outline-none md:hidden">
        <svg
          className="h-6 w-6 fill-current text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="nonzero"
            d="M4,16 L20,16 C20.5522847,16 21,16.4477153 21,17 C21,17.5128358 20.6139598,17.9355072 20.1166211,17.9932723 L20,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4871642 3.38604019,16.0644928 3.88337887,16.0067277 L4,16 L20,16 L4,16 Z M4,11 L20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5128358 20.6139598,12.9355072 20.1166211,12.9932723 L20,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4871642 3.38604019,11.0644928 3.88337887,11.0067277 L4,11 Z M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 C21,7.51283584 20.6139598,7.93550716 20.1166211,7.99327227 L20,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.48716416 3.38604019,6.06449284 3.88337887,6.00672773 L4,6 Z"
          />
        </svg>
      </button>
    </div>
  )
}
