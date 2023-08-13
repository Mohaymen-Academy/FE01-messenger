import { BsEmojiLaughing, BsSend } from 'react-icons/bs'
import {
  FormEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { $getRoot, $getSelection } from 'lexical'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { TEXT_FORMAT_TRANSFORMERS } from '@lexical/markdown'
import FabButton from '@/components/Common/FabButton/FabButton'
import IconButton from '@/components/Common/IconButton/IconButton'
import FloatingTextFormatToolbarPlugin from './FloatingTextFormatToolbarPlugin'
import setCaretPosition, {
  getCaretCharacterOffsetWithin,
  processText,
  purifyChar,
} from './utils'
import SpoilerPlugin from './FloatingTextFormatToolbarPlugin/utils/spoilerPlugin/SpoilerPlugin'
import SpoilerNode from './FloatingTextFormatToolbarPlugin/utils/spoilerPlugin/SpoilerNode'

const theme = {
  editor: 'w-full h-full',
  editorWrapper: 'w-full h-full',
}

interface MessageBoxProps {}

export default function MessageBox({}: MessageBoxProps) {
  // TODO cleanup this component
  const [pickerOpen, setPickerOpen] = useState(false)

  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError: (err: Error) => {
      console.error(err)
    },
    nodes: [SpoilerNode],
  }

  const [text, setText] = useState({
    message: '',
    processedMessage: '',
    caret: 0,
  })

  const ref = useRef<HTMLDivElement>(null)

  const toggleEmojiPicker = useCallback(() => {
    setPickerOpen(!pickerOpen)
  }, [pickerOpen])

  const addEmoji = useCallback((emoji: { native: string }) => {
    setText(text => ({ ...text, message: text.message + emoji.native }))
  }, [])

  useLayoutEffect(() => {
    setCaretPosition(ref, text.caret)
  })

  return (
    <div className="relative flex w-full max-w-2xl items-center self-center p-3 text-gray-600">
      <div className="flex items-center self-end pr-6">
        <FabButton icon={<BsSend className="h-6 w-6 " />} />
      </div>
      <div className="tail-right relative flex h-full w-full rounded-l-lg rounded-t-lg  bg-white p-2">
        {/* <div
          className=" no-scrollbar h-full max-h-28 w-0 grow overflow-y-auto rounded-lg p-1 text-base text-gray-900 placeholder:text-gray-700 focus:outline-none"
          placeholder="پیام..."
          contentEditable
          ref={ref}
          onInput={e => {
            e.preventDefault()
            const caret = getCaretCharacterOffsetWithin(ref.current!)

            // Get last typed character
            const lastChar = purifyChar(
              String.fromCharCode(
                e.currentTarget.textContent!.charCodeAt(caret - 1)
              )
            )
            console.log(caret)
            console.log(purifyChar(lastChar))

            setText(text => ({
              ...text,
              // add lastchar to message at caret position
              message:
                text.message.slice(0, caret - 1) +
                lastChar +
                text.message.slice(caret - 1),
              caret,
            }))
          }}
          // dangerouslySetInnerHTML={{
          //   __html: DOMPurify.sanitize(`${text.message.toString()}`),
          // }}
        >
          {text.message}
        </div> */}
        <LexicalComposer initialConfig={initialConfig}>
          <MarkdownShortcutPlugin transformers={TEXT_FORMAT_TRANSFORMERS} />
          <div className="no-scrollbar h-full max-h-28 w-0 grow overflow-y-auto rounded-lg p-1 text-base text-gray-900 placeholder:text-gray-700 focus:outline-none">
            <RichTextPlugin
              contentEditable={<ContentEditable className="h-full w-full" />}
              placeholder={<div>Enter some text...</div>}
              ErrorBoundary={LexicalErrorBoundary}
            />
          </div>
          <HistoryPlugin />
          <FloatingTextFormatToolbarPlugin />
          <SpoilerPlugin />
        </LexicalComposer>
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
