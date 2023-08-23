import { useSelector } from 'react-redux'
import { storeStateTypes } from '@/types/types'
import Info from './Info'
import InfoHeader from './InfoHeader'
import MediaList from './MediaList'

export default function DetailsColumn() {
  const activeProfile = useSelector(
    (state: storeStateTypes) => state.activeChat
  )
  return (
    <div className="absolute flex h-full flex-col bg-primary/100 max-sm:w-full">
      <InfoHeader type={activeProfile.type} />
      <div className="overflow-y-auto">
        <Info type={activeProfile.type} />
        <MediaList />
      </div>
    </div>
  )
}
