import { RefObject } from 'react'

export default function setCaretPosition(
  ref: RefObject<HTMLDivElement>,
  pos: number
) {
  if (!ref.current) return
  const el = ref.current

  Array.from(el.childNodes).every(child => {
    if (child.nodeType == 3 && child.nodeValue) {
      // console.log(child.nodeValue.length, pos)
      if (child.nodeValue.length >= pos) {
        // finally add our range
        const range = document.createRange()
        const sel = window.getSelection()
        range.setStart(child, pos)
        range.collapse(true)
        sel?.removeAllRanges()
        sel?.addRange(range)
        return false
      }
      pos -= child.nodeValue.length
    }
    return true
  })

  /* function SetCaretPosition(el, pos){

    // Loop through all child nodes
    for(var node of el.childNodes){
        if(node.nodeType == 3){ // we have a text node
            if(node.length >= pos){
                // finally add our range
                var range = document.createRange(),
                    sel = window.getSelection();
                range.setStart(node,pos);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
                return -1; // we are done
            }else{
                pos -= node.length;
            }
        }else{
            pos = SetCaretPosition(node,pos);
            if(pos == -1){
                return -1; // no need to finish the for loop
            }
        }
    }
    return pos; // needed because of recursion stuff
} */
}
export function processText(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&lt;\s*br\s*\/?s*&gt;/g, '<br />')
}

export function purifyChar(char: string): string {
  // if (char === '<') {
  //   return '&lt;'
  // }
  // if (char === '>') {
  //   return '&gt;'
  // }
  // if (char === '&') {
  //   return '&amp;'
  // }
  // if (char === '"') {
  //   return '&quot;'
  // }
  // if (char === "'") {
  //   return '&#039;'
  // }
  return char
}
export function getCaretCharacterOffsetWithin(element: HTMLDivElement) {
  let caretOffset = 0
  const doc = element.ownerDocument
  const win = doc.defaultView!
  let sel
  if (typeof win.getSelection != 'undefined') {
    sel = win.getSelection()!
    if (sel.rangeCount > 0) {
      const range = sel.getRangeAt(0)
      const preCaretRange = range.cloneRange()
      preCaretRange.selectNodeContents(element)
      preCaretRange.setEnd(range.endContainer, range.endOffset)
      caretOffset = preCaretRange.toString().length
    }
  } else if ((sel = doc.getSelection()) && sel.type != 'Control') {
    const textRange = sel.createRange()
    const preCaretTextRange = doc.body.createTextRange()
    preCaretTextRange.moveToElementText(element)
    preCaretTextRange.setEndPoint('EndToEnd', textRange)
    caretOffset = preCaretTextRange.text.length
  }
  return caretOffset
}
