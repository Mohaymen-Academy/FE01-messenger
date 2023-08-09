import { useState } from 'react'
import classNames from 'classnames'
import SearchColumn from '../Common/SearchColumn/SearchColumn'
import DetailsColumn from './DetailsColumn/DetailsColumn'

interface LeftSectionProps {
  active: boolean
  onClick: () => void
}

export default function LeftSection({ active, onClick }: LeftSectionProps) {
  return (
    <div
      className={classNames(
        'h-screen w-96 overflow-x-hidden bg-primary/100',
        active
          ? ''
          : 'hidden left-[-384px] transition-all duration-1000 ease-in-out'
      )}
    >
      <DetailsColumn onClick={onClick} />
      {/* <SearchColumn mode='message'/> */}
    </div>
  )
}
