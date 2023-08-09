import { useState, useContext } from 'react'
import classNames from 'classnames'
import ChatsColumn from './ChatsColumn/ChatsColumn'
import SettingsColumn from './SettingsColumn/SettingsColumn'
import { RightSectionOpen } from './context/responsiveContext'

interface RightSectionProps {}

export default function RightSection({}: RightSectionProps) {
  const [settingsActivate, setSettingsActivate] = useState(false)
  const context = useContext(RightSectionOpen)

  const navMenuHandler = () => {
    setSettingsActivate(true)
  }
  const closeSettingsHandler = () => {
    setSettingsActivate(false)
  }
  return (
    <div
      className={classNames(
        'relative right-0 transition-all duration-500 top-0 h-full w-96 overflow-hidden bg-primary/100 text-primary/100 max-sm:absolute max-sm:z-30 max max-sm:max-w-[400px]',
        !context.isOpen ? 'max-sm:-right-full' : ''
      )}
    >
      <ChatsColumn onClick={navMenuHandler} isActive={!settingsActivate} />
      <SettingsColumn
        onClick={closeSettingsHandler}
        isActive={settingsActivate}
      />
    </div>
  )
}
