import { ReactElement } from 'react'

interface IconButtonProps {
  icon: ReactElement
  type?: 'button' | 'submit' | 'reset'
}

export default function IconButton({ icon, type = 'button' }: IconButtonProps) {
  return (
    <div>
      <button
        type={type}
        className="rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-600 focus:outline-none"
      >
        {icon}
      </button>
    </div>
  )
}
