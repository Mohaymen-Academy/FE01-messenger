import { createSlice } from '@reduxjs/toolkit'

export interface chatBoxType {
  id: number
  name: string
  image: string // TODO
  online: boolean // TODO
  unReadMessage: number // TODO
  seen: boolean // TODO
  type: string
  lastMessageTime: string
  lastMessageText: string
  username: string
}

export interface ChatListSliceType {
  chatBoxes: chatBoxType[]
}
export const ChatListSlice = createSlice({
  name: 'chatList',
  initialState: {
    chatBoxes: [
      // {
      //   name: 'Ahmad',
      //   unReadMessage: 3,
      //   seen: true,
      //   userName: 'Mr.Hashemi',
      //   lastMessageTime: '12:00',
      //   online: true,
      //   textMessage: 'سلام',
      //   seenEnable: true,
      //   id: 2,
      //   phoneNumber: '+989332905168',
      //   bio: 'سلام دوستان',
      //   active: false,
      //   bgImageColor: 'blue',
      //   image: '',
      //   messagesList: [],
      // },
      // {
      //   name: 'Ahmad',
      //   unReadMessage: 1,
      //   seen: false,
      //   textMessage: 'سلام آقای هاشمی؟',
      //   userName: 'Mr.Hashemi',
      //   lastMessageTime: '12:00',
      //   online: false,
      //   seenEnable: true,
      //   id: 1,
      //   phoneNumber: '+989332905168',
      //   bio: 'سلام دوستان',
      //   active: false,
      //   bgImageColor: 'red',
      //   image: '',
      //   messagesList: [],
      // },
      // {
      //   name: 'Atefe',
      //   unReadMessage: 1,
      //   seen: false,
      //   textMessage: 'سلام آقای هاشمی؟',
      //   userName: 'Atefe',
      //   lastMessageTime: '12:00',
      //   online: false,
      //   seenEnable: true,
      //   id: 0,
      //   phoneNumber: '+989332905168',
      //   bio: 'سلام دوستان',
      //   active: false,
      //   bgImageColor: 'blue',
      //   image: '',
      //   messagesList: [],
      // },
      // {
      //   name: 'Mohammad',
      //   unReadMessage: 1,
      //   seen: false,
      //   textMessage: 'سلام آقای هاشمی؟',
      //   userName: 'Mohammad123',
      //   lastMessageTime: '12:00',
      //   online: true,
      //   seenEnable: false,
      //   id: 12,
      //   phoneNumber: '+989332905168',
      //   bio: 'سلام دوستان',
      //   active: false,
      //   bgImageColor: 'blue',
      //   image: '',
      //   messagesList: [],
      // },
      // {
      //   name: 'Ali',
      //   unReadMessage: 1,
      //   seen: false,
      //   textMessage: 'سلام آقای هاشمی؟',
      //   userName: 'Ali_110',
      //   lastMessageTime: '12:00',
      //   online: false,
      //   seenEnable: false,
      //   id: 0,
      //   phoneNumber: '+989332905168',
      //   bio: 'سلام دوستان',
      //   active: false,
      //   bgImageColor: 'blue',
      //   image: '',
      //   messagesList: [],
      // },
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
    },
    setActive: (
      state: ChatListSliceType,
      action: { payload: { id: number } }
    ) => {
      const { id } = action.payload
      state.chatBoxes = state.chatBoxes.map(box => ({
        ...box,
        active: box.id === id,
      }))
    },
    setChatBox: (
      state: ChatListSliceType,
      action: {
        payload: {
          id: number
          name: string
          chatType: string
          image: string
          lastMessage: string
          username: string
        }[]
      }
    ) => {
      state.chatBoxes = action.payload.map(item => ({
        id: item.id,
        name: item.name,
        image: item.image,
        online: true,
        unReadMessage: 0,
        seen: true,
        type: item.chatType,
        lastMessageTime: item.lastMessage,
        lastMessageText: item.lastMessage,
        username: item.username,
      }))
    },
  },
})

export default ChatListSlice
