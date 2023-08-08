import { ReactElement } from 'react'

interface IconButtonProps {
  icon: ReactElement
}

export default function IconButton({ icon }: IconButtonProps) {
  return (
    <div>
      <button className="rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-600 focus:outline-none">
        {icon}
      </button>
    </div>
  )
}
