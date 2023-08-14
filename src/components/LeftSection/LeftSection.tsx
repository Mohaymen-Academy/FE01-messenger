import classNames from 'classnames'
import DetailsColumn from './DetailsColumn/DetailsColumn'

interface LeftSectionProps {
  active: boolean
}

export default function LeftSection({ active }: LeftSectionProps) {
  return (
    <div
      className={classNames(
        'h-screen top-0 z-40 w-96 bg-primary/100 max-sm:max-w-[400px] absolute',
        active
          ? 'left-0 transition-all duration-500 ease-in-out'
          : 'left-[-384px] transition-all duration-500 ease-in-out'
      )}
    >
      <DetailsColumn />
      {/* <SearchColumn mode='message'/> */}
    </div>
  )
}
