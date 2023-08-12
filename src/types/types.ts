import { ChatListSliceType } from '@/redux/slices/ChatListSlice/ChatListSlice'
import { UserSliceType } from '@/redux/slices/UserSlice/UserSlice'

export interface storeStateTypes {
  user: UserSliceType
  chatList: ChatListSliceType
}
