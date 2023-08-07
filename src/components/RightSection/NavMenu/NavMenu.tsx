import { CgMenu } from 'react-icons/cg'
interface NavMenuProps {}

export default function NavMenu({}: NavMenuProps) {
  return (
    <>
      <button className="p-2 text-gray-700 rounded-full h-12 w-12 ">
        <CgMenu className="h-6 w-6 hover:bg-gray-200" />
      </button>
    </>
  )
}
