import { useSelector } from 'react-redux'
import Info from './Info'
import InfoHeader from './InfoHeader'
import MediaList from './MediaList'
import { storeStateTypes } from '@/types/types'

export default function DetailsColumn() {
  const activeProfile = useSelector(
    (state: storeStateTypes) => state.activeChat
  )
  return (
    <div className="absolute flex h-full flex-col bg-primary/100 max-sm:w-full">
      <InfoHeader />
      <div className="overflow-y-auto">
        <Info />
        <MediaList />
      </div>
    </div>
  )
}
