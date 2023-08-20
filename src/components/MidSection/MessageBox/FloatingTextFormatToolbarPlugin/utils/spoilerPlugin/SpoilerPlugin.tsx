import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import {
  COMMAND_PRIORITY_EDITOR,
  LexicalCommand,
  LexicalEditor,
  TextNode,
} from 'lexical'
import { useEffect } from 'react'
import SpoilerNode from './SpoilerNode'

function spoilerTransform(node: TextNode) {
  const textContent = node.getTextContent()
  if (/:spoiler:.*:spoiler:/.test(textContent)) {
    const spoilerText = new SpoilerNode(textContent)
    node.replace(spoilerText)
  }
}

export const TOGGLE_SPOILER: LexicalCommand<string> = {
  type: 'TOGGLE_SPOILER',
}

function useSpoilers(editor: LexicalEditor) {
  useEffect(() => {
    const removeTransform = editor.registerNodeTransform(
      TextNode,
      spoilerTransform
    )
    const removeCommand = editor.registerCommand(
      TOGGLE_SPOILER,
      () => {
        // check if node is spoiler
        const selection = getSelection()
        console.log(selection)

        // if (node instanceof SpoilerNode) {
        //   const text = node.getText()
        //   const textNode = new TextNode(text)
        //   node.replace(textNode)
        // } else if (node instanceof TextNode) {
        //   const spoilerNode = $createSpoilerNode(node.getTextContent())
        //   node.replace(spoilerNode)
        // }

        return true
      },
      COMMAND_PRIORITY_EDITOR
    )
    return () => {
      removeTransform()
      removeCommand()
    }
  }, [editor])
}

export default function SpoilerPlugin() {
  const [editor] = useLexicalComposerContext()
  useSpoilers(editor)
  return null
}
