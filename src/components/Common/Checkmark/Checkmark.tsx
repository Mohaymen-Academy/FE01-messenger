import { BsClock } from 'react-icons/bs'
import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from 'react-icons/io5'

interface CheckmarkProps {
  mode: 'loading' | 'sent' | 'seen'
}

export default function Checkmark({ mode }: CheckmarkProps) {
  switch (mode) {
    case 'loading':
      return <BsClock className="h-3 w-3 fill-current text-gray-500" />
    case 'sent':
      return (
        <IoCheckmarkOutline className="h-4 w-4 fill-current text-gray-500" />
      )
    case 'seen':
      return (
        <IoCheckmarkDoneOutline className="h-4 w-4 fill-current text-green-500" />
      )
    default:
      return null
  }
}
