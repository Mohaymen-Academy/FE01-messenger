import classNames from 'classnames'
import SearchHeader from '../SearchHeader/SearchHeader'
import SearchList from '../SearchList/SearchList'

interface SearchColumnProps {
  mode: 'message' | 'contact'
  isActive: boolean
}

export default function SearchColumn({ mode, isActive }: SearchColumnProps) {
  return (
    <div
      className={classNames(
        'absolute left-0 top-0 z-10 h-screen w-96 overflow-y-auto overflow-x-hidden bg-white',
        isActive ? '' : 'hidden'
      )}
    >
      <SearchHeader />
      <SearchList />
    </div>
  )
}
