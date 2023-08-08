import { CgMenu } from 'react-icons/cg'

interface NavMenuProps {
  onClick: () => void
}

export default function NavMenu({ onClick }: NavMenuProps) {
  return (
    <>
      <button
        className="h-12 w-12 rounded-full p-2 text-gray-700"
        onClick={onClick}
      >
        <CgMenu className="h-6 w-6 hover:bg-gray-200" />
      </button>
    </>
  )
}
