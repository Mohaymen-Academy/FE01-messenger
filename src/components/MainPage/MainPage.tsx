import RightSection from '../RightSection/RightSection'

interface MainPageProps {}

export default function MainPage({}: MainPageProps) {
  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-gray-200 antialiased">
      <RightSection />
    </div>
  )
}
