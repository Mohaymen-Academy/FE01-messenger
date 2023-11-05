import { useSelector } from 'react-redux'
import wallpaper from '@/assets/login-wp.jpg'
import { RightSectionProvider } from '@/components/RightSection/context/responsiveContext'
import { storeStateTypes } from '@/types/types'
import Snack from '@/components/Common/Snack/Snack'
import LeftSection from '../../components/LeftSection/LeftSection'
import MidSection from '../../components/MidSection'
import RightSection from '../../components/RightSection/RightSection'

export default function MainPage() {
  const activeDetails = useSelector(
    (state: storeStateTypes) => state.UI.infoColumn
  )
  const activeChat = useSelector(
    (state: storeStateTypes) => state.UI.chatColumnActive
  )
  // console.log(activeChat)

  return (
    <div
      className="relative flex h-screen w-full overflow-hidden bg-cover bg-repeat antialiased"
      style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: '600px' }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gray-300/90" />
      <RightSectionProvider>
        <RightSection />
      </RightSectionProvider>
      <MidSection active={true} />
      <LeftSection active={activeDetails} />
      <Snack />
    </div>
  )
}
