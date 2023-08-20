import classNames from 'classnames'
import { CgMenu } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { BsArrowRight } from 'react-icons/bs'
import { storeStateTypes } from '@/types/types'
import { UISlice } from '@/redux/slices/UISlice'

interface NavMenuProps {
  onClick: () => void
}

export default function NavMenu({ onClick }: NavMenuProps) {
  const dispatch = useDispatch()
  const contactSearchBar = useSelector(
    (state: storeStateTypes) => state.UI.contactSearchBar
  )
  const closeSearchColumn = () => {
    dispatch(UISlice.actions.contactSearchbarHandler(false))
  }
  return (
    <>
      <button className="h-12 w-12 rounded-full bg-primary/100 text-gray-700">
        <CgMenu
          onClick={onClick}
          className={classNames(
            'h-9 w-9 rounded-full p-1 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 transition-all duration-1000',
            contactSearchBar ? 'hidden' : ''
          )}
        />
        <BsArrowRight
          onClick={closeSearchColumn}
          className={classNames(
            'h-9 w-9 rounded-full p-1 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 transition-all duration-1000',
            contactSearchBar ? '' : 'hidden'
          )}
        />
      </button>
    </>
  )
}
