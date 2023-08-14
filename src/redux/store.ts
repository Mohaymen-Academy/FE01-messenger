import { configureStore } from '@reduxjs/toolkit'
// import serverRequestMiddleware from './middleWare'
import UserSlice from './slices/UserSlice/UserSlice'
import { ChatListSlice } from './slices/ChatListSlice'
import { ActiveChatSlice } from './slices/ActiveChatSlice'
import { UISlice } from './slices/UISlice'
import loginMiddleware from './middlewares/login'

export default configureStore({
  reducer: {
    user: UserSlice.reducer,
    chatList: ChatListSlice.reducer,
    activeChat: ActiveChatSlice.reducer,
    UI: UISlice.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(loginMiddleware),
  // getDefaultMiddleware().concat(serverRequestMiddleware),
})
