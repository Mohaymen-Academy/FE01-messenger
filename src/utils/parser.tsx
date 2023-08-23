import HTMLReactParser, { domToReact } from 'html-react-parser'
import ReactSpoiler from 'react-spoiler'

export function parseMessage(message: string) {
  return HTMLReactParser(message, {
    replace: domNode => {
      if (domNode.name && domNode.name == 'spoiler') {
        return <ReactSpoiler>{domToReact(domNode.children)}</ReactSpoiler>
      }
    },
  })
}
export function parseDate(date: string) {
  const now = new Date()
  const msgDate = new Date(date)
  if (now.getDate() == msgDate.getDate()) {
    return msgDate.toLocaleTimeString('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }
  if (now.getDate() - msgDate.getDate() == 1) {
    return 'دیروز'
  }
  if (now.getDate() - msgDate.getDate() < 7) {
    return msgDate.toLocaleDateString('fa-IR', {
      weekday: 'long',
    })
  }
  return msgDate.toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
