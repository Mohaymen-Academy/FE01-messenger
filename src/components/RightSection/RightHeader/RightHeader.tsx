import { useDispatch } from 'react-redux'
import { UISlice } from '@/redux/slices/UISlice'
import NavMenu from '../NavMenu/NavMenu'
import SearchBar from '../../Common/SearchBar/SearchBar'

interface RightHeaderProps {
  onClick: () => void
}

export default function RightHeader({ onClick }: RightHeaderProps) {
  const dispatch = useDispatch()
  const showSearchBarColmn = () => {
    dispatch(UISlice.actions.contactSearchbarHandler(true))
    // dispatch(UISlice.actions.chatColumnHandler(false))
  }
  return (
    <div className="flex w-full items-center justify-between bg-primary/100 px-3 py-2  text-white dark:text-white">
      <NavMenu onClick={onClick} />
      <SearchBar onClick={showSearchBarColmn} />
    </div>
  )
}
