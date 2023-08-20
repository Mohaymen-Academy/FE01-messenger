import { useDispatch } from 'react-redux'
import React from 'react'
import { UISlice } from '@/redux/slices/UISlice'
import { contactSearchService } from '@/services/searchService'
import NavMenu from '../NavMenu/NavMenu'
import SearchBar from '../../Common/SearchBar/SearchBar'

interface RightHeaderProps {
  onClick: () => void
}

export default function RightHeader({ onClick }: RightHeaderProps) {
  const dispatch = useDispatch()
  const showSearchBarColumn = () => {
    dispatch(UISlice.actions.contactSearchbarHandler(true))
  }
  const searchContactHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const myInput = e.target.value
    contactSearchService(myInput)
  }
  return (
    <div className="flex w-full items-center justify-between bg-primary px-3 py-2  text-white dark:text-white">
      <NavMenu onClick={onClick} />
      <SearchBar
        onClick={showSearchBarColumn}
        onChange={searchContactHandler}
      />
    </div>
  )
}
