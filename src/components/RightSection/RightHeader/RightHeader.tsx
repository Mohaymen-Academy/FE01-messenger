import NavMenu from '../NavMenu/NavMenu'
import SearchBar from '../SearchBar/SearchBar'

interface RightHeaderProps {}

export default function RightHeader({}: RightHeaderProps) {
  return (
    <div className="text-white flex justify-between items-center w-full py-2 px-3">
      <NavMenu />
      <SearchBar />
    </div>
  )
}
