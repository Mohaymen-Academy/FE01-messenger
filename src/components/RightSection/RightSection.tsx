import { useState } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { storeStateTypes } from '@/types/types'
import { UISlice } from '@/redux/slices/UISlice'
import ChatsColumn from './ChatsColumn/ChatsColumn'
import SettingsColumn from './SettingsColumn/SettingsColumn'
import EditSettingsColumn from './ProfileSettingsColumn'

export default function RightSection() {
  const dispatch = useDispatch()
  const [settingsActivate, setSettingsActivate] = useState(false)
  const chatColumnActive = useSelector(
    (state: storeStateTypes) => state.UI.chatColumnActive
  )
  const profileSettingsActive = useSelector(
    (state: storeStateTypes) => state.UI.profileSettings
  )
  const shouldClose = useSelector(
    (state: storeStateTypes) => state.UI.midColumn
  )
  
  const navMenuHandler = () => {
    setSettingsActivate(true)
    dispatch(UISlice.actions.chatColumnHandler(false))
  }
  const closeSettingsHandler = () => {
    setSettingsActivate(false)
    dispatch(UISlice.actions.chatColumnHandler(true))
  }

  return (
    <div
      className={classNames(
        'relative right-0 transition-all duration-500 top-0 h-full w-96 overflow-hidden bg-primary text-primary max-sm:absolute max-sm:z-30 max max-sm:max-w-[400px]',
        shouldClose ? 'max-sm:-right-full' : ''
      )}
    >
      <ChatsColumn onClick={navMenuHandler} isActive={chatColumnActive} />
      <SettingsColumn
        onClick={closeSettingsHandler}
        isActive={settingsActivate}
      />

      <EditSettingsColumn isActive={profileSettingsActive} />
    </div>
  )
}
