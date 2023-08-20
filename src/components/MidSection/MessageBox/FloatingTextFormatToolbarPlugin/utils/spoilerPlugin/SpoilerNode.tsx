import { DecoratorNode, NodeKey } from 'lexical'
import { ReactNode } from 'react'
import ReactSpoiler from 'react-spoiler'

class SpoilerNode extends DecoratorNode<ReactNode> {
  text = ''

  dom: HTMLDivElement = document.createElement('div')

  constructor(text: string, key?: NodeKey) {
    super(key)
    this.text = text
    this.dom = document.createElement('div')
  }

  createDOM() {
    this.dom.contentEditable = 'true'
    this.dom.style.display = 'contents'
    return this.dom
  }

  getText(): string {
    return this.text
  }

  updateDOM(): boolean {
    this.dom.innerText = this.text
    return true
  }

  static getType(): string {
    return 'spoiler'
  }

  static clone() {
    return new SpoilerNode('')
  }

  decorate(): ReactNode {
    return <ReactSpoiler>{this.text}</ReactSpoiler>
  }
}

export function $isSpoilerNode(node: SpoilerNode) {
  return node instanceof SpoilerNode
}

export function $createSpoilerNode(spoilerText: string) {
  return new SpoilerNode(spoilerText)
}

export default SpoilerNode
