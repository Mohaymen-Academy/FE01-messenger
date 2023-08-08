import NavMenu from '../NavMenu/NavMenu'
import SearchBar from '../SearchBar/SearchBar'

interface RightHeaderProps {}

export default function RightHeader({}: RightHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between px-3 py-2 text-white">
      <NavMenu />
      <SearchBar />
    </div>
  )
}
