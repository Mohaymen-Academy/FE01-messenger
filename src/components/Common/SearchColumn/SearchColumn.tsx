import SearchHeader from '../SearchHeader/SearchHeader'
import SearchList from '../SearchList/SearchList'

interface SearchColumnProps {
  mode: 'message' | 'contact'
}

export default function SearchColumn({ mode }: SearchColumnProps) {
  return (
    <div className="absolute left-0 top-0 z-10 h-screen w-96 overflow-y-auto overflow-x-hidden bg-white">
      <SearchHeader />
      <SearchList />
    </div>
  )
}
