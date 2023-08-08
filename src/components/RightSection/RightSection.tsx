import { useState } from 'react'
import IconButton from '../Common/IconButton/IconButton'
import TabButton from '../Common/TabButton/TabButton'
import ChatBox from './ChatBox'
import ChatList from './ChatList'
import ChatNav from './ChatNav'
import RightHeader from './RightHeader/RightHeader'
import ChatsColumn from './ChatsColumn/ChatsColumn'
import SettingsColumn from './SettingsColumn/SettingsColumn'

interface RightSectionProps {}

export default function RightSection({}: RightSectionProps) {
  const [settingsActivate, setSettingsActivate] = useState(false)
  const navMenuHandler = () => {
    setSettingsActivate(true)
  }
  const closeSettingsHandler = () => {
    setSettingsActivate(false)
  }
  return (
    <div className="relative  h-full w-96">
      <ChatsColumn onClick={navMenuHandler} isActive={!settingsActivate} />
      <SettingsColumn
        onClick={closeSettingsHandler}
        isActive={settingsActivate}
      />
    </div>
  )
}
