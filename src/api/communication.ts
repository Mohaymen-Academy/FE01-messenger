import { AxiosPromise } from 'axios'
import { apiUrl } from '@/utils/constants'
import axiosInstance from './axiosInstance'

export const newGroup = (data: {
  name: string
  photoId: number
  description: string
  profileIds: number[]
}) =>
  axiosInstance.post(`${apiUrl}/chat/group`, {
    ...data,
  })
export const newChannel = (data: {
  name: string
  photoId: number
  description: string
  profileIds: number[]
}) =>
  axiosInstance.post(`${apiUrl}/chat/channel`, {
    ...data,
  })
export const addMember = (data: { chatId: number; profiles: number[] }) =>
  axiosInstance.post(`${apiUrl}/subscribe/${data.chatId}/profiles`, {
    profiles: data.profiles,
  })
