import { ActiveChatSliceType } from '@/redux/slices/ActiveChatSlice/ActiveChatSlice'
import { ChatListSliceType } from '@/redux/slices/ChatListSlice/ChatListSlice'
import { LeftSectionSliceType } from '@/redux/slices/LeftSectionSlice'
import { MessageSliceType } from '@/redux/slices/MessageSlice'
import { SearchSliceType } from '@/redux/slices/SearchSlice'
import { UISliceType } from '@/redux/slices/UISlice'
import { UserSliceType } from '@/redux/slices/UserSlice/UserSlice'

export interface storeStateTypes {
  user: UserSliceType
  chatList: ChatListSliceType
  activeChat: ActiveChatSliceType
  UI: UISliceType
  message: MessageSliceType
  search: SearchSliceType
  LeftSection: LeftSectionSliceType
}
