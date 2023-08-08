import SearchBar from '../SearchBar/SearchBar'

interface SearchHeaderProps {}

export default function SearchHeader({}: SearchHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between p-3">
      <SearchBar />
    </div>
  )
}
