import { json } from 'stream/consumers'
import { FiAtSign, FiLogOut } from 'react-icons/fi'
import {
  BsTelephone,
  BsInfoCircle,
  BsFillMoonStarsFill,
  BsSun,
} from 'react-icons/bs'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import InfoImage from '@/components/Common/InfoImage'
import InfoRow from '@/components/Common/InfoRow'
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
  const [darkmodeActive, setDarkModeActive] = useState(true)

  useEffect(() => {
    const darkMode = localStorage.getItem('theme')
    if (darkMode === 'true') {
      setDarkModeActive(true)
      document.documentElement.classList.add('dark')
    }
    if (darkMode === 'false') {
      setDarkModeActive(false)
    }
  }, [])

  const darkModeHandler = () => {
    if (!darkmodeActive) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'true')
      setDarkModeActive(true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'false')
      setDarkModeActive(false)
    }
  }
  return (
    <div
      style={{ right: isActive ? '0px' : '-384px' }}
      className="absolute right-[-384px] z-10 h-full w-96 border-r border-gray-300 bg-primary/100 shadow-xl transition-all duration-500 ease-in-out"
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
      <div className="mr-4 mt-[70px] flex w-[355px] items-center justify-start gap-2 rounded-lg pr-1  transition-all duration-300 ease-in-out">
        <div
          onClick={darkModeHandler}
          className="fill-current transition-all duration-1000 ease-in-out"
        >
          <BsFillMoonStarsFill
            className={classNames(
              'h-6 w-6',
              darkmodeActive ? 'hidden' : 'flex'
            )}
          />
          <BsSun
            className={classNames(
              'h-6 w-6 text-secondary',
              darkmodeActive ? 'flex' : 'hidden'
            )}
          />
        </div>
        <div className="text-slate-700">
          <p>تغییر به حالت {darkmodeActive ? 'روز' : 'شب'}</p>
        </div>
      </div>

      <button className="mr-3 mt-2 flex w-[355px] justify-start gap-2 rounded-lg py-2 pr-1 text-red-500 transition-all duration-300 ease-in-out hover:bg-logout hover:text-white">
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
