import { createSlice } from '@reduxjs/toolkit'
import { chatBoxType } from '../ChatListSlice/ChatListSlice'

export interface ActiveChatSliceType {
  id: number
  type: string
  profile: chatBoxType
}
export const ActiveChatSlice = createSlice({
  name: 'activeChat',
  initialState: {
    id: -1,
    type: 'PV',
    profile: {
      id: 0,
      name: '',
      image: '',
      online: false,
      unReadMessage: 0,
      seen: false,
      type: '',
      lastMessageTime: '',
      lastMessageText: '',
      profileId: 0,
    },
  },
  reducers: {
    setActiveChat: (
      state: ActiveChatSliceType,
      action: { payload: { id: number; type: string } }
    ) => {
      const { id, type } = action.payload
      if (id === state.id && type === state.type) return
      state.id = id
      state.type = type
    },
    setActiveProfile: (
      state: ActiveChatSliceType,
      action: { payload: { profile: chatBoxType } }
    ) => {
      const { profile } = action.payload
      state.profile = profile
    },
    setActiveUser: (
      state: ActiveChatSliceType,
      action: { payload: { id: number; type: string; profile: chatBoxType } }
    ) => {
      const { id, type, profile } = action.payload
      state.id = id
      state.type = type
      state.profile = profile
    },
  },
})

export default ActiveChatSlice
