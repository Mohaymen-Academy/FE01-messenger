import { BsEmojiLaughing, BsSend } from 'react-icons/bs'
import {
  FormEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import IconButton from '@/components/Common/IconButton/IconButton'
import FabButton from '@/components/Common/FabButton/FabButton'
import setCaretPosition from './utils/setPosition'

interface MessageBoxProps {}

export default function MessageBox({}: MessageBoxProps) {
  const [pickerOpen, setPickerOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [caret, setCaret] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const toggleEmojiPicker = useCallback(() => {
    setPickerOpen(!pickerOpen)
  }, [pickerOpen])
  const addEmoji = useCallback(
    (emoji: { native: string }) => {
      setMessage(message + emoji.native)
    },
    [message]
  )

  useEffect(() => {
    console.log(caret)
  }, [])

  return (
    <div className="relative flex w-full max-w-2xl items-center self-center p-3 text-gray-600">
      <div className="flex items-center self-end pr-6">
        <FabButton icon={<BsSend className="h-6 w-6 " />} />
      </div>
      <div className="tail-right relative flex h-full w-full rounded-l-lg rounded-t-lg  bg-white p-2">
        <div
          className=" no-scrollbar h-full max-h-28 w-0 grow overflow-y-auto rounded-lg p-1 text-base text-gray-900 placeholder:text-gray-700 focus:outline-none"
          placeholder="پیام..."
          contentEditable
          ref={ref}
          onInput={e => {
            setMessage(e.currentTarget.textContent ?? '')
            setCaret(e.currentTarget.textContent?.length ?? 0)
            setCaretPosition(ref, e.currentTarget.textContent?.length ?? 0)
          }}
          suppressContentEditableWarning
        >
          {message}
        </div>
        <div
          className="z-10 m-2 flex items-center self-end"
          onClick={e => {
            e.stopPropagation()
            toggleEmojiPicker()
          }}
        >
          <IconButton
            className="p-0 text-inherit hover:bg-inherit"
            icon={
              <BsEmojiLaughing className="h-6 w-6 text-inherit hover:text-blue-500" />
            }
          />
        </div>
        {pickerOpen && (
          <div className="z-20 flex w-0 grow items-center justify-center text-right">
            <Picker
              data={data}
              onEmojiSelect={addEmoji}
              previewPosition="none"
              onClickOutside={toggleEmojiPicker}
            />
          </div>
        )}
      </div>
    </div>
  )
}
