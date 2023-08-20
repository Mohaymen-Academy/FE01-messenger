import { BsSearch } from 'react-icons/bs'

interface SearchColumnProps {
  onClick?: () => void
  onChange?: () => void
}

export default function SearchBar({ onClick, onChange }: SearchColumnProps) {
  return (
    <div
      onClick={onClick}
      className=" relative flex w-full items-center overflow-hidden pl-2  focus-within:text-gray-400"
    >
      <span className="absolute left-0 flex items-center pl-4">
        <button className="p-1">
          <BsSearch className="h-5 w-5 fill-current" />
        </button>
      </span>
      <input
        onChange={onChange}
        className="w-full rounded-lg border border-black  py-2 pr-3 text-sm text-gray-700 focus:border-blue-500 focus:bg-white focus:text-gray-900 focus:outline-none"
        placeholder="جستجو..."
      />
    </div>
  )
}
