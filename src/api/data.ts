import { AxiosPromise } from 'axios'
import { apiUrl } from '@/utils/constants'
import axiosInstance from './axiosInstance'

export const chatListData = (data: { profileId: string }): AxiosPromise =>
  axiosInstance.get(`${apiUrl}/chat/get`, {
    ...data,
  })

export const initiateProfile = (data: {
  username: string
  firstName: string
  lastName: string
  bio: string
}): AxiosPromise =>
  axiosInstance.post(`${apiUrl}/profile`, {
    ...data,
  })
