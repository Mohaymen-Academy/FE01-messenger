import LeftSection from '../LeftSection/LeftSection'
import MidSection from '../MidSection'
import RightSection from '../RightSection/RightSection'

interface MainPageProps {}

export default function MainPage({}: MainPageProps) {
  return (
    <div className="relative flex w-full h-screen overflow-hidden antialiased bg-gray-200">
      <RightSection />
      <MidSection />
      <LeftSection />
    </div>
  )
}
