import { createSlice } from '@reduxjs/toolkit'

export interface chatBoxType {
  id: string
  name: string
  image: string
  number: string
  bio: string
  userName: string
}

export interface ChatListSliceType {
  component: chatBoxType[]
}

export const ChatListSlice = createSlice({
  name: 'chatList',
  initialState: {
    chatBoxes: [],
  },
  reducers: {},
})

export default ChatListSlice
