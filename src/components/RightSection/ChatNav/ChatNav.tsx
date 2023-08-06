import TabButton from '@/components/Common/TabButton'
import React from 'react'

interface ChatNavProps {}

export default function ChatNav({}: ChatNavProps) {
  return (
    <div className="border-b shadow-bot">
      <ul className="flex flex-row items-center inline-block px-2 list-none select-none">
        <TabButton text="تمامی گفتگوها" active={true} />
        <TabButton text="شخصی" active={false} />
        <TabButton text="گروه ها" active={false} />
        <TabButton text="کانال ها" active={false} />
      </ul>
    </div>
  )
}
