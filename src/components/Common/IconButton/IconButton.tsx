import { FaPen } from 'react-icons/fa'
interface IconButtonProps {}

export default function IconButton({}: IconButtonProps) {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-40 mb-6 ml-4">
        <button className="flex items-center justify-center w-14 h-14 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full focus:outline-none flex-no-shrink">
          <FaPen className="w-5 h-5 text-white fill-current" />
        </button>
      </div>
    </>
  )
}
