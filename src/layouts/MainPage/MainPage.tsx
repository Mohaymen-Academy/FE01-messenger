import { stat } from 'fs'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import wallpaper from '@/assets/wp.jpg'
import { RightSectionProvider } from '@/components/RightSection/context/responsiveContext'
import { storeStateTypes } from '@/types/types'
import LeftSection from '../../components/LeftSection/LeftSection'
import MidSection from '../../components/MidSection'
import RightSection from '../../components/RightSection/RightSection'

interface MainPageProps {}

export default function MainPage({}: MainPageProps) {
  const activeDetails = useSelector(
    (state: storeStateTypes) => state.UI.infoColumn
  )
  const activeMidColumn = useSelector(
    (state: storeStateTypes) => state.UI.midColumn
  )

  return (
    <div
      className="relative flex h-screen w-full overflow-hidden bg-gray-200 antialiased"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <RightSectionProvider>
        <RightSection />
      </RightSectionProvider>
      <MidSection active={activeMidColumn}/>
      <LeftSection active={activeDetails} />
    </div>
  )
}
