import { stat } from 'fs'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import wallpaper from '@/assets/login-wp.jpg'
import { RightSectionProvider } from '@/components/RightSection/context/responsiveContext'
import { storeStateTypes } from '@/types/types'
import Snack from '@/components/Common/Snack/Snack'
import LeftSection from '../../components/LeftSection/LeftSection'
import MidSection from '../../components/MidSection'
import RightSection from '../../components/RightSection/RightSection'

interface MainPageProps {}

export default function MainPage({}: MainPageProps) {
  const activeDetails = useSelector(
    (state: storeStateTypes) => state.UI.infoColumn
  )

  return (
    <div
      className="relative flex h-screen w-full overflow-hidden bg-gray-200 bg-cover bg-repeat antialiased"
      style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: '600px' }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-primary/5" />
      <RightSectionProvider>
        <RightSection />
      </RightSectionProvider>
      <MidSection active={true} />
      <LeftSection active={activeDetails} />
      <Snack />
    </div>
  )
}
