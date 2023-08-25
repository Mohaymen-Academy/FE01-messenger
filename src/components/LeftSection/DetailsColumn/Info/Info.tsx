import { FiAtSign } from 'react-icons/fi'
import { BsInfoCircle } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { storeStateTypes } from '@/types/types'
import InfoImage from '../../../Common/InfoImage'
import InfoRow from '../../../Common/InfoRow'

export default function Info() {
  const activeProfile = useSelector(
    (state: storeStateTypes) => state.activeChat
  )
  const details = useSelector((state: storeStateTypes) => state.LeftSection)
  const name = useSelector((state: storeStateTypes) => state.LeftSection.name)

  let infoRowComponent
  switch (activeProfile.type) {
    case 'PV':
      infoRowComponent = (
        <>
          <InfoRow
            title={details.username}
            subTitle="نام کاربری"
            icon={<FiAtSign className="h-6 w-6 text-gray-600" />}
          />

          <InfoRow
            title={details.bio}
            subTitle="بیوگرافی"
            icon={
              <BsInfoCircle className="h-6 w-6 fill-current text-gray-600" />
            }
          />
        </>
      )
      break
    case 'CHANNEL':
    case 'GROUP':
      infoRowComponent = (
        <InfoRow
          title={details.description}
          subTitle="اطلاعات"
          icon={<BsInfoCircle className="h-6 w-6 fill-current text-gray-600" />}
        />
      )
      break
    default:
      infoRowComponent = <></>
      break
  }
  return (
    <div className="right-0 flex w-96 flex-col border-gray-300 bg-primary/100 pb-4 max-sm:w-full xl:block">
      <InfoImage
        onlineStatus={activeProfile.profile.online}
        infoName={name}
        type={activeProfile.type}
        img={details.image}
        subscription={details.subscribeCount}
      />
      {infoRowComponent}
    </div>
  )
}
