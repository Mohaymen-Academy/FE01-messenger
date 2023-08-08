import Info from './Info'
import MediaList from './MediaList/MediaList'

interface DetailsColumnProps {}

export default function DetailsColumn({}: DetailsColumnProps) {
  return (
    <div className="absolute left-0 top-0 overflow-y-auto bg-gray-100">
      <Info />
      <MediaList />
    </div>
  )
}
