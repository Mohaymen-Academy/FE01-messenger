import classNames from 'classnames'
import { useTextWidth } from '@tag0/use-text-width'
import { useLayoutEffect, useRef, useState } from 'react'
import { Menu, MenuItem, Modal } from '@mui/material'
import { useDispatch } from 'react-redux'
import Checkmark from '@/components/Common/Checkmark/Checkmark'
import { parseMessage, parseDate } from '@/utils/parser'
import { pinMessageService } from '@/services/messageService'
import DUMMY_IMAGE from '@/assets/login-wp.jpg'
import { ImageType } from '@/redux/slices/MessageSlice/MessageSlice'
import { UISlice } from '@/redux/slices/UISlice'
import ForwardModal from '../ForwardModal/ForwardModal'

interface MessageProps {
  self?: boolean
  message: string
  mode: 'loading' | 'sent' | 'seen'
  time: string
  header?: { title: string; text: string; mode: 'forward' | 'reply' }
  image: ImageType
  pinMessage?: () => void
  id: string
  onReply?: () => void
}

export default function Message({
  self,
  message,
  mode,
  time,
  header,
  image,
  pinMessage,
  id,
  onReply,
}: MessageProps) {
  const [width, setWidth] = useState(0)
  const [menuOpen, setMenuOpen] = useState<{
    open: boolean
    x: number
    y: number
  }>({ open: false, x: 0, y: 0 })
  const [forwardOpen, setForwardOpen] = useState<undefined | string>(undefined)
  const ref = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const closeForward = () => {
    setForwardOpen(undefined)
  }
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
      onContextMenu={e => {
        e.preventDefault()
        e.stopPropagation()
        // show pin and reply modal in mouse location with mui
        setMenuOpen({ open: true, x: e.clientX, y: e.clientY })
      }}
    >
      <Modal open={!!forwardOpen} onClose={closeForward}>
        <div className="flex h-full w-full flex-col items-center justify-center py-20">
          <span className="text-xl text-white">فوروارد پیام به:</span>
          <ForwardModal messageId={id} onClose={closeForward} />
        </div>
      </Modal>
      <Menu
        open={menuOpen.open}
        onClose={() => setMenuOpen(s => ({ ...s, open: false }))}
        anchorReference="anchorPosition"
        anchorPosition={{ top: menuOpen.y, left: menuOpen.x }}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem
          onClick={() => {
            if (onReply) onReply()
            setMenuOpen(s => ({ ...s, open: false }))
          }}
        >
          Reply
        </MenuItem>
        {pinMessage && (
          <MenuItem
            onClick={() => {
              pinMessage()
              setMenuOpen(s => ({ ...s, open: false }))
            }}
          >
            Pin
          </MenuItem>
        )}
        <MenuItem
          onClick={() => {
            setMenuOpen(s => ({ ...s, open: false }))
            setForwardOpen(id)
          }}
        >
          Forward
        </MenuItem>
      </Menu>
      <div
        className={classNames(
          'relative text-primary max-w-[400px] flex flex-col px-2 rounded-t-lg ',
          self
            ? 'rounded-l-lg tail-right rtl bg-selfChatBg border-selfChatBg'
            : 'rounded-r-lg tail-left ltr bg-primary border-primary',
          oneLiner ? 'w-fit' : 'w-full'
        )}
      >
        {image && (
          <img
            src={`data:image/jpeg;base64,${image}`}
            alt="image here!"
            className="object-contain"
          />
        )}

        {header && (
          <div className="ml-1 mt-2 border-l-2 border-replyBorder pl-2 pr-1 text-sm">
            <span
              dir="auto"
              className="relative line-clamp-1 rounded-l-md text-left font-bold"
            >
              {header.mode === 'forward' ? 'فوروارد شده از: ' : ''}
              {header.title}
            </span>
            <span dir="auto" className="relative line-clamp-2 rounded-l-md">
              {parseMessage(header.text)}
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
            {parseMessage(message)}
          </span>
          <div className="mx-1 flex grow-0 flex-row items-end justify-end gap-1 pb-1 text-xs text-secondary">
            {parseDate(time)}
            {self && (
              <div className={classNames(self ? 'left-2' : 'right-2')}>
                <Checkmark mode={mode} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
