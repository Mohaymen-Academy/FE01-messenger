import classNames from 'classnames'
import { ReactElement } from 'react'

interface IconButtonProps {
  icon: ReactElement
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
}

export default function IconButton({
  onClick,
  icon,
  type = 'button',
  className,
}: IconButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        className,
        'rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-600 focus:outline-none'
      )}
    >
      {icon}
    </button>
  )
}
