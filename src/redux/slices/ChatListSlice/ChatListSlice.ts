import { createSlice } from '@reduxjs/toolkit'

export interface chatBoxType {
  id: number
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
        id: 2,
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
        id: 1,
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
        id: 0,
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
        id: 12,
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
        id: 0,
        phoneNumber: '+989332905168',
        bio: 'سلام دوستان',
        active: false,
        bgImageColor: 'blue',
        image: '',
        messagesList: [],
      },
    ],
    // chatBoxes: [
    //   {
    //     name: 'Ahmad',
    //     unReadMessage: 3,
    //     seen: true,
    //     userName: 'Mr.Hashemi',
    //     lastMessageTime: '12:00',
    //     online: true,
    //     textMessage: 'سلام',
    //     seenEnable: true,
    //     id: uuid(),
    //     phoneNumber: '+989332905168',
    //     bio: 'سلام دوستان',
    //     active: false,
    //     bgImageColor: 'blue',
    //   },
    //   {
    //     name: 'Ahmad',
    //     unReadMessage: 1,
    //     seen: false,
    //     textMessage: 'سلام آقای هاشمی؟',
    //     userName: 'Mr.Hashemi',
    //     lastMessageTime: '12:00',
    //     online: false,
    //     seenEnable: true,
    //     id: uuid(),
    //     phoneNumber: '+989332905168',
    //     bio: 'سلام دوستان',
    //     active: false,
    //     bgImageColor: 'red',
    //   },
    //   {
    //     name: 'Atefe',
    //     unReadMessage: 1,
    //     seen: false,
    //     textMessage: 'سلام آقای هاشمی؟',
    //     userName: 'Atefe',
    //     lastMessageTime: '12:00',
    //     online: false,
    //     seenEnable: true,
    //     id: uuid(),
    //     phoneNumber: '+989332905168',
    //     bio: 'سلام دوستان',
    //     active: false,
    //     bgImageColor: 'blue',
    //   },
    //   {
    //     name: 'Mohammad',
    //     unReadMessage: 1,
    //     seen: false,
    //     textMessage: 'سلام آقای هاشمی؟',
    //     userName: 'Mohammad123',
    //     lastMessageTime: '12:00',
    //     online: true,
    //     seenEnable: false,
    //     id: uuid(),
    //     phoneNumber: '+989332905168',
    //     bio: 'سلام دوستان',
    //     active: false,
    //     bgImageColor: 'blue',
    //   },
    //   {
    //     name: 'Ali',
    //     unReadMessage: 1,
    //     seen: false,
    //     textMessage: 'سلام آقای هاشمی؟',
    //     userName: 'Ali_110',
    //     lastMessageTime: '12:00',
    //     online: false,
    //     seenEnable: false,
    //     id: uuid(),
    //     phoneNumber: '+989332905168',
    //     bio: 'سلام دوستان',
    //     active: false,
    //     bgImageColor: 'blue',
    //   },
    // ],
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
      action: { payload: chatBoxType[] }
    ) => {
      state.chatBoxes = action.payload
    },
  },
})

export default ChatListSlice
