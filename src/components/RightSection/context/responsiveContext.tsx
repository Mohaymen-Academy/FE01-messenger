import React, { Dispatch, SetStateAction, createContext, useState } from 'react'

export interface RightSectionOpenProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
const RightSectionOpen = createContext<{
  isOpen: boolean
  toggleOpen: () => void
}>({
  isOpen: false,
  toggleOpen(): void {
    throw new Error('Function not implemented.')
  },
})

function RightSectionProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
    console.log('test')
  }
  return (
    <RightSectionOpen.Provider value={{ isOpen, toggleOpen: toggleIsOpen }}>
      {children}
    </RightSectionOpen.Provider>
  )
}

export { RightSectionOpen, RightSectionProvider }
