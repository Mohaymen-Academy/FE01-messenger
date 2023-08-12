import { configureStore } from '@reduxjs/toolkit'
import serverRequestMiddleware from './middleWare'
import UserSlice from './slices/UserSlice/UserSlice'
import { ChatListSlice } from './slices/ChatListSlice'

export default configureStore({
  reducer: {
    user: UserSlice.reducer,
    chatList: ChatListSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(serverRequestMiddleware),
})
