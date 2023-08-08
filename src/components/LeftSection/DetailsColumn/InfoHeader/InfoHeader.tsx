import { AiOutlineClose, AiOutlineMore } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'

import IconButton from '@/components/Common/IconButton/IconButton'

interface InfoHeaderProps {}

export default function InfoHeader({}: InfoHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between p-3">
      <IconButton
        icon={<AiOutlineClose className="h-6 w-6 fill-current text-gray-600" />}
      />
      <div className="ml-auto mr-4 text-lg font-medium"> اطلاعات پروفایل</div>
      <IconButton
        icon={<BiPencil className="h-6 w-6 fill-current text-gray-600" />}
      />
      <IconButton
        icon={<AiOutlineMore className="h-6 w-6 fill-current text-gray-600" />}
      />
    </div>
  )
}
