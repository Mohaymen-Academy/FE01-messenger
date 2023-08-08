import classNames from 'classnames'
import { useTextWidth } from '@tag0/use-text-width'
import Checkmark from '@/components/Common/Checkmark/Checkmark'

interface MessageProps {
  self?: boolean
  message: string
  mode: 'loading' | 'sent' | 'seen'
  time: string
}

export default function Message({ self, message, mode, time }: MessageProps) {
  const oneLiner =
    useTextWidth({ text: message, font: '16px "Segoe UI"' }) < 350
  console.log(useTextWidth({ text: message, font: '16px "Segoe UI"' }))

  return (
    <div
      className={classNames(
        'my-2 max-w-[400px] relative text-black flex flex-row bg-white px-2 rounded-t-lg ',
        self
          ? 'self-start rounded-l-lg tail-right rtl'
          : 'self-end rounded-r-lg tail-left ltr',
        oneLiner ? 'w-fit' : 'w-full'
      )}
    >
      <span
        className={classNames(
          'max-w-full py-1',
          oneLiner ? 'w-fit whitespace-nowrap' : 'break-words w-0 grow'
        )}
        dir="auto"
      >
        {message}
      </span>
      <div className="mx-1 flex grow-0 flex-row items-end justify-end gap-1 pb-1 text-xs text-gray-400">
        {time}
        <div className={classNames(self ? 'left-2' : 'right-2')}>
          <Checkmark mode={mode} />
        </div>
      </div>
    </div>
  )
}
