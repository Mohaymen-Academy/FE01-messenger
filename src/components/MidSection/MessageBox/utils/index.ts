import escapeHtml from 'escape-html'
import { Text } from 'slate'

export default function serialize(node) {
  if (Text.isText(node) || node.type === 'mention') {
    let string = escapeHtml(node.text)
    if (node.bold) {
      string = `<strong>${string}</strong>`
    }
    return string
  }

  const children = node.children.map(n => serialize(n)).join('')

  switch (node.type) {
    case 'quote':
      return `<blockquote><p>${children}</p></blockquote>`
    case 'paragraph':
      return `<p>${children}</p>`
    case 'link':
      return `<a href="${escapeHtml(node.url)}">${children}</a>`
    case 'spoiler':
      return `<Spoiler>${children}</Spoiler>`
    default:
      return children
  }
}
