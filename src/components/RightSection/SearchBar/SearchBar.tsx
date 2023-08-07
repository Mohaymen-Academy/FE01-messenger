import { BsSearch } from 'react-icons/bs'
interface SearchBarProps {}

export default function SearchBar({}: SearchBarProps) {
  return (
    <div className=" relative flex items-center w-full pl-2 overflow-hidden text-gray-600 focus-within:text-gray-400">
      <span className="absolute left-0 flex items-center pl-4">
        <button className="p-1">
          <BsSearch className="w-5 h-5 fill-current" />
        </button>
      </span>
      <input
        className="w-full py-2 pr-3 text-sm text-white bg-gray-200 border border-transparent rounded-lg focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
        placeholder="جستجو..."
      />
    </div>
  )
}
