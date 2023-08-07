import Info from './Info'
import MediaList from './MediaList/MediaList'

interface DetailsColumnProps {}

export default function DetailsColumn({}: DetailsColumnProps) {
  return (
    <div className="overflow-y-auto bg-gray-100">
      <Info />
      <MediaList />
    </div>
  )
}
