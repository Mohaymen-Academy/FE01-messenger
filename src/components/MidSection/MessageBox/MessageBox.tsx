import { BsEmojiLaughing, BsSend } from 'react-icons/bs'
import { FormEvent, FormEventHandler } from 'react'
import IconButton from '@/components/Common/IconButton/IconButton'
import FabButton from '@/components/Common/FabButton/FabButton'

interface MessageBoxProps {}

export default function MessageBox({}: MessageBoxProps) {
  return (
    <div className="relative flex w-full max-w-2xl items-center self-center p-3 text-gray-600">
      <div className="flex items-center self-end pr-6 ">
        <FabButton icon={<BsSend className="h-6 w-6 " />} />
      </div>
      <div className="tail-right relative flex h-full w-full rounded-l-lg  rounded-t-lg bg-white p-2">
        <div
          className=" h-full max-h-28 w-0 grow overflow-y-scroll rounded-lg p-1 text-base text-gray-900 placeholder:text-gray-700 focus:outline-none"
          placeholder="پیام..."
          contentEditable
        />
        <div className="z-10 flex items-center ">
          <IconButton
            icon={<BsEmojiLaughing className="h-6 w-6 hover:text-blue-500" />}
          />
        </div>
      </div>
    </div>
  )
}
