import Info from './Info'
import MediaList from './MediaList/MediaList'

export default function DetailsColumn() {
  return (
    <div className="absolute overflow-y-auto bg-primary/100 max-sm:w-full">
      <Info />
      <MediaList />
    </div>
  )
}
