import Info from './Info'
import MediaList from './MediaList/MediaList'

interface DetailsColumnProps {
  
}

export default function DetailsColumn({  }: DetailsColumnProps) {
  return (
    <div className="absolute overflow-y-auto bg-primary/100 max-sm:w-full">
      <Info />
      <MediaList />
    </div>
  )
}
