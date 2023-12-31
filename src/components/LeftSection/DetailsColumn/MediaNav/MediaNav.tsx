import React, { useState } from 'react'
import TabButton from '@/components/Common/TabButton'

interface MediaNavProps {
  type: 'PV' | 'CHANNEL' | 'GROUP'
}
export default function MediaNav({ type }: MediaNavProps) {
  const [activate, setActivation] = useState<boolean[]>(new Array(5))

  const changeIndexActivate = (index: number) => {
    const s = new Array(5).fill(false)
    s[index] = true
    setActivation(s)
  }

  const changeActive = (e: React.MouseEvent<HTMLDivElement>) => {
    const title = e.currentTarget.innerText
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
  switch (type) {
    case 'PV':
      return (
        <div className="mb-1 flex select-none list-none flex-row items-center justify-around px-3">
          <TabButton onClick={changeActive} text="رسانه" active={activate[0]} />
          <TabButton
            onClick={changeActive}
            text="فایل ها"
            active={activate[1]}
          />
          <TabButton onClick={changeActive} text="لینک" active={activate[2]} />
          <TabButton
            onClick={changeActive}
            text="موسیقی"
            active={activate[3]}
          />
          <TabButton onClick={changeActive} text="صدا" active={activate[4]} />
        </div>
      )
      break
    default:
      return (
        <div className="mb-1 flex select-none list-none flex-row items-center justify-around px-3">
          <TabButton onClick={changeActive} text="اعضا" active={activate[0]} />
        </div>
      )
  }
}
