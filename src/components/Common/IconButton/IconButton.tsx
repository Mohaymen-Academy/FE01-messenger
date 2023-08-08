import { ReactElement } from 'react'

interface IconButtonProps {
  icon: ReactElement
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export default function IconButton({
  onClick,
  icon,
  type = 'button',
}: IconButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-600 focus:outline-none"
    >
      {icon}
    </button>
  )
}
