import { configureStore } from '@reduxjs/toolkit'
// import serverRequestMiddleware from './middleWare'
import { UserSlice } from './slices/UserSlice/UserSlice'
import { ChatListSlice } from './slices/ChatListSlice'
import { ActiveChatSlice } from './slices/ActiveChatSlice'
import { UISlice } from './slices/UISlice'
import { MessageSlice } from './slices/MessageSlice'
import { SearchSlice } from './slices/SearchSlice'
import { LeftSectionSlice } from './slices/LeftSectionSlice'

export default configureStore({
  reducer: {
    user: UserSlice.reducer,
    chatList: ChatListSlice.reducer,
    activeChat: ActiveChatSlice.reducer,
    UI: UISlice.reducer,
    message: MessageSlice.reducer,
    search: SearchSlice.reducer,
    LeftSection: LeftSectionSlice.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(loginMiddleware),
  // getDefaultMiddleware().concat(serverRequestMiddleware),
})
