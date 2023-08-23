import { createSlice } from '@reduxjs/toolkit'

export type ImageType = string | null | undefined

interface baseMessageType {
  id: string
  fullName: string
  type: string
  text: string
  createdAt: string
  self?: boolean
  file: ImageType
}
// interface textMessageType extends baseMessageType {
//   text: string
// }
// interface imageMessageType extends baseMessageType {
//   image: string
// }
export type messageType = baseMessageType

export interface MessageSliceType {
  chats: {
    id: string
    messages: messageType[]
    pin?: messageType
  }[]
}
export const MessageSlice = createSlice({
  name: 'message',
  initialState: {
    chats: [],
  },

  reducers: {
    setData: (
      state: MessageSliceType,
      action: {
        payload: {
          id: string
          messages: messageType[]
          pin?: messageType
        }
      }
    ) => {
      const { id, messages, pin } = action.payload
      const index = state.chats.findIndex(chat => chat.id == id)
      if (index === -1) {
        state.chats.push({ id, messages, pin })
      } else if (messages.length > state.chats[index].messages.length)
        state.chats[index].messages = messages
      if (pin) state.chats[index].pin = pin
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
          pin: undefined,
        })
      } else {
        state.chats[index].messages.push({
          id: '1',
          fullName: '1',
          type: 'text',
          text: message,
          self: true,
          createdAt: new Date().toISOString(),
        })
      }
    },

    pinMessage: (
      state: MessageSliceType,
      action: {
        payload: {
          message: messageType
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
          pin: message,
        })
      } else {
        state.chats[index].pin = message
      }
    },
  },
})

export default MessageSlice
