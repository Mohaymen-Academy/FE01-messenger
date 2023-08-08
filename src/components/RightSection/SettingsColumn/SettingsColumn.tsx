import { FiAtSign } from 'react-icons/fi'
import { BsTelephone, BsInfoCircle } from 'react-icons/bs'
import InfoImage from '@/components/Common/InfoImage'
import InfoRow from '@/components/Common/InfoRow'
import InfoHeader from '@/components/LeftSection/DetailsColumn/InfoHeader'
import img from '@/assets/download.jpeg'
import SettingsHeader from '../SettingsHeader/SettingsHeader'

interface SettingsColumnProps {
  isActive: boolean
  onClick: () => void
}

export default function SettingsColumn({
  isActive,
  onClick,
}: SettingsColumnProps) {
  return (
    <div
      style={{ right: isActive ? '0px' : '-384px' }}
      className="absolute right-[-384px] z-10 h-full w-96 border-r border-gray-300 bg-white shadow-xl transition-all duration-500 ease-in-out"
    >
      <SettingsHeader onClick={onClick} />
      <InfoImage onlineStatus="آنلاین" infoName="Ahmad" img={img} />
      <InfoRow
        title="mr_Hashemi@"
        subTitle="آیدی"
        icon={<FiAtSign className="h-6 w-6 text-gray-600" />}
      />
      <InfoRow
        title="989332905168+"
        subTitle="شماره همراه"
        icon={<BsTelephone className="h-6 w-6 fill-current text-gray-600" />}
      />
      <InfoRow
        title="Bio"
        subTitle="bio"
        icon={<BsInfoCircle className="h-6 w-6 fill-current text-gray-600" />}
      />
    </div>
  )
}
