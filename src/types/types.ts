import { ActiveChatSliceType } from '@/redux/slices/ActiveChatSlice'
import { ChatListSliceType } from '@/redux/slices/ChatListSlice/ChatListSlice'
import { UISliceType } from '@/redux/slices/UISlice'
import { UserSliceType } from '@/redux/slices/UserSlice/UserSlice'

export interface storeStateTypes {
  user: UserSliceType
  chatList: ChatListSliceType
  activeChat: ActiveChatSliceType
  UI: UISliceType
}
