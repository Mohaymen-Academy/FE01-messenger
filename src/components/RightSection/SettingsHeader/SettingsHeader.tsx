import { AiOutlineClose, AiOutlineMore } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'
import { IoArrowForward } from 'react-icons/io5'
import { useContext } from 'react'
import IconButton from '@/components/Common/IconButton'

interface SettingsHeaderProps {
  onClick: () => void
}

export default function SettingsHeader({ onClick }: SettingsHeaderProps) {
  const value = useContext(openProfileSettingsContext)
  return (
    <div className="flex w-full items-center justify-between p-3">
      <IconButton
        onClick={onClick}
        icon={<IoArrowForward className="h-6 w-6 fill-current text-gray-600" />}
      />
      <div className="ml-auto mr-4 text-lg font-medium"> تنظیمات</div>
      
      <IconButton
        onClick={value}
        icon={<BiPencil className="h-6 w-6 fill-current text-gray-600" />}
      />
    </div>
  )
}
