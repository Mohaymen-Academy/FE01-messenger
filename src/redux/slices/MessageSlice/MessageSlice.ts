import { createSlice } from '@reduxjs/toolkit'

interface baseMessageType {
  id: string
  sender: string
  type: string
  text: string
  createdAt: string
  self?: boolean
}
interface textMessageType extends baseMessageType {
  text: string
}
interface imageMessageType extends baseMessageType {
  image: string
}
export type messageType = textMessageType | imageMessageType

export interface MessageSliceType {
  chats: {
    id: string
    messages: messageType[]
  }[]
}
export const MessageSlice = createSlice({
  name: 'message',
  initialState: {
    chats: [
      {
        id: '1',
        messages: [
          {
            id: '1',
            sender: '1',
            type: 'text',
            text: 'Hello',
            createdAt: new Date().toISOString(),
          } as messageType,
        ],
      },
    ],
  },

  reducers: {
    setData: (
      state: MessageSliceType,
      action: {
        payload: {
          id: string
          messages: messageType[]
        }
      }
    ) => {
      const { id, messages } = action.payload
      const index = state.chats.findIndex(chat => chat.id == id)
      if (index === -1) {
        state.chats.push({ id, messages })
      } else {
        state.chats[index].messages = messages
      }
    },
    sendMessage: (
      state: MessageSliceType,
      action: {
        payload: {
          message: string
          chatId: string
        }
      }
    ) => {
      const { message, chatId } = action.payload
      const index = state.chats.findIndex(chat => chat.id == chatId)
      if (index === -1) {
        state.chats.push({
          id: chatId,
          messages: [],
        })
      } else {
        state.chats[index].messages.push({
          id: '1',
          sender: '1',
          type: 'text',
          text: message,
          createdAt: new Date().toISOString(),
        })
      }
    },
  },
})

export default MessageSlice
