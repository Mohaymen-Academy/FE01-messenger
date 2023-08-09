import { useState } from 'react'
import TabButton from '@/components/Common/TabButton'

interface MediaNavProps {}

export default function MediaNav({}: MediaNavProps) {
  const [activate, setActivation] = useState(new Array(5))

  const changeIndexActivate = (index: number) => {
    const s = new Array(5).fill(false)
    s[index] = true
    setActivation(s)
  }

  const changeActive = (e: React.MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    const title = e.target.innerText
    if (title === 'رسانه') {
      changeIndexActivate(0)
    } else if (title === 'فایل ها') {
      changeIndexActivate(1)
    } else if (title === 'لینک') {
      changeIndexActivate(2)
    } else if (title === 'موسیقی') {
      changeIndexActivate(3)
    } else if (title === 'صدا') {
      changeIndexActivate(4)
    }
  }
  return (
    <div className="mb-1 flex select-none list-none flex-row items-center justify-around px-3">
      <TabButton onClick={changeActive} text="رسانه" active={activate[0]} />
      <TabButton onClick={changeActive} text="فایل ها" active={activate[1]} />
      <TabButton onClick={changeActive} text="لینک" active={activate[2]} />
      <TabButton onClick={changeActive} text="موسیقی" active={activate[3]} />
      <TabButton onClick={changeActive} text="صدا" active={activate[4]} />
    </div>
  )
}
