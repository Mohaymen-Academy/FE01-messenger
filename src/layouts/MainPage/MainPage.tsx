import { useState } from 'react'
import wallpaper from '@/assets/wp.jpg'
import { RightSectionProvider } from '@/components/RightSection/context/responsiveContext'
import LeftSection from '../../components/LeftSection/LeftSection'
import MidSection from '../../components/MidSection'
import RightSection from '../../components/RightSection/RightSection'

interface MainPageProps {}

export default function MainPage({}: MainPageProps) {
  const [activeDetails, setActiveDetails] = useState(true)
  const closeLeftSection = () => {
    setActiveDetails(false)
  }
  return (
    <div
      className="relative flex h-screen w-full overflow-hidden bg-gray-200 antialiased"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <RightSectionProvider>
        <RightSection />
      </RightSectionProvider>
      <MidSection />
      <LeftSection onClick={closeLeftSection} active={activeDetails} />
    </div>
  )
}
