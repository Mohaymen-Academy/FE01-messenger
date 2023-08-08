import { useState } from 'react'
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
    <div className="relative  h-full w-96  overflow-hidden">
      <ChatsColumn onClick={navMenuHandler} isActive={!settingsActivate} />
      <SettingsColumn
        onClick={closeSettingsHandler}
        isActive={settingsActivate}
      />
    </div>
  )
}
