import SearchColumn from '../Common/SearchColumn/SearchColumn'
import DetailsColumn from './DetailsColumn/DetailsColumn'

interface LeftSectionProps {}

export default function LeftSection({}: LeftSectionProps) {
  return (
    <div className="relative h-screen w-96 overflow-x-hidden">
      <DetailsColumn />
      {/* <SearchColumn mode='message'/> */}
    </div>
  )
}

