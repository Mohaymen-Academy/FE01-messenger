import { AxiosPromise } from 'axios'
import { apiUrl } from '@/utils/constants'
import axiosInstance from './axiosInstance'

export const newGroup = (data: {
  name: string
  photo: null
  profileIds: number[]
}) =>
  axiosInstance.post(`${apiUrl}/chat/Group`, {
    ...data,
  })
export const newChannel = (data: {
  name: string
  photo: null
  description: string
  profileIds: number[]
}) =>
  axiosInstance.post(`${apiUrl}/chat/channel`, {
    ...data,
  })
export const addMember = (datas: { chatId: number; profiles: number[] }) =>
  // axiosInstance.post(`${apiUrl}/${data.chatId}/profiles?=${data.profiles}`)
  axiosInstance.post(`${apiUrl}/subscribe/${datas.chatId}/profiles`, {
    data: datas.profiles,
  })
