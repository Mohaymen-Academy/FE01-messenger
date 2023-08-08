import { CgMenu } from 'react-icons/cg'

interface NavMenuProps {}

export default function NavMenu({}: NavMenuProps) {
  return (
    <>
      <button className="h-12 w-12 rounded-full p-2 text-gray-700 ">
        <CgMenu className="h-6 w-6 hover:bg-gray-200" />
      </button>
    </>
  )
}
