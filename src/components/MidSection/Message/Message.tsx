import classNames from 'classnames'
import { useTextWidth } from '@tag0/use-text-width'
import { useLayoutEffect, useRef, useState } from 'react'
import Checkmark from '@/components/Common/Checkmark/Checkmark'

interface MessageProps {
  self?: boolean
  message: string
  mode: 'loading' | 'sent' | 'seen'
  time: string
}

export default function Message({ self, message, mode, time }: MessageProps) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (ref.current?.getBoundingClientRect().width)
      setWidth(
        ref.current?.getBoundingClientRect().width > 350
          ? 350
          : ref.current.getBoundingClientRect().width - 70
      )
  }, [])
  const oneLiner =
    useTextWidth({ text: message, font: '16px "Segoe UI"' }) < width
  console.log(useTextWidth({ text: message, font: '16px "Segoe UI"' }))

  return (
    <div
      ref={ref}
      className={classNames(
        'my-1 flex w-full w-full flex-row rounded-t-lg text-primary',
        self ? 'justify-start' : 'justify-end'
      )}
    >
      <div
        className={classNames(
          'relative text-primary max-w-[400px] flex flex-row px-2 rounded-t-lg ',
          self
            ? 'rounded-l-lg tail-right rtl bg-selfChatBg border-selfChatBg'
            : 'rounded-r-lg tail-left ltr bg-primary border-primary',
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
        <div className="mx-1 flex grow-0 flex-row items-end justify-end gap-1 pb-1 text-xs text-secondary">
          {time}
          <div className={classNames(self ? 'left-2' : 'right-2')}>
            <Checkmark mode={mode} />
          </div>
        </div>
      </div>
    </div>
  )
}
