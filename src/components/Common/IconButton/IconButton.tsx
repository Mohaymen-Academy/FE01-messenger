import { ReactElement } from 'react'

interface IconButtonProps {
  icon: ReactElement
  onClick?: () => void
}

export default function IconButton({ onClick, icon }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-600 focus:outline-none"
    >
      {icon}
    </button>
  )
}
