import { FiAtSign, FiLogOut } from 'react-icons/fi'
import { BsTelephone, BsInfoCircle, BsFillMoonStarsFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
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
        subTitle="بیوگرافی"
        icon={<BsInfoCircle className="h-6 w-6 fill-current text-gray-600" />}
      />
      <button className="mr-4 mt-8 flex w-[355px] justify-start gap-2 rounded-lg py-2 pr-1  transition-all duration-300 ease-in-out ">
        <div className="fill-current">
          <BsFillMoonStarsFill className={classNames("h-6 w-6",)} />
          <FaSun className="hidden h-6 w-6" />
        </div>
        <div className="text-slate-700">
          <p>تغییر به حالت شب</p>
        </div>
      </button>

      <button className="mr-3 mt-2 flex w-[355px] justify-start gap-2 rounded-lg py-2 pr-1 text-red-500 transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white">
        <div className="fill-current">
          <FiLogOut className="h-7 w-7" />
        </div>
        <div>
          <p>خروج از حساب کاربری</p>
        </div>
      </button>
    </div>
  )
}
