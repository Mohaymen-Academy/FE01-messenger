import { AiOutlineClose, AiOutlineMore } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import IconButton from '@/components/Common/IconButton/IconButton'
import { UISlice } from '@/redux/slices/UISlice'
import { storeStateTypes } from '@/types/types'

interface InfoHeaderProps {
  type: 'PV' | 'CHANNEL' | 'GROUP'
}

export default function InfoHeader({ type }: InfoHeaderProps) {
  const dispatch = useDispatch()
  const closeInfoColumn = () => {
    dispatch(UISlice.actions.closeInfoColumn())
  }

  return (
    <div className="flex w-full items-center justify-between p-3">
      <IconButton
        onClick={closeInfoColumn}
        icon={<AiOutlineClose className="h-6 w-6 fill-current text-gray-600" />}
      />
      <div className="ml-auto mr-4 text-lg font-medium">
        اطلاعات
        {type === 'CHANNEL'
          ? ' کانال '
          : type === 'GROUP'
          ? ' گروه '
          : ' پروفایل '}
      </div>
      <IconButton
        icon={<BiPencil className="h-6 w-6 fill-current text-gray-600" />}
      />
      <IconButton
        icon={<AiOutlineMore className="h-6 w-6 fill-current text-gray-600" />}
      />
    </div>
  )
}
