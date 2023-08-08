import { BsEmojiLaughing, BsSend } from 'react-icons/bs'
import IconButton from '@/components/Common/IconButton/IconButton'

interface MessageBoxProps {}

export default function MessageBox({}: MessageBoxProps) {
  return (
    <div className="relative flex w-full items-center self-center p-4 text-gray-600 focus-within:text-gray-400">
      <div className="absolute inset-y-0 left-0 flex items-center pl-6">
        <IconButton icon={<BsEmojiLaughing />} />
      </div>
      <div className="flex items-center pr-6">
        <IconButton
          type="submit"
          icon={<BsSend className="h-6 w-6 fill-current text-gray-600" />}
        />
      </div>
      <span
        className="tail-right w-0 flex-1 rounded-l-lg rounded-t-lg border border-transparent bg-white p-2 pl-10 text-base text-gray-900 placeholder:text-gray-800 focus:border-blue-500  focus:outline-none"
        placeholder="پیام..."
        contentEditable
      />
    </div>
  )
}
