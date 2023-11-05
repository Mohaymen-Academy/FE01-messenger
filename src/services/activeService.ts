import { ActiveChatSlice } from '@/redux/slices/ActiveChatSlice'
import { chatBoxType } from '@/redux/slices/ChatListSlice/ChatListSlice'
import store from '@/redux/store'
import { getMessagesService } from './dataService'

let activechatIntervalId: NodeJS.Timer | undefined
export const setActiveChatService = (
  id: number,
  type: string,
  profile: chatBoxType
) => {
  if (activechatIntervalId) {
    clearInterval(activechatIntervalId)
  }
  store.dispatch(ActiveChatSlice.actions.setActiveUser({ id, type, profile }))
  activechatIntervalId = getMessagesService(id.toString(), type)
}

export const stopUpdatingChat = () => {
  if (activechatIntervalId) {
    clearInterval(activechatIntervalId)
  }
}

export const setActiveChatWithoutCreatingChatService = (
  id: number,
  type: string,
  profile: chatBoxType
) => {
  store.dispatch(ActiveChatSlice.actions.setActiveUser({ id, type, profile }))
}
export default setActiveChatService
