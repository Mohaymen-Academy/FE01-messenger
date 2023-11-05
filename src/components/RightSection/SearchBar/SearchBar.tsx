import { BsSearch } from 'react-icons/bs'


export default function SearchBar() {
  return (
    <div className=" relative flex w-full items-center overflow-hidden pl-2 text-gray-600 focus-within:text-gray-400">
      <span className="absolute left-0 flex items-center pl-4">
        <button className="p-1">
          <BsSearch className="h-5 w-5 fill-current" />
        </button>
      </span>
      <input
        className="w-full rounded-lg border border-transparent bg-gray-200 py-2 pr-3 text-sm text-white focus:border-blue-500 focus:bg-white focus:text-gray-900 focus:outline-none"
        placeholder="جستجو..."
      />
    </div>
  )
}
