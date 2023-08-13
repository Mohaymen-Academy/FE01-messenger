import {
  DecoratorNode,
  EditorConfig,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  TextNode,
} from 'lexical'
import { ReactComponentElement, ReactElement, ReactNode } from 'react'
import ReactSpoiler from 'react-spoiler'

export default class SpoilerNode extends DecoratorNode<ReactSpoiler> {
  text: string

  constructor(text: string, key?: NodeKey) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super(key)
    this.text = text
  }

  createDOM(config: EditorConfig) {
    const dom = document.createElement('div')
    dom.contentEditable = 'true'
    dom.style.display = 'contents'
    return dom
  }

  getText(): string {
    return this.text
  }

  updateDOM(): false {
    return false
  }

  static getType(): string {
    return 'spoiler'
  }

  static clone(node) {
    return new SpoilerNode(node.text, node.__key)
  }

  decorate(editor: LexicalEditor): ReactNode {
    return <ReactSpoiler>{this.text}</ReactSpoiler>
  }
}

export function $isSpoilerNode(node) {
  return node instanceof SpoilerNode
}

export function $createSpoilerNode(spoilerText) {
  return new SpoilerNode(spoilerText)
}
