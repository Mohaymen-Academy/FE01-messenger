import { ReactElement } from 'react'

interface InfoRowProps {
  title: string
  subTitle: string
  icon: ReactElement
}

export default function InfoRow({ title, subTitle, icon }: InfoRowProps) {
  return (
    <div className="mt-4 flex w-full items-center px-3">
      <div className="rounded-full px-2 text-secondary hover:text-secondary">
        {icon}
      </div>
      <div>
        <div
          dir="auto"
          className="ml-4 mr-auto text-sm font-semibold text-primary"
        >
          {title}
        </div>
        <div className="ml-4 mr-auto mt-1 text-sm font-semibold leading-none text-secondary">
          {subTitle}
        </div>
      </div>
    </div>
  )
}
