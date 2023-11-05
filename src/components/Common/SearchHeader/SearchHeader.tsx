import { useDispatch } from 'react-redux'
import { BsArrowRight } from 'react-icons/bs'
import { UISlice } from '@/redux/slices/UISlice'
import SearchBar from '../SearchBar/SearchBar'

export default function SearchHeader() {
  const dispatch = useDispatch()
  const closeSearchColumn = () => {
    dispatch(UISlice.actions.contactSearchbarHandler(false))
    dispatch(UISlice.actions.chatColumnHandler(true))
  }
  return (
    <div className="flex w-full items-center justify-between p-3">
      <button
        className="h-12 w-12 rounded-full bg-primary/100 text-gray-700"
        onClick={closeSearchColumn}
      >
        <BsArrowRight className="h-9 w-9 rounded-full p-1 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600" />
      </button>
      <SearchBar />
    </div>
  )
}
