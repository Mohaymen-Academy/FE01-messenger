import { BsEmojiLaughing, BsSend } from 'react-icons/bs'
import IconButton from '@/components/Common/IconButton/IconButton'

interface MessageBoxProps {}

export default function MessageBox({}: MessageBoxProps) {
  return (
    <div className="relative flex w-full max-w-xl items-center self-center overflow-hidden p-4 text-secondary focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-6 text-secondary">
        <IconButton icon={<BsEmojiLaughing />} />
      </span>
      <span className="flex items-center pr-6">
        <IconButton
          type="submit"
          icon={<BsSend className="h-6 w-6 fill-current text-secondary" />}
        />
      </span>
      <input
        type="search"
        className="w-full appearance-none rounded-lg border border-transparent bg-primary p-2 pl-10 text-sm placeholder:text-secondary focus:border-activeLink focus:bg-primary focus:text-primary focus:shadow-blue-50 focus:outline-none"
        placeholder="پیام..."
        autoComplete="off"
      />
    </div>
  )
}
