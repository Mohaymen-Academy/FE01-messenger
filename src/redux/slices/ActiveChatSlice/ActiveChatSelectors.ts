import { createSelector } from '@reduxjs/toolkit'
import { storeStateTypes } from '@/types/types'

const activeChatSelectors = {
  ActiveChat: createSelector(
    (state: storeStateTypes) => state.activeChat,
    activeChat => activeChat
  ),
}
export default activeChatSelectors
