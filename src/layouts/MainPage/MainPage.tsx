import { useState } from 'react'
import wallpaper from '@/assets/wp.jpg'
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
      className="relative flex h-screen w-full overflow-hidden bg-gray-200 antialiased dark:bg-black"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <RightSection />
      <MidSection />
      <LeftSection onClick={closeLeftSection} active={activeDetails} />
    </div>
  )
}
