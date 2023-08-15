import classNames from 'classnames'

interface TabButtonProps {
  text: string
  active: boolean
  onClick: () => void
}

export default function TabButton({ text, active, onClick }: TabButtonProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="mt-1 w-full rounded-t-lg bg-primary/100 px-1 hover:bg-gray-400"
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
