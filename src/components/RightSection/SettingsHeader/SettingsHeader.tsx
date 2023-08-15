import { BiPencil } from 'react-icons/bi'
import { IoArrowForward } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import IconButton from '@/components/Common/IconButton'
import { UISlice } from '@/redux/slices/UISlice'

interface SettingsHeaderProps {
  onClick: () => void
}

export default function SettingsHeader({ onClick }: SettingsHeaderProps) {
  const dispatch = useDispatch()
  const openProfileSettings = () => {
    dispatch(UISlice.actions.openProfileSettings())
  }
  return (
    <div className="flex w-full items-center justify-between p-3">
      <IconButton
        onClick={onClick}
        icon={<IoArrowForward className="h-6 w-6 fill-current text-gray-600" />}
      />
      <div className="ml-auto mr-4 text-lg font-medium"> تنظیمات</div>

      <IconButton
        onClick={openProfileSettings}
        icon={<BiPencil className="h-6 w-6 fill-current text-gray-600" />}
      />
    </div>
  )
}
