import { useState, useContext } from 'react'
import classNames from 'classnames'
import { Context } from '@/components/RightSection/context/Context'
import ChatsColumn from './ChatsColumn/ChatsColumn'
import SettingsColumn from './SettingsColumn/SettingsColumn'
import { RightSectionOpen } from './context/responsiveContext'
import EditSettingsColumn from './ProfileSettingsColumn'

interface RightSectionProps {}

export default function RightSection({}: RightSectionProps) {
  const [settingsActivate, setSettingsActivate] = useState(false)
  const [profileSettingsActive, setProfileSettingsActive] = useState(false)

  const openProfileSettings = () => {
    setProfileSettingsActive(true)
  }
  const closeProfileSettings = () => {
    setProfileSettingsActive(false)
  }

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
      <Context.Provider value={openProfileSettings}>
        <SettingsColumn
          onClick={closeSettingsHandler}
          isActive={settingsActivate}
        />
      </Context.Provider>
      <Context.Provider value={closeProfileSettings}>
        <EditSettingsColumn isActive={profileSettingsActive} />
      </Context.Provider>
    </div>
  )
}
