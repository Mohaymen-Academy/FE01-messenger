import classNames from 'classnames'

interface InitiateProfileProps {
  active: boolean
}

export default function InitiateProfile({ active }: InitiateProfileProps) {
  return (
    <div className={classNames('bg-red-500', active ? 'flex' : 'hidden')}>
        
    </div>
  )
}
