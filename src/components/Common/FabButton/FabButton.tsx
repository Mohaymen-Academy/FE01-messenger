import classNames from 'classnames'
import { ReactElement } from 'react'

interface FabButtonProps {
  icon: ReactElement
  primary?: boolean
}

export default function FabButton({ icon, primary }: FabButtonProps) {
  return (
    <button
      className={classNames(
        'transition-all ease-in ml-2 flex h-14 w-14 items-center justify-center rounded-full text-xl font-semibold focus:outline-none',
        primary ? 'bg-blue-500' : 'bg-white hover:bg-blue-500 hover:text-white'
      )}
    >
      {icon}
    </button>
  )
}
