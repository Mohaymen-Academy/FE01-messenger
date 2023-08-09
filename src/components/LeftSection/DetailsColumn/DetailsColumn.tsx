import Info from './Info'
import MediaList from './MediaList/MediaList'

interface DetailsColumnProps {
  onClick: () => void
}

export default function DetailsColumn({ onClick }: DetailsColumnProps) {
  return (
    <div className="absolute overflow-y-auto bg-primary/100">
      <Info onClick={onClick} />
      <MediaList />
    </div>
  )
}
