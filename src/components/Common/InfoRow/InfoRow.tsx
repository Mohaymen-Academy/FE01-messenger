import { ReactElement } from 'react'

interface InfoRowProps {
  title: string
  subTitle: string
  icon: ReactElement
}

export default function InfoRow({ title, subTitle, icon }: InfoRowProps) {
  return (
    <div className="mt-4 flex w-full items-center px-3">
      <div className="rounded-full px-2 text-gray-500 hover:text-gray-600">
        {icon}
      </div>
      <div>
        <div className="ml-4 mr-auto text-sm font-semibold text-gray-800">
          {title}
        </div>
        <div className="ml-4 mr-auto mt-1 text-sm font-semibold leading-none text-gray-600">
          {subTitle}
        </div>
      </div>
    </div>
  )
}
