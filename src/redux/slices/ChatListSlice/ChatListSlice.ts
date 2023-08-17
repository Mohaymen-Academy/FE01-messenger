import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

export interface chatBoxType {
  id: string
  name: string
  image: string
  phoneNumber?: string
  bio: string
  userName: string
  active: boolean
  messagesList: string[]
  online: boolean
  bgImageColor: string
  unReadMessage: number
  seen: boolean
  lastMessageTime: string
  textMessage: string
  seenEnable: boolean
}

export interface ChatListSliceType {
  chatBoxes: chatBoxType[]
}
export const ChatListSlice = createSlice({
  name: 'chatList',
  initialState: {
    chatBoxes: [
      {
        name: 'Ahmad',
        unReadMessage: 3,
        seen: true,
        userName: 'Mr.Hashemi',
        lastMessageTime: '12:00',
        online: true,
        textMessage: 'سلام',
        seenEnable: true,
        id: uuid(),
        phoneNumber: '+989332905168',
        bio: 'سلام دوستان',
        active: false,
        bgImageColor: 'blue',
        image: '',
        messagesList: [],
      },
      {
        name: 'Ahmad',
        unReadMessage: 1,
        seen: false,
        textMessage: 'سلام آقای هاشمی؟',
        userName: 'Mr.Hashemi',
        lastMessageTime: '12:00',
        online: false,
        seenEnable: true,
        id: uuid(),
        phoneNumber: '+989332905168',
        bio: 'سلام دوستان',
        active: false,
        bgImageColor: 'red',
        image: '',
        messagesList: [],
      },
      {
        name: 'Atefe',
        unReadMessage: 1,
        seen: false,
        textMessage: 'سلام آقای هاشمی؟',
        userName: 'Atefe',
        lastMessageTime: '12:00',
        online: false,
        seenEnable: true,
        id: uuid(),
        phoneNumber: '+989332905168',
        bio: 'سلام دوستان',
        active: false,
        bgImageColor: 'blue',
        image: '',
        messagesList: [],
      },
      {
        name: 'Mohammad',
        unReadMessage: 1,
        seen: false,
        textMessage: 'سلام آقای هاشمی؟',
        userName: 'Mohammad123',
        lastMessageTime: '12:00',
        online: true,
        seenEnable: false,
        id: uuid(),
        phoneNumber: '+989332905168',
        bio: 'سلام دوستان',
        active: false,
        bgImageColor: 'blue',
        image: '',
        messagesList: [],
      },
      {
        name: 'Ali',
        unReadMessage: 1,
        seen: false,
        textMessage: 'سلام آقای هاشمی؟',
        userName: 'Ali_110',
        lastMessageTime: '12:00',
        online: false,
        seenEnable: false,
        id: uuid(),
        phoneNumber: '+989332905168',
        bio: 'سلام دوستان',
        active: false,
        bgImageColor: 'blue',
        image: '',
        messagesList: [],
      },
    ],
  },
  reducers: {
    addBox: (
      state: ChatListSliceType,
      action: {
        payload: chatBoxType
      }
    ) => {
      state.chatBoxes.push(action.payload)
      // console.log(state.chatBoxes)
    },
    setActive: (
      state: ChatListSliceType,
      action: { payload: { id: string } }
    ) => {
      const { id } = action.payload
      state.chatBoxes = state.chatBoxes.map(box => ({
        ...box,
        active: box.id === id,
      }))
    },
  },
})

export default ChatListSlice
