import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { storeStateTypes } from '@/types/types'
import {
  channelLeftSectionService,
  channelMemberService,
  getLeftProfileService,
  getProfileService,
  leftSectionService,
} from '@/services/dataService'
import Info from './Info'
import InfoHeader from './InfoHeader'
import MediaList from './MediaList'

export default function DetailsColumn() {
  const activeProfile = useSelector(
    (state: storeStateTypes) => state.activeChat
  )
  useEffect(() => {
    if (activeProfile.type === 'GROUP' || activeProfile.type === 'CHANNEL') {
      channelLeftSectionService(activeProfile.id)
      channelMemberService(activeProfile.id)
    } else if (activeProfile.type === 'PV') {
      getLeftProfileService(activeProfile.profile.profileId ?? 0)
    }
  }, [activeProfile])
  return (
    <div className="absolute flex h-full flex-col bg-primary/100 max-sm:w-full">
      <InfoHeader type={activeProfile.type} />
      <div className="overflow-y-auto">
        <Info type={activeProfile.type} />
        <MediaList type={activeProfile.type} />
      </div>
    </div>
  )
}
