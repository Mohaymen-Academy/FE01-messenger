import { CgMenu } from 'react-icons/cg'

interface NavMenuProps {
  onClick: () => void
}

export default function NavMenu({ onClick }: NavMenuProps) {
  return (
    <>
      <button
        className="h-12 w-12 rounded-full bg-primary/100 text-gray-700"
        onClick={onClick}
      >
        <CgMenu className="h-9 w-9 rounded-full p-1 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600" />
      </button>
    </>
  )
}
