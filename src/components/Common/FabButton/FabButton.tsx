import { ReactElement } from 'react'

interface FabButtonProps {
  icon: ReactElement
  primary: boolean
}

export default function FabButton({ icon }: FabButtonProps) {
  return (
    <div className="sticky bottom-3 left-5 z-40 mb-6 ml-4 flex flex-row justify-end">
      <button className="ml-2 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-semibold text-white focus:outline-none">
        {icon}
      </button>
    </div>
  )
}
