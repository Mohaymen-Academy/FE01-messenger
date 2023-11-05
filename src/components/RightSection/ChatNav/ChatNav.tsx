import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import TabButton from '@/components/Common/TabButton'
import { UISlice } from '@/redux/slices/UISlice'

export default function ChatNav() {
  const [activate, setActivation] = useState<boolean[]>(new Array(5))
  const dispatch = useDispatch()
  const changeIndexActivate = (index: number) => {
    const s = new Array(5).fill(false)
    s[index] = true
    setActivation(s)
  }
  useEffect(() => {
    changeIndexActivate(0)
    dispatch(UISlice.actions.chatListHandler({ chatList: 'all' }))
  }, [])

  const changeActive = (e: React.MouseEvent<HTMLDivElement>) => {
    const title = e.currentTarget.innerText
    if (title === 'تمامی گفتگوها') {
      changeIndexActivate(0)
      dispatch(UISlice.actions.chatListHandler({ chatList: 'all' }))
    } else if (title === 'شخصی') {
      changeIndexActivate(1)
      dispatch(UISlice.actions.chatListHandler({ chatList: 'PV' }))
    } else if (title === 'گروه ها') {
      changeIndexActivate(2)
      dispatch(UISlice.actions.chatListHandler({ chatList: 'GROUP' }))
    } else if (title === 'کانال ها') {
      changeIndexActivate(3)
      dispatch(UISlice.actions.chatListHandler({ chatList: 'CHANNEL' }))
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
