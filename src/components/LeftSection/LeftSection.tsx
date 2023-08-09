import classNames from 'classnames'
import DetailsColumn from './DetailsColumn/DetailsColumn'

interface LeftSectionProps {
  active: boolean
  onClick: () => void
}

export default function LeftSection({ active, onClick }: LeftSectionProps) {
  return (
    <div
      className={classNames(
        'h-screen top-0 left-0 z-40 w-96 bg-primary/100 max-sm:max-w-[400px] absolute',
        active ? '' : 'left-[-384px] transition-all duration-1000 ease-in-out'
      )}
    >
      <DetailsColumn onClick={onClick} />
      {/* <SearchColumn mode='message'/> */}
    </div>
  )
}
