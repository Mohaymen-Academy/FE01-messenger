import TabButton from '@/components/Common/TabButton'
import { useState } from 'react'

interface ChatNavProps {}

export default function ChatNav({}: ChatNavProps) {
  const [activate, setActivation] = useState([false, false, false, false])
  const changeActive = (e: React.MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    const title = e.target.innerText
    if (title === 'تمامی گفتگوها') {
      setActivation([true, false, false, false])
    } else if (title === 'شخصی') {
      setActivation([false, true, false, false])
    } else if (title === 'گروه ها') {
      setActivation([false, false, true, false])
    } else if (title === 'کانال ها') {
      setActivation([false, false, false, true])
    }
  }
  return (
    <nav className="flex flex-row items-center px-2 border-b">
      <TabButton
        onClick={changeActive}
        text="تمامی گفتگوها"
        active={activate[0]}
      />
      <TabButton onClick={changeActive} text="شخصی" active={activate[1]} />
      <TabButton onClick={changeActive} text="گروه ها" active={activate[2]} />
      <TabButton onClick={changeActive} text="کانال ها" active={activate[3]} />
    </nav>
  )
}
