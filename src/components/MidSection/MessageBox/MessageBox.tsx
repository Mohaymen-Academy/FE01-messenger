import { BsEmojiLaughing } from 'react-icons/bs'
import {
  HtmlHTMLAttributes,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import { IoSend } from 'react-icons/io5'
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  Slate,
  withReact,
} from 'slate-react'
import { Editor, Element, Transforms, createEditor } from 'slate'
import ReactSpoiler from 'react-spoiler'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import FabButton from '@/components/Common/FabButton/FabButton'
import IconButton from '@/components/Common/IconButton/IconButton'
import { MessageSlice } from '@/redux/slices/MessageSlice'
import { activeChatSelectors } from '@/redux/slices/ActiveChatSlice'
import { sendMessageService } from '@/services/dataService'
import serialize from './utils'

const theme = {
  editor: 'w-full h-full',
  editorWrapper: 'w-full h-full',
}

export default function MessageBox() {
  // TODO use SLATE
  const [pickerOpen, setPickerOpen] = useState(false)
  const [toolboxOpen, setToolboxOpen] = useState(false)
  const dispatch = useDispatch()
  const activeChat = useSelector(activeChatSelectors.ActiveChat)

  const SpoilerElement = (props: { children: ReactNode | string }) => (
    <ReactSpoiler>{props.children}</ReactSpoiler>
  )

  const CustomEditor = {
    isBoldMarkActive(editor: Editor) {
      const marks = Editor.marks(editor)
      return marks ? marks.bold === true : false
    },

    isSpoilerBlockActive(editor: Editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'spoiler',
      })
      return !!match
    },

    toggleBoldMark(editor: Editor) {
      const isActive = CustomEditor.isBoldMarkActive(editor)
      if (isActive) {
        Editor.removeMark(editor, 'bold')
      } else {
        Editor.addMark(editor, 'bold', true)
      }
    },

    sendMessage(editor: Editor) {
      console.log(editor.children)
      console.log(serialize(editor))
      sendMessageService(
        serialize(editor) as string,
        activeChat.id?.toString(),
        activeChat.type
      )
      while (editor.children.length > 0) {
        Transforms.removeNodes(editor, {})
      }
      Transforms.insertNodes(editor, {
        type: 'paragraph',
        children: [{ text: '' }],
      })
    },

    toggleSpoilerBlock(editor: Editor) {
      const isActive = CustomEditor.isSpoilerBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'spoiler' },
        { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
      )
    },

    addEmoji(editor: Editor, emoji: { native: string }) {
      Transforms.insertText(editor, emoji.native)
      ReactEditor.focus(editor)
    },
  }

  const Leaf = props => (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'spoiler':
        return <SpoilerElement>{props.children}</SpoilerElement>
      default:
        return <p {...props.attributes}>{props.children}</p>
    }
  }, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  // const initialConfig = {
  //   namespace: 'MyEditor',
  //   theme,
  //   onError: (err: Error) => {
  //     console.error(err)
  //   },
  //   nodes: [SpoilerNode],
  // }
  // const [text, setText] = useState({
  //   message: '',
  //   processedMessage: '',
  //   caret: 0,
  // })

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]
  const [editor] = useState(() => withReact(createEditor()))
  const toggleEmojiPicker = useCallback(() => {
    setPickerOpen(!pickerOpen)
  }, [pickerOpen])

  // const addEmoji = useCallback((emoji: { native: string }) => {
  //   setText(text => ({ ...text, message: text.message + emoji.native }))
  // }, [])
  return (
    <div className="relative flex w-full max-w-2xl items-center self-center p-3 text-gray-600">
      <Slate
        editor={editor}
        initialValue={initialValue}
        onChange={() => {
          setToolboxOpen(
            editor.selection?.anchor.offset != editor.selection?.focus.offset
          )
        }}
      >
        <div className="flex items-center self-end pr-6">
          <FabButton
            onClick={() => {
              CustomEditor.sendMessage(editor)
            }}
            icon={<IoSend className="h-7 w-7" />}
          />
        </div>
        <div className="tail-right relative flex h-full w-full rounded-l-lg rounded-t-lg border-primary bg-primary  p-2">
          {/* {toolboxOpen && ( */}
          <div
            className={classNames(
              'absolute right-0 top-0 flex -translate-y-full flex-row rounded-md bg-primary transition-all ease-in-out',
              toolboxOpen ? '' : 'opacity-0 pointer-events-none'
            )}
          >
            <button
              className="rounded-r-md p-2 transition-all hover:bg-gray-400 hover:text-white"
              onMouseDown={event => {
                event.preventDefault()
                CustomEditor.toggleBoldMark(editor)
              }}
            >
              Bold
            </button>
            <button
              className="rounded-l-md p-2 transition-all hover:bg-gray-400 hover:text-white"
              onMouseDown={event => {
                event.preventDefault()
                CustomEditor.toggleSpoilerBlock(editor)
              }}
            >
              spoiler
            </button>
          </div>
          {/* )} */}
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            className="no-scrollbar relative h-full max-h-28 w-0 grow overflow-y-scroll rounded-lg p-1 text-base text-gray-900 placeholder:text-gray-700 focus:outline-none"
          />
          <div
            className="relative z-10 m-2 flex items-center self-end"
            onMouseEnter={e => {
              e.stopPropagation()
              toggleEmojiPicker()
            }}
            onMouseLeave={e => {
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
            {pickerOpen && (
              <div className="absolute left-0 top-0 z-20 flex w-0 grow -translate-y-full items-center justify-center text-right max-2xl:translate-x-44">
                <Picker
                  data={data}
                  onEmojiSelect={emoji => CustomEditor.addEmoji(editor, emoji)}
                  previewPosition="none"
                  showPreview={false}
                  showSkinTones={false}
                  searchPosition="none"
                />
              </div>
            )}
          </div>
        </div>
      </Slate>
    </div>
  )
}
