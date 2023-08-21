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
        'transition-all ml-2 flex h-14 w-14 items-center justify-center rounded-full text-xl font-semibold focus:outline-none',
        primary
          ? 'bg-secondary hover:dark:bg-[#394079] dark:bg-secondary'
          : 'bg-primary hover:bg-secondary hover:text-primary text-secondary hover:dark:bg-secondary'
      )}
    >
      {icon}
    </button>
  )
}
