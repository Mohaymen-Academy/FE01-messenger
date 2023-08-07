import classNames from 'classnames'
import Checkmark from '@/components/Common/Checkmark/Checkmark'

interface MessageProps {
  self?: boolean
  message: string
  mode: 'loading' | 'sent' | 'seen'
  time: string
}

export default function Message({ self, message, mode, time }: MessageProps) {
  return (
    <div
      className={classNames(
        'my-2 w-fit relative text-black flex flex-row',
        self ? 'self-start' : 'self-end',
        self ? 'tail-right' : 'tail-left'
      )}
      dir="auto"
    >
      {message}
      <div className="mx-1 flex flex-col justify-end align-text-bottom text-xs">
        {time}
      </div>
      <div
        className={classNames('absolute bottom-1', self ? 'left-2' : 'right-2')}
      >
        <Checkmark mode={mode} />
      </div>
    </div>
  )
}
