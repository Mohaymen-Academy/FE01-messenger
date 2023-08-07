import { ReactElement } from 'react'

interface FabButtonProps {
  icon: ReactElement
  primary: boolean
}

export default function FabButton({ icon }: FabButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 z-40 mb-6 ml-4">
      <button className="mr-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-semibold text-white focus:outline-none">
        {icon}
      </button>
    </div>
  )
}
