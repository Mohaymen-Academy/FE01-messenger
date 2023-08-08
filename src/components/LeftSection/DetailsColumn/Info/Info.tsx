import { FiAtSign } from 'react-icons/fi'
import { BsInfoCircle, BsTelephone } from 'react-icons/bs'
import img from '@/assets/download.jpeg'
import InfoHeader from '../InfoHeader'
import InfoImage from '../../../Common/InfoImage'
import InfoRow from '../../../Common/InfoRow'

interface InfoProps {}

export default function Info({}: InfoProps) {
  return (
    <div className="right-0 flex w-96 flex-col border-l border-gray-300 bg-white pb-4 xl:block">
      <InfoHeader />
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
