import classNames from 'classnames'
import React from 'react'

interface TabButtonProps {
  text: string
  active: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export default function TabButton({ text, active, onClick }: TabButtonProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="mt-1 w-full rounded-t-lg bg-primary px-1 hover:bg-tabButton"
      >
        <div
          className={classNames(
            'flex items-center justify-center border-b-4 py-2  text-xs font-semibold text-primary/100 rounded-sm',
            active ? 'border-b-activeLink text-activeLink' : ''
          )}
        >
          {text}
        </div>
      </div>
    </>
  )
}
