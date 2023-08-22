import { ActiveChatSlice } from '@/redux/slices/ActiveChatSlice'
import { chatBoxType } from '@/redux/slices/ChatListSlice/ChatListSlice'
import store from '@/redux/store'
import { getMessagesService } from './dataService'

export const setActiveChatService = (
  id: number,
  type: string,
  profile: chatBoxType
) => {
  store.dispatch(ActiveChatSlice.actions.setActiveUser({ id, type, profile }))
  getMessagesService(id.toString(), type)
}
export const setActiveChatWithoutCreatingChatService = (
  id: number,
  type: string,
  profile: chatBoxType
) => {
  store.dispatch(ActiveChatSlice.actions.setActiveUser({ id, type, profile }))
}
export default setActiveChatService
