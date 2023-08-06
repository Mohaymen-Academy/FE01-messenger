import NavMenu from '../NavMenu/NavMenu'
import SearchBar from '../SearchBar/SearchBar'

interface RightHeaderProps {}

export default function RightHeader({}: RightHeaderProps) {
  return (
    <div className="flex justify-between px-3 pt-1 text-white">
      <div className=" flex items-center w-full py-2">
        <NavMenu />
        <SearchBar />
      </div>
    </div>
  )
}
