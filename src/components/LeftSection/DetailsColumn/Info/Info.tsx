import { FiAtSign } from 'react-icons/fi'
import { BsInfoCircle, BsTelephone } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import img from '@/assets/download.jpeg'
import { storeStateTypes } from '@/types/types'
import InfoHeader from '../InfoHeader'
import InfoImage from '../../../Common/InfoImage'
import InfoRow from '../../../Common/InfoRow'

interface InfoProps {
 
}

export default function Info({  }: InfoProps) {
  const activeId = useSelector((state: storeStateTypes) => state.activeChat.id)
  console.log(activeId)
  const activeChat = useSelector((state: storeStateTypes) =>
    state.chatList.chatBoxes.find(compo => compo.id === activeId)
  )
  console.log(activeChat)
  return (
    <div className="right-0 flex w-96 flex-col border-gray-300 bg-primary/100 pb-4 max-sm:w-full xl:block">
      <InfoHeader />
      <InfoImage
        onlineStatus={activeChat?.online}
        infoName={activeChat?.name}
      />
      <InfoRow
        title={activeChat?.userName}
        subTitle="آیدی"
        icon={<FiAtSign className="h-6 w-6 text-gray-600" />}
      />
      <InfoRow
        title={activeChat?.phoneNumber}
        subTitle="شماره همراه"
        icon={<BsTelephone className="h-6 w-6 fill-current text-gray-600" />}
      />
      <InfoRow
        title={activeChat?.bio}
        subTitle="بیوگرافی"
        icon={<BsInfoCircle className="h-6 w-6 fill-current text-gray-600" />}
      />
    </div>
  )
}
