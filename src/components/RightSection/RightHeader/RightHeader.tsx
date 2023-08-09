import NavMenu from '../NavMenu/NavMenu'
import SearchBar from '../../Common/SearchBar/SearchBar'

interface RightHeaderProps {
  onClick: () => void
}

export default function RightHeader({ onClick }: RightHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between bg-primary/100 px-3 py-2  text-white dark:text-white">
      <NavMenu onClick={onClick} />
      <SearchBar />
    </div>
  )
}
