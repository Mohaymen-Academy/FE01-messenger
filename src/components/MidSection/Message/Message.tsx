import classNames from 'classnames'
import { useTextWidth } from '@tag0/use-text-width'
import { useLayoutEffect, useRef, useState } from 'react'
import parse from 'html-react-parser'
import Checkmark from '@/components/Common/Checkmark/Checkmark'

interface MessageProps {
  self?: boolean
  message: string
  mode: 'loading' | 'sent' | 'seen'
  time: string
  header?: { title: string; text: string; mode: 'forward' | 'reply' }
}

export default function Message({
  self,
  message,
  mode,
  time,
  header,
}: MessageProps) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (ref.current?.getBoundingClientRect().width)
      setWidth(
        ref.current?.getBoundingClientRect().width > 340
          ? 340
          : ref.current.getBoundingClientRect().width - 70
      )
  }, [])
  const oneLiner =
    useTextWidth({ text: message, font: '16px "Segoe UI"' }) < width
  // console.log(useTextWidth({ text: message, font: '16px "Segoe UI"' }))

  return (
    <div
      ref={ref}
      className={classNames(
        'my-1 flex w-full flex-col rounded-t-lg text-primary',
        self ? 'items-start' : 'items-end'
      )}
    >
      <div
        className={classNames(
          'relative text-primary max-w-[400px] flex flex-col px-2 rounded-t-lg ',
          self
            ? 'rounded-l-lg tail-right rtl bg-selfChatBg border-selfChatBg'
            : 'rounded-r-lg tail-left ltr bg-primary border-primary',
          oneLiner ? 'w-fit' : 'w-full'
        )}
      >
        {header && (
          <div className="ml-1 mt-2 border-l-2 border-replyBorder pl-2 pr-1 text-sm">
            <span
              dir="auto"
              className="relative line-clamp-1 rounded-l-md font-bold"
            >
              {header.mode === 'forward' ? 'Forwarded from: ' : ''}
              {header.title}
            </span>
            <span dir="auto" className="relative line-clamp-2 rounded-l-md">
              {header.text}
            </span>
          </div>
        )}
        <div
          className={classNames(
            'relative text-primary max-w-[400px] flex flex-row rounded-t-lg py-1',
            self
              ? 'rounded-l-lg rtl bg-selfChatBg border-selfChatBg'
              : 'rounded-r-lg ltr bg-primary border-primary',
            oneLiner ? 'w-fit' : 'w-full'
          )}
        >
          <span
            className={classNames(
              'max-w-full',
              oneLiner ? 'w-fit whitespace-nowrap' : 'break-words w-0 grow'
            )}
            dir="auto"
          >
            {parse(message)}
          </span>
          <div className="mx-1 flex grow-0 flex-row items-end justify-end gap-1 pb-1 text-xs text-secondary">
            {time}
            <div className={classNames(self ? 'left-2' : 'right-2')}>
              <Checkmark mode={mode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
