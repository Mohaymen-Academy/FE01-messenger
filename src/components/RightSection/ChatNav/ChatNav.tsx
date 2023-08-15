import React,{ useState } from 'react'
import TabButton from '@/components/Common/TabButton'


export default function ChatNav() {
  const [activate, setActivation] = useState(new Array(5))
  const changeIndexActivate = (index: number) => {
    const s = new Array(5).fill(false)
    s[index] = true
    setActivation(s)
  }
  const changeActive = (e: React.MouseEvent<HTMLDivElement>) => {
    const title = e.target.innerText
    if (title === 'تمامی گفتگوها') {
      changeIndexActivate(0)
    } else if (title === 'شخصی') {
      changeIndexActivate(1)
    } else if (title === 'گروه ها') {
      changeIndexActivate(2)
    } else if (title === 'کانال ها') {
      changeIndexActivate(3)
    }
  }
  return (
    <nav className="flex flex-row items-center  bg-primary/100 px-2">
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
