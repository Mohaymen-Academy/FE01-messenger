import { FiAtSign } from 'react-icons/fi'
import { BsInfoCircle, BsTelephone } from 'react-icons/bs'
import img from '@/assets/download.jpeg'
import InfoHeader from '../InfoHeader'
import InfoImage from '../../../Common/InfoImage'
import InfoRow from '../../../Common/InfoRow'

interface InfoProps {
  onClick: () => void
}

export default function Info({ onClick }: InfoProps) {
  return (
    <div className="right-0 flex w-96 flex-col border-gray-300 bg-primary/100 pb-4 max-sm:w-full xl:block">
      <InfoHeader onClick={onClick} />
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
        subTitle="بیوگرافی"
        icon={<BsInfoCircle className="h-6 w-6 fill-current text-gray-600" />}
      />
    </div>
  )
}
