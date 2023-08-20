import Info from './Info'
import InfoHeader from './InfoHeader'
import MediaList from './MediaList'

export default function DetailsColumn() {
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
