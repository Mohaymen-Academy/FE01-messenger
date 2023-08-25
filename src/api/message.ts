import { messageType } from '@/redux/slices/MessageSlice/MessageSlice'
import { apiUrl } from '@/utils/constants'
import axiosInstance from './axiosInstance'

export const getMessages = (data: { chatId: string }) =>
  axiosInstance.get<{
    messages: messageType[]
    pinned: messageType
  }>(`${apiUrl}/message/${data.chatId}`)

export const sendMessage = (data: {
  message: string
  chatId: string
  type: string
}) =>
  axiosInstance.post(`${apiUrl}/message/${data.chatId}`, {
    text: data.message,
  })
export const pinMessage = (data: { messageId: string; chatId: string }) =>
  axiosInstance.post(`${apiUrl}/chat/${data.chatId}/pin/${data.messageId}`)
export const unpinMessage = (data: { messageId: string; chatId: string }) =>
  axiosInstance.delete(`${apiUrl}/chat/${data.chatId}/pin/${data.messageId}`)
