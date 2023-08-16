import classNames from 'classnames'
import { ReactElement } from 'react'

interface FabButtonProps {
  icon: ReactElement
  primary?: boolean
  onClick?: () => void
}

export default function FabButton({ icon, primary, onClick }: FabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'transition-all ease-in ml-2 flex h-14 w-14 items-center justify-center rounded-full text-xl font-semibold focus:outline-none',
        primary
          ? 'bg-blue-500'
          : 'bg-primary hover:bg-blue-500 hover:text-primary text-secondary'
      )}
    >
      {icon}
    </button>
  )
}
