import { AxiosPromise } from 'axios'
import { apiUrl } from '@/utils/constants'
import { messageType } from '@/redux/slices/MessageSlice/MessageSlice'
import axiosInstance from './axiosInstance'

export const chatListData = () =>
  axiosInstance.get<
    {
      chatId: number
      name: string
      chatType: string
      image: string
      lastMessage: {
        data: string
        sentAt: string
      }
      username: string
    }[]
  >(`${apiUrl}/subscribe`)

export const initiateProfile = (data: {
  username: string
  firstName: string
  lastName: string
  bio: string
  photoId: number
}): AxiosPromise =>
  axiosInstance.post(`${apiUrl}/profile`, {
    ...data,
  })

export const usernameValidation = (data: { username: string }): AxiosPromise =>
  axiosInstance.get(`${apiUrl}/profile/username`, {
    params: { search: data.username },
  })

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

export const createChat = (data: { profileId: string }) =>
  axiosInstance.post(`${apiUrl}/chat/pv/${data.profileId}`)

export const myProfile = (): AxiosPromise<{
  username: string
  firstName: string
  lastName: string
  bio: string
  photo: string
}> => axiosInstance.get(`${apiUrl}/profile/me`)

export const getProfile = (
  id: string
): AxiosPromise<{
  username: string
  firstName: string
  lastName: string
  bio: string
}> => axiosInstance.get(`${apiUrl}/profile/${id}`)

export const uploadFile = (data: { file: FormData }) =>
  axiosInstance.post(`${apiUrl}/file`, data.file, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })

export const editFile = (data: { file: FormData }) =>
  axiosInstance.put(`${apiUrl}/file`, data.file, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })

export const getFile = (data: { fileId: number }) =>
  axiosInstance.get(`${apiUrl}/file/${data.fileId}`)
